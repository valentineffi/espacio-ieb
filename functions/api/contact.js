// Cloudflare Pages Function — POST /api/contact
// Recibe el formulario de acceso y envía un mail vía Resend.
// Secrets/vars (wrangler pages secret put / dashboard):
//   RESEND_API_KEY  (requerido)
//   CONTACT_TO      (opcional, default iebexternaladvisors@grupoieb.com.ar)
//   CONTACT_FROM    (opcional, default onboarding@resend.dev — sandbox de Resend)
//   PROD: setear CONTACT_FROM a un remitente de un dominio verificado en Resend,
//   ej. "IEB External Advisors <no-reply@iebexternaladvisors.com.ar>".

const PERFIL = {
  API: 'Agente Productor Independiente',
  ALyC: 'Asesor financiero en ALyC',
  TL: 'Asesor senior / Team leader',
  Otro: 'Otro',
};

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Cuerpo inválido' }, 400);
  }

  // Honeypot anti-bot: si viene relleno, fingimos éxito y no enviamos nada.
  if (body.website) return json({ ok: true });

  const nombre = String(body.nombre || '').trim();
  const email = String(body.email || '').trim();
  const perfil = String(body.perfil || '').trim();
  const telefono = String(body.telefono || '').trim();
  const alyc = String(body.alyc || '').trim();
  const clientes = String(body.clientes || '').trim();
  const mensaje = String(body.mensaje || '').trim();
  const consent = body.consent === true;

  if (nombre.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || !perfil || !consent) {
    return json({ error: 'Datos incompletos o inválidos' }, 422);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Servicio de email no configurado' }, 500);
  }

  const to = env.CONTACT_TO || 'iebexternaladvisors@grupoieb.com.ar';
  const from = env.CONTACT_FROM || 'IEB External Advisors <onboarding@resend.dev>';
  const perfilLabel = PERFIL[perfil] || perfil;

  const esc = (s) =>
    String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const row = (k, v) =>
    v
      ? `<tr><td style="padding:4px 16px 4px 0;color:#666;white-space:nowrap">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`
      : '';

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#111;line-height:1.5">
      <h2 style="margin:0 0 16px">Nueva solicitud de acceso · IEB External Advisors</h2>
      <table style="border-collapse:collapse">
        ${row('Nombre', nombre)}
        ${row('Email', email)}
        ${row('Teléfono', telefono)}
        ${row('Perfil', perfilLabel)}
        ${row('ALyC', alyc)}
        ${row('Cartera', clientes)}
      </table>
      ${mensaje ? `<p style="margin:16px 0 4px;color:#666">Mensaje:</p><p style="margin:0;white-space:pre-wrap">${esc(mensaje)}</p>` : ''}
    </div>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Nueva solicitud: ${nombre} (${perfilLabel})`,
      html,
    }),
  });

  if (!r.ok) {
    const detail = await r.text();
    return json({ error: 'No se pudo enviar el email', detail }, 502);
  }

  return json({ ok: true });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
