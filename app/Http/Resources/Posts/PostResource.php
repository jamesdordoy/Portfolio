<?php

namespace App\Http\Resources\Posts;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PostResource extends JsonResource
{
    protected $excerptLength = 12;

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
            'id'         => $this->id,
            'user_id'    => $this->user_id,
            'title'      => $this->title,
            'subtitle'   => $this->subtitle,
            'body'       => $this->body,
            'excerpt'    => Str::words($this->body, $this->excerptLength),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
