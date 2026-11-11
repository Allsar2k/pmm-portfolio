import { useState, type FormEvent } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { PageHeader } from '../components/PageHeader';
import { profile, socials } from '../content/profile';
import { buildMailto } from '../lib/mailto';

const field =
  'mt-2 block w-full rounded-xl border border-separator bg-surface px-4 py-3 text-ink placeholder:text-ink-3 focus:border-accent';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '');
    window.location.href = buildMailto(profile.email, {
      firstName: get('firstName'),
      lastName: get('lastName'),
      email: get('email'),
      phone: get('phone'),
      message: get('message'),
    });
    setSent(true);
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Looking forward to hearing from you." />
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Reach me directly</h2>
          <a href={`mailto:${profile.email}`} className="prose-link mt-4 inline-flex items-center gap-2 text-lg font-semibold">
            <Icon name="mail" />
            {profile.email}
          </a>
          <ul className="mt-6 space-y-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 text-ink-2 hover:text-ink"
                >
                  <Icon name={s.icon} className="text-lg" />
                  <span>
                    {s.label} <span className="text-ink-3">· {s.handle}</span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-card border border-separator bg-raised p-5 text-ink-2">
            <h2 className="font-sans text-base font-semibold text-ink">Your privacy</h2>
            <p className="mt-2 text-[0.9375rem]">
              This form doesn’t send anything to a server. It opens your own email app with the message filled in, and
              you decide whether to send it. The site uses no cookies and no analytics.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-card border border-separator bg-surface p-6 sm:p-8" noValidate={false}>
          <h2 className="text-2xl font-semibold text-ink">Send a message</h2>
          <p className="mt-1 text-ink-3">Fields marked “required” are needed to reply.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block font-medium text-ink">
              First name <span className="text-sm font-normal text-ink-3">(required)</span>
              <input name="firstName" autoComplete="given-name" required className={field} />
            </label>
            <label className="block font-medium text-ink">
              Last name
              <input name="lastName" autoComplete="family-name" className={field} />
            </label>
            <label className="block font-medium text-ink">
              Email <span className="text-sm font-normal text-ink-3">(required)</span>
              <input name="email" type="email" autoComplete="email" required className={field} />
            </label>
            <label className="block font-medium text-ink">
              Phone
              <input name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="block font-medium text-ink sm:col-span-2">
              Message <span className="text-sm font-normal text-ink-3">(required)</span>
              <textarea name="message" rows={6} required className={field} />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit" icon="arrowRight">
              Open in my email app
            </Button>
          </div>
          <p role="status" className="mt-4 text-ink-2">
            {sent && 'Your email app should now be open with the message ready to send.'}
          </p>
        </form>
      </Container>
    </>
  );
}
