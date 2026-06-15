import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder';
/**
 * @see \App\Http\Controllers\ContactController::__invoke
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
const ContactController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContactController.url(options),
    method: 'post',
});

ContactController.definition = {
    methods: ['post'],
    url: '/contact',
} satisfies RouteDefinition<['post']>;

/**
 * @see \App\Http\Controllers\ContactController::__invoke
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
ContactController.url = (options?: RouteQueryOptions) => {
    return ContactController.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\ContactController::__invoke
 * @see app/Http/Controllers/ContactController.php:16
 * @route '/contact'
 */
ContactController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ContactController.url(options),
    method: 'post',
});

export default ContactController;
