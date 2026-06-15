import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \Spatie\LaravelIgnition\Http\Controllers\HealthCheckController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/HealthCheckController.php:10
* @route '/_ignition/health-check'
*/
export const healthCheck = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: healthCheck.url(options),
    method: 'get',
})

healthCheck.definition = {
    methods: ["get","head"],
    url: '/_ignition/health-check',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\HealthCheckController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/HealthCheckController.php:10
* @route '/_ignition/health-check'
*/
healthCheck.url = (options?: RouteQueryOptions) => {
    return healthCheck.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\HealthCheckController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/HealthCheckController.php:10
* @route '/_ignition/health-check'
*/
healthCheck.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: healthCheck.url(options),
    method: 'get',
})

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\HealthCheckController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/HealthCheckController.php:10
* @route '/_ignition/health-check'
*/
healthCheck.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: healthCheck.url(options),
    method: 'head',
})

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\ExecuteSolutionController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/ExecuteSolutionController.php:15
* @route '/_ignition/execute-solution'
*/
export const executeSolution = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: executeSolution.url(options),
    method: 'post',
})

executeSolution.definition = {
    methods: ["post"],
    url: '/_ignition/execute-solution',
} satisfies RouteDefinition<["post"]>

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\ExecuteSolutionController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/ExecuteSolutionController.php:15
* @route '/_ignition/execute-solution'
*/
executeSolution.url = (options?: RouteQueryOptions) => {
    return executeSolution.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\ExecuteSolutionController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/ExecuteSolutionController.php:15
* @route '/_ignition/execute-solution'
*/
executeSolution.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: executeSolution.url(options),
    method: 'post',
})

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\UpdateConfigController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/UpdateConfigController.php:10
* @route '/_ignition/update-config'
*/
export const updateConfig = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateConfig.url(options),
    method: 'post',
})

updateConfig.definition = {
    methods: ["post"],
    url: '/_ignition/update-config',
} satisfies RouteDefinition<["post"]>

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\UpdateConfigController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/UpdateConfigController.php:10
* @route '/_ignition/update-config'
*/
updateConfig.url = (options?: RouteQueryOptions) => {
    return updateConfig.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelIgnition\Http\Controllers\UpdateConfigController::__invoke
* @see vendor/spatie/laravel-ignition/src/Http/Controllers/UpdateConfigController.php:10
* @route '/_ignition/update-config'
*/
updateConfig.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateConfig.url(options),
    method: 'post',
})

const ignition = {
    healthCheck: Object.assign(healthCheck, healthCheck),
    executeSolution: Object.assign(executeSolution, executeSolution),
    updateConfig: Object.assign(updateConfig, updateConfig),
}

export default ignition