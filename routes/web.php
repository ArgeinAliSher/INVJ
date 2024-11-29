<?php
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
Route::get('/', [AdminController::class, 'signin'])->name('login');
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/settings', [AdminController::class, 'settings'])->name('settings');
    Route::get('/category/manage-category', [AdminController::class, 'manageCategory'])->name('manageCategory');
    Route::get('/category/category-orders', [AdminController::class, 'categoryOrders'])->name('categoryOrders');
});