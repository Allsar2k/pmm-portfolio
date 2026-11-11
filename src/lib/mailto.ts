export interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Builds a mailto: link so the visitor sends the message from their own mail
 * app. Nothing passes through a server, so the site stores no personal data.
 */
export function buildMailto(to: string, m: ContactMessage): string {
  const name = `${m.firstName} ${m.lastName}`.trim();
  const lines = [
    m.message.trim(),
    '',
    '—',
    name,
    m.email.trim(),
    m.phone.trim(),
  ].filter((line, i, all) => line !== '' || (i > 0 && all[i - 1] !== ''));
  const subject = name ? `Hello from ${name}` : 'Hello from your portfolio';
  const params = new URLSearchParams({ subject, body: lines.join('\n').trim() });
  // URLSearchParams encodes spaces as "+", which mail apps show literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`;
}
