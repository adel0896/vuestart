<?php

use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});
// Route::get('skills', function(){
//   return ['Laravel', 'Vue', 'PHP', 'JavaScript', 'Tooling' ];
// });

Route::get('/projects', '\App\Http\Controllers\ProjectsController@create');
Route::post('/projects', '\App\Http\Controllers\ProjectsController@store');
