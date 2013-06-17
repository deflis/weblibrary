<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@showWelcome');

Route::model('book','Book');
Route::get('books', 'BookController@showList');
Route::get('book/{book}', 'BookController@showItem');
Route::put('book', 'BookController@putNewItem');
Route::put('book/{book}', 'BookController@putItem');
Route::delete('book/{book}', 'BookController@deleteItem');
