<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Vendor;

class VendorSeeder extends Seeder
{

    public function run(): void
    {
        $json = file_get_contents(database_path('seeders/data.json'));
        $data = json_decode($json, true);

        // Get distinct vendor names from products
        $vendorNames = collect($data['products'])->pluck('vendor')->unique()->filter()->values();

        $vendorMetadata = [
            'FurniHome' => [
                'icon' => '<iconify-icon icon="solar:sofa-bold"></iconify-icon>',
                'bg' => '#96755b',
                'category' => 'Furniture & Dekorasi',
                'rating' => '4.9 ★'
            ],
            'Techzone' => [
                'icon' => '<iconify-icon icon="game-icons:pc"></iconify-icon>',
                'bg' => '#6e9ac8',
                'category' => 'Elektronik & Gadget',
                'rating' => '4.8 ★'
            ],
            'TechZone' => [
                'icon' => '<iconify-icon icon="game-icons:pc"></iconify-icon>',
                'bg' => '#6e9ac8',
                'category' => 'Elektronik & Gadget',
                'rating' => '4.8 ★'
            ],
            'Fashion' => [
                'icon' => '<iconify-icon icon="hugeicons:dress-03"></iconify-icon>',
                'bg' => '#d86969',
                'category' => 'Pakaian',
                'rating' => '4.7 ★'
            ],
            'GlowBeauty' => [
                'icon' => '<iconify-icon icon="streamline-ultimate:make-up-lipstick-bold"></iconify-icon>',
                'bg' => '#e6b7cb',
                'category' => 'Kecantikan & Skincare',
                'rating' => '4.9 ★'
            ],
            'StepStyle' => [
                'icon' => '<iconify-icon icon="hugeicons:dress-03"></iconify-icon>',
                'bg' => '#d86969',
                'category' => 'Pakaian',
                'rating' => '4.7 ★'
            ],
            'KitchenPro' => [
                'icon' => '<iconify-icon icon="solar:chef-hat-bold"></iconify-icon>',
                'bg' => '#6ec89a',
                'category' => 'Peralatan Dapur',
                'rating' => '4.8 ★'
            ]
        ];

        foreach ($vendorNames as $name) {
            $slug = strtolower(str_replace(' ', '-', $name));
            $email = $slug . '@vendora.com';

            $user = User::updateOrCreate(
                ['email' => $email],
                [
                    'name' => $name . ' Admin',
                    'password' => bcrypt('password123'),
                ]
            );

            $meta = $vendorMetadata[$name] ?? [
                'icon' => '<iconify-icon icon="solar:shop-bold"></iconify-icon>',
                'bg' => '#6e9ac8',
                'category' => 'Umum',
                'rating' => '4.5 ★'
            ];

            Vendor::updateOrCreate(
                ['slug' => $slug],
                [
                    'user_id' => $user->id,
                    'name' => $name,
                    'description' => 'Toko ' . $name . ' premium',
                    'status' => 'active',
                    'icon' => $meta['icon'],
                    'bg' => $meta['bg'],
                    'category' => $meta['category'],
                    'rating' => $meta['rating']
                ]
            );
        }
    }
}
