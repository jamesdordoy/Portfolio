# Portfolio — Claude Rules

## Project overview

Personal portfolio built with Laravel 13, Vue 3, Inertia.js 3, TypeScript 6, and Tailwind 4.
Deployed via Laravel Forge. CI: Pest (PHP) + Vitest (frontend).

**Before touching any package, read its `readme.md` first.**

---

## Stack

| Layer | Package / version |
|---|---|
| PHP | 8.3+ |
| Framework | Laravel 13 |
| Frontend bridge | Inertia.js 3 + `inertiajs/inertia-laravel` |
| Vue | 3.x |
| TypeScript | 6.x |
| CSS | Tailwind 4 |
| Data / DTOs | `spatie/laravel-data` 4.x |
| TypeScript generation | `spatie/laravel-typescript-transformer` 3.x |
| Query building | `spatie/laravel-query-builder` 7.x |
| Routing (frontend) | `laravel/wayfinder` |
| Testing (PHP) | Pest |
| Testing (JS) | Vitest |

---

## Key principles

- Composition over inheritance — always.
- Dependency injection over facades where reasonable.
- No shortened variable names — ever.
- No raw foreach loops — use Laravel Collections (`each`, `map`, `filter`, `reduce`, etc.).
- No `DB` facade — use models and Eloquent.
- Prefer Laravel helpers (`Str::`, `Arr::`, `collect()`) over native PHP functions.
- SOLID; keep things small and single-purpose.

---

## PHP / Laravel conventions

### Strict typing
Every PHP file must open with:
```php
declare(strict_types=1);
```

### Controllers
- Must be `final`.
- Follow the resourceful controller methodology (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`), or a single `__invoke` for single-action controllers.
- **No controller method may exceed 10 lines.** Logic belongs in Actions or Services.
- Never interact directly with the model inside a controller — delegate to an Action via a pipeline.

```php
// Good
final class ContactController
{
    public function __invoke(ContactData $request): RedirectResponse
    {
        app(Pipeline::class)
            ->send(ContactData::from($request->all()))
            ->through([CreateContact::class])
            ->then(fn (Contact $contact) => DiscordAlert::message('...'));

        return redirect(CreateContact::redirectTo());
    }
}
```

### DTOs (Data objects)
- Every DTO extends `Spatie\LaravelData\Data`.
- All DTOs live in `app/Dto/` (subdirectories allowed, e.g. `app/Dto/Pages/`).
- Every DTO is the single source of truth for request data — never use `$request->only(...)` or `$request->all()` directly outside of `Data::from(...)`.
- Actions **only** accept a DTO for model data — never a raw array or `Request`.
- DTOs are automatically picked up by the TypeScript transformer (`DataClassTransformer`) — no `#[TypeScript]` attribute needed.

```php
// Good
class CreateContact
{
    public function handle(ContactData $data, Closure $next): Contact
    {
        return tap(
            Contact::create($data->all()),
            fn (Contact $contact) => $next($contact)
        );
    }
}
```

### Actions
- Live in `app/Actions/{Domain}/`.
- Accept only a DTO for model data.
- Expose a `handle(DTO $data, Closure $next)` for pipeline usage and an `__invoke` for standalone usage.
- Static `redirectTo()` helper when relevant.

### Pipelines
- Compose Actions with `app(Pipeline::class)->send(...)->through([...])->then(...)`.
- Keeps each Action independently testable.

### Query builders
- Use `spatie/laravel-query-builder` — never raw Eloquent query chains on the controller or service level.
- Follow the existing pattern in `app/QueryBuilder/` (e.g. `UserQuery.php`).

### Error handling
- Use Laravel's exception handler.
- Create domain-specific custom exceptions when the error is meaningful to the caller.
- Use `try/catch` only for genuinely expected exceptions.

### Validation
- Use `Spatie\LaravelData` rule attributes on DTO constructor properties for validation.
- Use Laravel Form Requests only when a DTO is not appropriate.

### Routes
- Always named, always resourceful.
- Use `HandlePrecognitiveRequests` middleware on mutating routes.
- Use `laravel/wayfinder` for route references on the frontend.

---

## TypeScript / Frontend conventions

### Type generation
- Generated types live in `resources/js/generated/generated.d.ts` (namespace `App.Dto.*`).
- Regenerate after any DTO change: `php artisan typescript:transform`.
- **Always use generated types for Inertia props** — never hand-write DTO shapes.

### Vue components
- `<script lang="ts" setup>` — always.
- Props typed with `defineProps<{}>()` / `withDefaults(defineProps<{}>(), {})`.
- Inertia page props use the generated `App.Dto.*` namespace directly.

```ts
// Good
withDefaults(
    defineProps<{
        homePage: App.Dto.Pages.HomePage;
        errors?: Record<string, string>;
    }>(),
    { errors: () => ({}) }
);
```

### Component structure
```
resources/js/
  Components/
    Base/        # Primitive/reusable UI
    Forms/       # Form components
    Generic/     # Layout-level (Nav, Footer, etc.)
    Inputs/      # Input primitives
    Sections/    # Page sections
  Pages/         # Inertia page components (one per route)
  Stores/        # Pinia stores
  actions/       # Frontend action helpers
  types/         # Hand-written ambient types (not generated)
  generated/     # Auto-generated — never edit by hand
```

### Stores
- Use Pinia.
- Persist with `pinia-plugin-persistedstate` where appropriate.

### Routing (frontend)
- Use `laravel/wayfinder` generated helpers — never hard-code URL strings.

### Styling
- Tailwind 4 utility classes only.
- No custom CSS unless unavoidable.
- Prettier formats Vue/TS files — run `npm run format`.

---

## Testing

### PHP — Pest
- All tests written with Pest.
- Test Actions in isolation — pass a DTO directly, mock nothing except external I/O.
- Pipeline integration tests go in `Feature/`.

### JS — Vitest
- Component tests in `resources/js/Tests/`.
- Use `@vue/test-utils` + `happy-dom`.
- Run: `npm test` / `npm run coverage`.

---

## Commands reference

```bash
# TypeScript type generation
php artisan typescript:transform

# Dev server
npm run dev

# Production build (app + SSR)
npm run build

# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format

# PHP tests
./vendor/bin/pest

# JS tests
npm test
```
