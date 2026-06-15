import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder';
/**
 * @see \App\Http\Controllers\NewsletterController::destroy
 * @see app/Http/Controllers/NewsletterController.php:0
 * @route '/newsletter/unsubscribe'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(options),
    method: 'get',
});

destroy.definition = {
    methods: ['get', 'head'],
    url: '/newsletter/unsubscribe',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\NewsletterController::destroy
 * @see app/Http/Controllers/NewsletterController.php:0
 * @route '/newsletter/unsubscribe'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\NewsletterController::destroy
 * @see app/Http/Controllers/NewsletterController.php:0
 * @route '/newsletter/unsubscribe'
 */
destroy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\NewsletterController::destroy
 * @see app/Http/Controllers/NewsletterController.php:0
 * @route '/newsletter/unsubscribe'
 */
destroy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: destroy.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\NewsletterController::store
 * @see app/Http/Controllers/NewsletterController.php:14
 * @route '/newsletter'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
});

store.definition = {
    methods: ['post'],
    url: '/newsletter',
} satisfies RouteDefinition<['post']>;

/**
 * @see \App\Http\Controllers\NewsletterController::store
 * @see app/Http/Controllers/NewsletterController.php:14
 * @route '/newsletter'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\NewsletterController::store
 * @see app/Http/Controllers/NewsletterController.php:14
 * @route '/newsletter'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
});

const newsletter = {
    destroy: Object.assign(destroy, destroy),
    store: Object.assign(store, store),
};

export default newsletter;
