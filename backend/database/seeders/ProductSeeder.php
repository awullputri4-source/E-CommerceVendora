<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use App\Models\Vendor;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $json = file_get_contents(database_path('seeders/data.json'));
        $data = json_decode($json, true);

        foreach ($data['products'] as $p) {
            // Find vendor
            $vendorSlug = strtolower(str_replace(' ', '-', $p['vendor']));
            $vendor = Vendor::where('slug', $vendorSlug)->first();

            // Find category
            $category = Category::where('slug', $p['category'])->first();

            if (!$vendor || !$category) {
                continue;
            }

            // Map stock boolean or numbers
            $stock = 50;
            if (isset($p['stock'])) {
                if ($p['stock'] === true) {
                    $stock = 50;
                } elseif ($p['stock'] === false) {
                    $stock = 0;
                } else {
                    $stock = intval($p['stock']);
                }
            }

            // Parse specs/colors/sizes/reviews to arrays (they will be encoded as JSON by cast)
            Product::create([
                'vendor_id' => $vendor->id,
                'category_id' => $category->id,
                'name' => $p['name'],
                'slug' => Str::slug($p['name']) . '-' . $p['id'],
                'description' => $p['description'] ?? null,
                'price' => floatval($p['price']),
                'original_price' => isset($p['originalPrice']) ? floatval($p['originalPrice']) : null,
                'stock' => $stock,
                'image' => $p['image'] ?? null,
                'status' => 'active',
                'rating' => $p['rating'] ?? '★★★★★',
                'rating_count' => $p['ratingCount'] ?? 0,
                'badge' => $p['badge'] ?? null,
                'badge_text' => $p['badgeText'] ?? null,
                'color' => $p['color'] ?? null,
                'images' => $p['images'] ?? [],
                'colors' => $p['colors'] ?? [],
                'sizes' => $p['sizes'] ?? [],
                'specs' => $p['specs'] ?? [],
                'reviews' => $p['reviews'] ?? [],
            ]);
        }
    }
}