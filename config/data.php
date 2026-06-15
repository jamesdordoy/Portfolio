<?php

use Illuminate\Contracts\Support\Arrayable;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Casts\EnumCast;
use Spatie\LaravelData\Normalizers\ArrayableNormalizer;
use Spatie\LaravelData\Normalizers\ArrayNormalizer;
use Spatie\LaravelData\Normalizers\JsonNormalizer;
use Spatie\LaravelData\Normalizers\ModelNormalizer;
use Spatie\LaravelData\Normalizers\ObjectNormalizer;
use Spatie\LaravelData\RuleInferrers\AttributesRuleInferrer;
use Spatie\LaravelData\RuleInferrers\BuiltInTypesRuleInferrer;
use Spatie\LaravelData\RuleInferrers\NullableRuleInferrer;
use Spatie\LaravelData\RuleInferrers\RequiredRuleInferrer;
use Spatie\LaravelData\RuleInferrers\SometimesRuleInferrer;
use Spatie\LaravelData\Transformers\ArrayableTransformer;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;
use Spatie\LaravelData\Transformers\EnumTransformer;

return [
    'date_format' => DATE_ATOM,
    'transformers' => [
        DateTimeInterface::class => DateTimeInterfaceTransformer::class,
        Arrayable::class => ArrayableTransformer::class,
        BackedEnum::class => EnumTransformer::class,
    ],
    'casts' => [
        DateTimeInterface::class => DateTimeInterfaceCast::class,
        BackedEnum::class => EnumCast::class,
    ],
    'rule_inferrers' => [
        SometimesRuleInferrer::class,
        BuiltInTypesRuleInferrer::class,
        AttributesRuleInferrer::class,
        NullableRuleInferrer::class,
        RequiredRuleInferrer::class,
    ],
    'normalizers' => [
        ModelNormalizer::class,
        ArrayableNormalizer::class,
        ObjectNormalizer::class,
        ArrayNormalizer::class,
        JsonNormalizer::class,
    ],
    'wrap' => null,
    'var_dumper_caster_mode' => 'development',
];
