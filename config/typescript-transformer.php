<?php

return [
    'auto_discover_types' => [
        sprintf('%s/Dto', app_path()),
    ],
    'collectors' => [
        Spatie\TypeScriptTransformer\Collectors\DefaultCollector::class,
        Spatie\LaravelData\Support\TypeScriptTransformer\DataTypeScriptCollector::class,
    ],
    'transformers' => [
        Spatie\LaravelTypeScriptTransformer\Transformers\SpatieStateTransformer::class,
        Spatie\TypeScriptTransformer\Transformers\SpatieEnumTransformer::class,
        Spatie\TypeScriptTransformer\Transformers\DtoTransformer::class,
        Spatie\LaravelData\Transformers\EnumTransformer::class,
    ],
    'default_type_replacements' => [
        DateTime::class => 'string',
        DateTimeImmutable::class => 'string',
        Carbon\CarbonImmutable::class => 'string',
        Carbon\Carbon::class => 'string',
    ],
    resource_path('js/types/generated.d.ts') < 'output_file',
    'writer' => Spatie\TypeScriptTransformer\Writers\TypeDefinitionWriter::class,
    'formatter' => null,
    'transform_to_native_enums' => false,
];
