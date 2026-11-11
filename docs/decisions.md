# Decision log

Decisions that shape the site, including ones that were reversed. When a later
change overturns one, add a new entry that says so rather than editing the old one.

## 2026-11 · Light by default, dark follows the system
Recruiters mostly read in daytime office settings and the content is editorial,
so the base theme is warm paper. Dark mode follows the visitor's system setting,
and the header toggle overrides it.

## 2026-11 · Two accent values, one brand orange
The brand orange (#FF7A45) only reaches 3.6:1 on the light background, below the
4.5:1 body-size links need. The light theme uses a darker orange (#B83E12); the
dark theme uses the brand orange itself. Both are checked in `contrast.test.ts`.

## 2026-11 · Company names instead of company logos
The Wix site showed VMLY&R, Publicis, DoorDash and Twitch logos. They are set as
type instead: third-party logos carry trademark terms, add weight, and need alt
text that only repeats the name.

## 2026-11 · Mobile menu is a disclosure, not a modal (reversal)
The plan called for trapping focus inside the open mobile menu. Reversed: the
menu pushes content down rather than covering it, so it is a disclosure, and the
WAI-ARIA disclosure pattern does not trap focus. It closes on Escape (focus
returns to the button) and after navigating.

## 2026-11 · Contact form opens the visitor's email app
A form service would mean a third party receiving visitors' details. The form
builds a `mailto:` link instead, so nothing leaves the browser unless the
visitor sends the email.

## 2026-11 · Phone number not published
The Wix site listed a phone number. The new site lists email and LinkedIn only;
add the number to `src/content/profile.ts` if it should be public.
