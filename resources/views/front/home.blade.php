@extends('front.layouts.layout2020')

@section('main')
    <router-view :auth="{{ json_encode($auth) }}">
    </router-view>
@endsection

