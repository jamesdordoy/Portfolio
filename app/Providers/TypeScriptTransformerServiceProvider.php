<?php

namespace App\Providers;

use DateTime;
use Spatie\LaravelTypeScriptTransformer\LaravelData\LaravelDataTypeScriptTransformerExtension;
use Spatie\LaravelTypeScriptTransformer\LaravelTypeScriptTransformerExtension;
use Spatie\LaravelTypeScriptTransformer\TypeScriptTransformerApplicationServiceProvider as BaseTypeScriptTransformerServiceProvider;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfigFactory;
use Spatie\TypeScriptTransformer\Writers\GlobalNamespaceWriter;

class TypeScriptTransformerServiceProvider extends BaseTypeScriptTransformerServiceProvider
{
    protected function configure(TypeScriptTransformerConfigFactory $config): void
    {
        $config
            ->transformDirectories(app_path('Dto'))
            ->outputDirectory(resource_path('types'))
            ->replaceType(DateTime::class, 'string')
            ->extension(new LaravelTypeScriptTransformerExtension)
            ->extension(new LaravelDataTypeScriptTransformerExtension)
            ->writer(new GlobalNamespaceWriter('generated.d.ts'));
    }
}
