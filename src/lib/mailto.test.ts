import { buildMailto } from './mailto';

describe('buildMailto', () => {
  const base = { firstName: 'Ada', lastName: 'Lovelace', email: 'ada@example.com', phone: '', message: 'Hi Chris, let’s talk.' };

  it('addresses the email and puts the sender in the subject', () => {
    const url = new URL(buildMailto('chris@example.com', base));
    expect(url.protocol).toBe('mailto:');
    expect(url.pathname).toBe('chris@example.com');
    expect(url.searchParams.get('subject')).toBe('Hello from Ada Lovelace');
  });

  it('encodes spaces as %20, never +', () => {
    expect(buildMailto('c@example.com', base)).not.toContain('+');
  });

  it('includes the message and contact details, skipping empty fields', () => {
    const body = new URL(buildMailto('c@example.com', base)).searchParams.get('body');
    expect(body).toBe('Hi Chris, let’s talk.\n\n—\nAda Lovelace\nada@example.com');
  });
});
