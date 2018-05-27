@extends('layouts.layout2017')

@section('hello')

<particles-view>

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

                <div class="login-form-container">
                    <div class="form-header">
                        <h2>James Dordoy</h2>
                    </div>
                    <form class="login-form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} text-left">

                            <label for="email" class="control-label">E-Mail Address</label>
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} text-left">

                            <label for="password" class="control-label">Password</label>
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group">
                            <div class="col-md-6">
                                <label class="pull-left">
                                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                </label>
                            </div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-primary pull-right">
                                    Login
                                </button>
                            </div>
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                Forgot Your Password?
                            </a>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    </div>

</particles-view>

@endsection

@section('main')

@endsection
