<?php

namespace App\Services;

use App\Contracts\Services\AssetServiceContract;
use App\Models\Asset;

class AssetService extends Service implements AssetServiceContract
{
    public function store($id, $type, $image, $url = null)
    {
        $asset = new Asset();
        $asset->assetable_id = $id;
        $asset->assetable_type = $type;
        $asset->name = $image->getClientOriginalName();
        $asset->file_name = $image->getClientOriginalName();
        $asset->mime_type = $image->getClientOriginalName();
        $asset->url = $url;
        $asset->size = 111;
        $asset->save();

        return $asset;
    }

    public function update($id, $image, $url = null)
    {
        $asset = Asset::find($id);
        $asset->name = $image->getClientOriginalName();
        $asset->file_name = $image->getClientOriginalName();
        $asset->mime_type = $image->getClientOriginalName();
        $asset->url = $url;
        $asset->size = 111;
        $asset->save();

        return $asset;
    }
}
