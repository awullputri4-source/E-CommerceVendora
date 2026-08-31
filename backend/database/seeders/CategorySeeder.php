<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
     public function run(): void
    {
        $json = file_get_contents(database_path('seeders/data.json'));
        $data = json_decode($json, true);

        foreach ($data['categories'] as $cat) {
            Category::updateOrCreate(
                ['slug' => $cat['slug']],
                ['name' => $cat['name'], 'icon' => $cat['icon'] ?? '']
            );
        }
    }
}
