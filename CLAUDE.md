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

### Data objects
- Every data class extends `Spatie\LaravelData\Data`.
- All data classes live in `app/Data/` (subdirectories allowed, e.g. `app/Data/Pages/`).
- Every data class is the single source of truth for request data — never use `$request->only(...)` or `$request->all()` directly outside of `Data::from(...)`.
- Actions **only** accept a data object for model data — never a raw array or `Request`.
- Data classes are automatically picked up by the TypeScript transformer — no `#[TypeScript]` attribute needed.

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
- Accept only a data object for model data.
- Expose a `handle(Data $data, Closure $next)` for pipeline usage and an `__invoke` for standalone usage.
- Static `redirectTo()` helper when relevant.

### Contracts
- Interfaces for actions live in `app/Contracts/Actions/{Domain}/`.
- Name them `{ActionName}Contract`.

### Pipelines
- Compose Actions with `app(Pipeline::class)->send(...)->through([...])->then(...)`.
- Keeps each Action independently testable.

### Models
- All models extend `App\Models\EloquentModel` (guards the primary key from mass-assignment via `$guarded = ['id']`).

### Error handling
- Use Laravel's exception handler.
- Create domain-specific custom exceptions when the error is meaningful to the caller.
- Use `try/catch` only for genuinely expected exceptions.

### Validation
- Use `Spatie\LaravelData` rule attributes on data class constructor properties for validation.
- Use Laravel Form Requests only when a data class is not appropriate.

### Routes
- Always named, always resourceful.
- Use `HandlePrecognitiveRequests` middleware on mutating routes.
- Use `laravel/wayfinder` for route references on the frontend.

---

## TypeScript / Frontend conventions

### Type generation
- Generated types live in `resources/types/generated.d.ts` (namespace `App.Data.*`).
- Regenerate after any data class change: `php artisan typescript:transform`.
- **Always use generated types for Inertia props** — never hand-write data class shapes.

### Vue components
- `<script lang="ts" setup>` — always.
- Props typed with `defineProps<{}>()` / `withDefaults(defineProps<{}>(), {})`.
- Inertia page props use the generated `App.Data.*` namespace directly.

```ts
// Good
withDefaults(
    defineProps<{
        homePage: App.Data.Pages.HomePage;
        errors?: Record<string, string>;
    }>(),
    { errors: () => ({}) }
);
```

### Composables
- Live in `resources/js/composables/`.
- Standard Vue composition API — `ref`, `onMounted`, etc.

### Component structure
```
resources/
  types/           # Auto-generated TypeScript types (never edit by hand)
  js/
    actions/       # Wayfinder-generated action helpers (never edit by hand)
    components/
      base/        # Primitive/reusable UI
      forms/       # Form components
      generic/     # Shared layout components (Nav, Footer, etc.)
      inputs/      # Input primitives
      sections/    # Page sections
    composables/   # Vue composables
    pages/         # Inertia page components (one per route)
    routes/        # Wayfinder-generated route definitions (never edit by hand)
    tests/         # Component and unit tests
    wayfinder/     # Wayfinder core (never edit by hand)
```

### Routing (frontend)
- Use `laravel/wayfinder` generated helpers from `resources/js/routes/` — never hard-code URL strings.

### Styling
- Tailwind 4 utility classes only.
- No custom CSS unless unavoidable.
- Prettier formats Vue/TS files — run `npm run format`.

---

## Testing

### PHP — Pest
- All tests written with Pest.
- Test Actions in isolation — pass a data object directly, mock nothing except external I/O.
- Pipeline integration tests go in `Feature/`.

### JS — Vitest
- Component tests in `resources/js/tests/`.
- Use `@vue/test-utils` + `happy-dom`.
- Run: `npm test` / `npm run coverage`.

---

## Commands reference

```bash
# TypeScript type generation
php artisan typescript:transform

# Wayfinder route generation
php artisan wayfinder:generate

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

# PHP static analysis
composer analyse

# JS tests
npm test
```
