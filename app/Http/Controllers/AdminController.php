<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class AdminController extends Controller
{
    public function index()
    {
        // Here we provide posts from the database to prop that we created in component
        return Inertia::render('Index');
    }

    public function signin()
    {
        // Here we provide posts from the database to prop that we created in component
        return Inertia::render('SignIn');
    }
}
