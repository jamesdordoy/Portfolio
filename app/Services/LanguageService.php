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

    public function all()
    {
        return Language::orderBy('id', 'ASC')->get();
    }

    public function store($payload, $image = null)
    {
        $language = new Language;
        $language->name = $payload['name'];
        $language->description = $payload['description'];

        if ($language->save()) {

            if (! is_null($image)) {
                $imageName = $language->id .'.'. $image->getClientOriginalExtension();

                $asset = null;
                $imageUrl = config('app.url')."/images/languages/".$imageName."?stamp=".Carbon::now()->timestamp;

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
                $imageName = $id .'.'. $image->getClientOriginalExtension();

                $asset = null;
                $imageUrl = config('app.url')."/images/languages/".$imageName."?stamp=".Carbon::now()->timestamp;

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

    public function uploadImage($image, $imageName)
    {
        if (! is_null($image)) {
            $imagePath = base_path() . '/public/images/languages/';
            $image->move($imagePath, $imageName);
        }
    }
}
