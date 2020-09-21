<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TimelineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'from'        => $this->from,
            'to'          => $this->to,
            'name'        => $this->name,
            'title'       => $this->title,
            'icon'        => $this->icon,
            'description' => $this->body,
        ];
    }
}
