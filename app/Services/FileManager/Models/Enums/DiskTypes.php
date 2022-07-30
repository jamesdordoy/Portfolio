<?php

namespace App\Services\FileManager\Models\Enums;

enum DiskTypes: string
{
    case Local = 'local';
    case Open  = 'public';
}
