import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder';
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
    store: Object.assign(store, store),
};

export default newsletter;
