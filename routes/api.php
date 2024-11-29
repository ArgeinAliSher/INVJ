<?php
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
});
Route::post('/login', [AuthController::class, 'login'])->middleware('web'); // Ensure "web" middleware here
Route::post('/logout', [AuthController::class, 'logout'])->middleware('web');




