<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function index()
    {
        $vendors = Vendor::with('products')->get();
        return response()->json($vendors);
    }
    public function show($id)
    {
        $vendor = Vendor::with('products')->findOrFail($id);
        return response()->json($vendor);
    }
}
