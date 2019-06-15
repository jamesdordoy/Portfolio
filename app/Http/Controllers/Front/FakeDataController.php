<?php

namespace App\Http\Controllers\Front;

use App\Models\DatatableFakeUser;
use App\Models\Language;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class FakeDataController extends Controller
{
    /**
     * Show the Home Page
     *
     * @return \Illuminate\Http\Response
     */
    public function users(Request $request)
    {
        $length = $request->input('length');
        $column = $request->input('column');
        $dir = $request->input('dir', 'asc');
        $searchValue = $request->input('search');

        $isAdmin = $request->input('isAdmin');

        $query = DatatableFakeUser::dataTableQuery($column, $dir, $searchValue);
        
        if (isset($isAdmin) && ! empty($isAdmin)) {
            $query->whereType($isAdmin);
        }
            
        $data = $query->paginate($length);

        return new DataTableCollectionResource($data);
    }
}
