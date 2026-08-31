<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::with('items.product')
            ->where('user_id', $request->user()->id)
            ->get();
    }

    public function store(Request $request)
    {
        $order = Order::create([
            'user_id'       => $request->user()->id,
            'order_number'  => 'ORD-' . time(),
            'total_price'   => $request->total_price,
            'address'       => $request->address,
            'status'        => 'pending'
        ]);

        return response()->json($order, 201);
    }
}
