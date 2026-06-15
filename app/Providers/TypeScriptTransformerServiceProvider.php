<?php

namespace App\Providers;

use Spatie\LaravelTypeScriptTransformer\LaravelData\Transformers\DataClassTransformer;
use Spatie\LaravelTypeScriptTransformer\TypeScriptTransformerApplicationServiceProvider as BaseTypeScriptTransformerServiceProvider;
use Spatie\TypeScriptTransformer\Transformers\EnumTransformer;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfigFactory;
use Spatie\TypeScriptTransformer\Writers\GlobalNamespaceWriter;

class TypeScriptTransformerServiceProvider extends BaseTypeScriptTransformerServiceProvider
{
    protected function configure(TypeScriptTransformerConfigFactory $config): void
    {
        $config
            ->transformer(DataClassTransformer::class)
            ->transformer(EnumTransformer::class)
            ->transformDirectories(app_path())
            ->replaceType(\DateTime::class, 'string')
            ->replaceType(\DateTimeImmutable::class, 'string')
            ->replaceType(\Carbon\CarbonImmutable::class, 'string')
            ->replaceType(\Carbon\Carbon::class, 'string')
            ->writer(new GlobalNamespaceWriter('generated.d.ts'));
    }
}
