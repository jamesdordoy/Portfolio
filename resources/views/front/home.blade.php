@extends('front.layouts.layout')

@section('main')
    <router-view :auth="{{ json_encode($auth) }}">
    </router-view>
@endsection