# Portfolio — Symfony rewrite (learning exercise)

A from-scratch rewrite of the parent Laravel/Vue/Inertia portfolio, built purely to learn Symfony
by re-solving the same problems in it. **Not deployed anywhere** — SQLite only, no production
config, lives on the `symfony-rewrite` branch next to the original Laravel app rather than
replacing it.

## Stack

| Layer | Laravel side | Symfony side |
|---|---|---|
| Framework | Laravel 13 | Symfony 8.1 (latest at time of writing — 7.x was blocked by Composer's audit-on-install security check) |
| ORM | Eloquent | Doctrine ORM 3 |
| Templates / frontend | Inertia.js 3 + Vue 3 + TypeScript | Twig + Symfony UX (Stimulus + Turbo) |
| DTOs / validation | `spatie/laravel-data` | Symfony Form + Validator constraints |
| Assets | Vite | AssetMapper + `symfonycasts/tailwind-bundle` |
| Database (local) | SQLite/MySQL via `.env` | SQLite (`var/data_dev.db`) |
| Seed data | `database/seeders/*.php` + factories | `src/DataFixtures/AppFixtures.php` + Foundry factories in `src/Factory/` |
| Tests | Pest | PHPUnit + `dama/doctrine-test-bundle` (transaction-per-test) |

## Running it

```bash
cd symfony
composer install
php bin/console doctrine:migrations:migrate --no-interaction
php bin/console doctrine:fixtures:load --no-interaction
php bin/console tailwind:build --watch &   # or use the "Symfony Tailwind" Solo process
php -S 127.0.0.1:8090 -t public            # or use the "Symfony Serve" Solo process
```

Visit `http://127.0.0.1:8090/`. Both processes are also wired into the repo's `solo.yml` (not
auto-started, since this branch is a side project) if you use [Solo](https://soloterm.com).

Run tests with `php bin/phpunit`.

## Where this deliberately diverges from a 1:1 port

Being a learning exercise, the goal was idiomatic Symfony, not a byte-for-byte port. Notable
divergences, in the order they came up:

- **Tags/Taggable → a plain `Project`↔`Language` many-to-many.** Laravel's `tags` table is a
  generic polymorphic pivot (a `Tag` row wraps an arbitrary "taggable" model, and a second
  `taggables` pivot links other arbitrary models to those tags). In practice it's only ever used
  to link `Project` to `Language`. Doctrine has no native polymorphic relation, so this is a
  straight `ManyToMany` via a `project_language` join table — see `src/Entity/Project.php` /
  `src/Entity/Language.php`.
- **`TimelineEvent.from`/`.to` are reserved SQL keywords.** The Doctrine-generated migration
  happened to quote them, but the ORM's generated `INSERT` did not, causing a syntax error on
  first fixture load. Mapped columns are `starts_at`/`ends_at` instead (PHP property/getter names
  are still `from`/`to`).
- **No Swiper carousel.** The projects section is a plain responsive CSS grid — Swiper is a
  Vue-ecosystem library with no reason to exist here.
- **Icons are plain text/emoji glyphs**, not FontAwesome or hand-authored SVGs. `symfony/ux-icons`
  is installed if you want to swap them in — Iconify fetches on demand and needs network access on
  first render of each icon, which isn't guaranteed in every dev environment.
- **reCAPTCHA v3 degrades gracefully with no real Google keys.** `RECAPTCHA_SITE_KEY` /
  `RECAPTCHA_SECRET_KEY` are blank in `.env` on purpose; `App\Service\RecaptchaVerifier` treats a
  blank secret as "skip verification, always pass" rather than requiring live credentials this
  repo will never have. Set both env vars to turn on real verification.
- **CSRF protection is Symfony 8's newer stateless double-submit-cookie scheme**, completed
  client-side by `assets/controllers/csrf_protection_controller.js` (from the `stimulus-bundle`
  recipe). It's disabled in the `test` environment only (`config/packages/csrf.yaml`) because
  PHPUnit's BrowserKit test client doesn't execute JavaScript.
- **Newsletter signup is a full-page redirect, not a Turbo Stream partial.** One small footer
  form didn't seem worth a second submission pattern alongside the contact form.

## Two real bugs the test suite caught that manual browser testing didn't

1. Symfony's Form component guesses `empty_data` from a mapped property's type; for the
   non-nullable `string` properties here it guessed `null`, so a blank required field crashed with
   a `TypeError` instead of failing validation. Fixed with an explicit `'empty_data' => ''` on each
   text field in `ContactType`/`NewsletterType`.
2. `EmailType` only adds an HTML5 `type="email"` attribute — it does **not** validate server-side.
   An invalid address sailed through form validation and only blew up later when Symfony Mailer's
   `Address` class rejected it. Fixed by adding an explicit `Assert\Email` constraint.
