<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Asset;
use App\Models\Language;
use App\Contracts\Services\LanguageServiceContract;
use App\Contracts\Services\AssetServiceContract;

class LanguageService extends Service implements LanguageServiceContract
{
    protected $assetService;

    public function __construct(AssetServiceContract $assetService)
    {
        $this->assetService = $assetService;
    }

    public function store($payload, $image = null)
    {
        $language = new Language;
        $language->name = $payload['name'];
        $language->description = $payload['description'];

        if ($language->save()) {

            if (! is_null($image)) {

                $asset = null;
                $imageName = $this->imageName($language->id, $image);
                $imageUrl = $this->imageUrl($imageName);

                $asset = $this->assetService->store(
                    $language->id,
                    Language::class,
                    $image,
                    $imageUrl
                );

                $this->uploadImage($image, $imageName);
            }

            return $language;            
        }

        return null;
    }

    public function update($id, $payload, $image = null)
    {        
        $language = Language::find($id);
        $language->name = $payload['name'];
        $language->description = $payload['description'];

        if ($language->save()) {

            if (! is_null($image)) {

                $asset = null;
                $imageName = $this->imageName($id, $image);
                $imageUrl = $this->imageUrl($imageName);

                $asset = $this->assetService->store(
                    $language->id,
                    Language::class,
                    $image,
                    $imageUrl
                );

                $this->uploadImage($image, $imageName);
            }
            
            return $language;
        }

        return null;
    }

    public function imageName($id, $image)
    {
        return $id .'.'. $image->getClientOriginalExtension();
    }

    public function imageUrl($imageName)
    {
        return config('app.url')."/images/languages/".$imageName."?stamp=".Carbon::now()->timestamp;
    }

    public function uploadImage($image, $imageName)
    {
        if (! is_null($image)) {
            $image = \Image::make(
                $image->getRealPath()
            )
            ->resize(
                340,
                340,
                function ($constraint) {
                    $constraint->aspectRatio();
                }
            );

            $image->save(public_path("images/languages/{$imageName}"));
        }
    }
}
