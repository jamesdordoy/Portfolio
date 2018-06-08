<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Examples\Example;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function index()
     {
        $examples = Example::orderBy('id', 'ASC')->get();
        $id = Example::max('id') + 1;

        return view('tables.examples', compact('examples', 'id'));
     }
}
