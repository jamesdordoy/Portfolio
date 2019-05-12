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
        $limit = $request->input('length');
        $index = $request->input('column');
        $orderBy = $request->input('dir');
        $search = $request->input('search');

        return new DataTableCollectionResource(
            DatatableFakeUser::dataTableQuery($index, $orderBy, $limit, $search)
        );
    }
}
