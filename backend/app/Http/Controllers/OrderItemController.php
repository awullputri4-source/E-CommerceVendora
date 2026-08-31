<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function index($orderId)
    {
        $items = OrderItem::with('product')
            ->where('order_id', $orderId)
            ->get();
        return response()->json($items);
    }

    public function store(Request $request)
    {
        $item = OrderItem::create([
            'order_id'      => $request->order_id,
            'product_id'    => $request->product_id,
            'quantity'      => $request->quantity,
            'price'         => $request->price,
        ]);
        return response()->json($item, 201);
    }
}
