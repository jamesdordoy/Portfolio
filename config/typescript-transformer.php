<?php

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Support\TypeScriptTransformer\DataTypeScriptCollector;
use Spatie\LaravelData\Transformers\EnumTransformer;
use Spatie\LaravelTypeScriptTransformer\Transformers\SpatieStateTransformer;
use Spatie\TypeScriptTransformer\Collectors\DefaultCollector;
use Spatie\TypeScriptTransformer\Transformers\DtoTransformer;
use Spatie\TypeScriptTransformer\Transformers\SpatieEnumTransformer;
use Spatie\TypeScriptTransformer\Writers\TypeDefinitionWriter;

return [
    'auto_discover_types' => [
        sprintf('%s/Dto', app_path()),
    ],
    'collectors' => [
        DefaultCollector::class,
        DataTypeScriptCollector::class,
    ],
    'transformers' => [
        SpatieStateTransformer::class,
        SpatieEnumTransformer::class,
        DtoTransformer::class,
        EnumTransformer::class,
    ],
    'default_type_replacements' => [
        DateTime::class => 'string',
        DateTimeImmutable::class => 'string',
        CarbonImmutable::class => 'string',
        Carbon\Carbon::class => 'string',
    ],
    resource_path('js/types/generated.d.ts') < 'output_file',
    'writer' => TypeDefinitionWriter::class,
    'formatter' => null,
    'transform_to_native_enums' => false,
];
