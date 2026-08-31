<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'vendor_id', 'category_id', 'name', 'description', 'price', 'original_price', 'stock', 'image', 'status', 'slug',
        'rating', 'rating_count', 'badge', 'badge_text', 'color', 'images', 'colors', 'sizes', 'specs', 'reviews'
    ];

    protected $casts = [
        'images' => 'array',
        'colors' => 'array',
        'sizes' => 'array',
        'specs' => 'array',
        'reviews' => 'array',
        'price' => 'float',
        'original_price' => 'float',
    ];

    // relasi ke vendor
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }
    // Relasi ke kategori
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
