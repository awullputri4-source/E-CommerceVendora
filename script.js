// =============================================
// DATA — Data statis pengganti database
// Nanti bisa diganti dengan fetch() ke API Laravel
// =============================================
const API_URL = 'http://127.0.0.1:8000/api';

// Data kategori
// - slug: digunakan untuk URL halaman kategori (category.html?cat=slug)
const categories = [
  { icon: "", name: "Furniture", count: "", slug: "furniture" },
  { icon: "", name: "Fashion", count: "", slug: "fashion" },
  { icon: "", name: "Elektronik", count: "", slug: "elektronik" },
  { icon: "", name: "Dapur", count: "", slug: "dapur" },
  { icon: "", name: "Kecantikan", count: "", slug: "kecantikan" },
];

// Data produk unggulan
const products = [
  {
    id: 1,
    name: "Sofa Minimalis Nordic",
    vendor: "FurniHome",
    category: "furniture",
    price: 1850000,
    originalPrice: 2500000,
    discount: "26%",
    rating: "★★★★★",
    ratingCount: 128,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "sofafa.jpe",
    description: "Sofa minimalis dengan desain Nordic yang elegan, dilengkapi rangka kayu solid dan busa berkepadatan tinggi untuk kenyamanan maksimal. Cocok untuk ruang tamu modern maupun apartemen minimalis.",
    images: [
      "sofafa.jpe",
      "minisofa.jpe",
      "sofacream.jpe"
    ],
    colors: [
      { name: "Krem", hex: "#e8d5b7" },
      { name: "Cokelat", hex: "#a8864a" },
      { name: "Abu-abu", hex: "#a0a0a0" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Kain linen & rangka kayu jati",
      "Dimensi": "180 x 85 x 75 cm",
      "Berat": "32 kg",
      "Kapasitas": "2-3 orang",
      "Garansi": "1 tahun garansi rangka"
    },
    reviews: [
      { name: "Dinda P.", date: "12 Mei 2025", rating: 5, text: "Sofanya empuk banget dan warnanya sesuai foto. Pengiriman juga rapi, dibungkus kayu." },
      { name: "Aditya R.", date: "2 April 2025", rating: 4, text: "Kualitas bagus untuk harga segini, hanya proses perakitan agak lama." },
      { name: "Maya S.", date: "20 Maret 2025", rating: 5, text: "Cocok untuk ruang tamu kecil, ukurannya pas dan terlihat mewah." }
    ]
  },
  {
    id: 2,
    name: "Iphone 17",
    vendor: "TechZone",
    category: "elektronik",
    price: 18000000,
    originalPrice: null,
    discount: null,
    rating: "★★★★☆",
    ratingCount: 84,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #b7c8e8, #7a9ac4)",
    image: "iphone17.jpe",
    description: "iPhone 17 dengan teknologi chip Apple terbaru, sistem kamera revolusioner dengan sensor telefoto superior, serta layar Super Retina XDR ProMotion. Memberikan performa ekstrem dan daya tahan baterai sepanjang hari.",
    images: [
      "iphone17.jpe",
      "Iphone 17 sage.jpe",
      "iphone 17 black.jpe",
      "iPhone 17 white.jpe"
    ],
    colors: [
      { name: "Sage", hex: "#9FB19E", image: "Iphone 17 sage.jpe" },
      { name: "Black", hex: "#2E2E2E", image: "iphone 17 black.jpe" },
      { name: "White", hex: "#F3F3F3", image: "iPhone 17 white.jpe" }
    ],
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    stock: true,
    specs: {
      "Layar": "6.7 inci Super Retina XDR OLED",
      "Chipset": "Apple A19 Bionic (3nm)",
      "Kamera Utama": "48 MP + 48 MP + 48 MP Triple Camera",
      "Konektivitas": "5G, Wi-Fi 7, Bluetooth 5.4",
      "Garansi": "1 Tahun Garansi Resmi iBox"
    },
    reviews: [
      { name: "Fajar K.", date: "9 Mei 2025", rating: 5, text: "Kameranya luar biasa detail, zoom-nya tajam sekali. Warna birunya sangat elegan." },
      { name: "Sinta M.", date: "30 April 2025", rating: 5, text: "Baterainya awet banget seharian penuh walau dipakai main game dan medsos terus." }
    ]
  },
  {
    id: 3,
    name: "Miu Miu Cable Knit Zip Cardigan",
    vendor: "StepStyle",
    category: "fashion",
    price: 55800000,
    originalPrice: 77000000,
    discount: "27%",
    rating: "★★★★★",
    ratingCount: 302,
    badge: "hot",
    badgeText: "Hot",
    color: "linear-gradient(145deg, #2e2e2e, #4a4a4a)",
    image: "miu miu.jpe",
    description: "Cardigan rajut resleting Miu Miu dengan detail kabel rajut yang klasik dan siluet modern. Terbuat dari wol merino premium yang lembut dan nyaman, cocok untuk tampilan kasual yang chic dan hangat.",
    images: [
      "miu miu.jpe",
      "fashion.jpg"
    ],
    colors: [
      { name: "Navy/Hitam", hex: "#1e2530" },
      { name: "Beige/Krem", hex: "#e5d3b3" }
    ],
    sizes: ["S", "M", "L"],
    stock: true,
    specs: {
      "Bahan": "100% Virgin Wool Merino",
      "Desain": "Cable-knit motif dengan ritsleting depan penuh",
      "Kerah": "High-neck collar",
      "Negara Pembuat": "Italia",
      "Instruksi Perawatan": "Dry clean only"
    },
    reviews: [
      { name: "Citra A.", date: "15 Mei 2025", rating: 5, text: "Rajutannya tebal tapi tidak bikin gatal. Model crop-nya manis sekali saat dipakai." },
      { name: "Reza M.", date: "1 April 2025", rating: 5, text: "Kualitas Miu Miu tidak perlu diragukan lagi. Ritsletingnya lancar dan jahitannya presisi." }
    ]
  },
  {
    id: 4,
    name: "Rhode Peptide Lip Tint",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 390000,
    originalPrice: null,
    discount: null,
    rating: "★★★★☆",
    ratingCount: 56,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #d5e8b7, #8ac47a)",
    image: "rhode.jpe",
    description: "Rhode Peptide Lip Tint dari Hailey Bieber memberikan hidrasi intens untuk bibir sekaligus memberikan rona warna alami yang berkilau. Diperkaya dengan formula peptide untuk bibir yang tampak lebih bervolume dan kenyal.",
    images: [
      "rhode.jpe",
      "makeup.jpe"
    ],
    colors: [
      { name: "Ribbon", hex: "#f3c2c2" },
      { name: "Toast", hex: "#c4a87a" },
      { name: "Raspberry", hex: "#8b2500" },
      { name: "Espresso", hex: "#5c4033" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Kandungan Utama": "Shea Butter, Peptides, Cupuacu, Babassu",
      "Fungsi": "Menghidrasi, menutrisi, memberikan warna & kilau alami",
      "Ukuran": "10 ml",
      "Cruelty Free": "Ya, bersertifikat Leaping Bunny",
      "Vegan": "Ya, 100% Vegan"
    },
    reviews: [
      { name: "Wulan D.", date: "5 Mei 2025", rating: 4, text: "Sangat melembabkan bibir pecah-pecah saya, warnanya natural banget untuk sehari-hari." },
      { name: "Amanda R.", date: "22 April 2025", rating: 5, text: "Glaze-nya cantik sekali, tidak lengket seperti lip gloss biasa. Baunya juga enak." }
    ]
  },
  {
    id: 5,
    name: "Drawer Retro Minimalis",
    vendor: "FurniHome",
    category: "furniture",
    price: 1250000,
    originalPrice: 1500000,
    discount: "17%",
    rating: "★★★★★",
    ratingCount: 42,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "drawer.jpe",
    description: "Drawer penyimpanan dengan desain retro minimalis yang memiliki 3 laci luas. Terbuat dari kayu mahoni berkualitas tinggi dengan finishing rapi.",
    images: [
      "drawer.jpe"
    ],
    colors: [
      { name: "Cokelat Terang", hex: "#c4a87a" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Kayu mahoni & MDF",
      "Dimensi": "80 x 40 x 75 cm",
      "Berat": "18 kg",
      "Laci": "3 unit"
    },
    reviews: []
  },
  {
    id: 6,
    name: "Sofa Cushion Mini",
    vendor: "FurniHome",
    category: "furniture",
    price: 950000,
    originalPrice: 1200000,
    discount: "20%",
    rating: "★★★★☆",
    ratingCount: 28,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "minisofa.jpe",
    description: "Sofa single cushion berukuran ringkas, sangat cocok untuk sudut membaca atau ruang kamar tidur Anda.",
    images: [
      "minisofa.jpe"
    ],
    colors: [
      { name: "Abu-abu", hex: "#a0a0a0" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Busa High-Density & Linen",
      "Dimensi": "80 x 80 x 85 cm",
      "Berat": "15 kg"
    },
    reviews: []
  },
  {
    id: 7,
    name: "Meja Kerja Kayu Jati",
    vendor: "FurniHome",
    category: "furniture",
    price: 2100000,
    originalPrice: 2800000,
    discount: "25%",
    rating: "★★★★★",
    ratingCount: 19,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "table.jpe",
    description: "Meja kerja dari bahan kayu jati solid dengan laci penyimpanan dokumen. Rangka kokoh dan permukaan halus antipanas.",
    images: [
      "table.jpe"
    ],
    colors: [
      { name: "Natural Wood", hex: "#8b5a2b" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Kayu Jati Solid",
      "Dimensi": "120 x 60 x 75 cm",
      "Berat": "25 kg"
    },
    reviews: []
  },
  {
    id: 8,
    name: "Sofa Creamy Comfort",
    vendor: "FurniHome",
    category: "furniture",
    price: 3200000,
    originalPrice: 4000000,
    discount: "20%",
    rating: "★★★★★",
    ratingCount: 57,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "sofacream.jpe",
    description: "Sofa 2-seater dengan warna krem hangat yang memberikan nuansa kenyamanan ekstra di ruang keluarga Anda.",
    images: [
      "sofacream.jpe"
    ],
    colors: [
      { name: "Krem", hex: "#e8d5b7" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Kain Velvet premium & rangka kayu solid",
      "Dimensi": "160 x 85 x 80 cm"
    },
    reviews: []
  },
  {
    id: 9,
    name: "Meja Kopi Coklat Vintage",
    vendor: "FurniHome",
    category: "furniture",
    price: 750000,
    originalPrice: 900000,
    discount: "16%",
    rating: "★★★★☆",
    ratingCount: 31,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e8d5b7, #c4a87a)",
    image: "tablecoklat.jpe",
    description: "Meja kopi vintage berwarna cokelat hangat dengan kompartemen bawah untuk majalah atau remote control.",
    images: [
      "tablecoklat.jpe"
    ],
    colors: [
      { name: "Cokelat Tua", hex: "#5c4033" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Kayu olahan dengan lapisan veneer jati",
      "Dimensi": "90 x 50 x 45 cm"
    },
    reviews: []
  },
  {
    id: 10,
    name: "Miu Miu Cotton Cropped Shirt",
    vendor: "StepStyle",
    category: "fashion",
    price: 18500000,
    originalPrice: 22000000,
    discount: "15%",
    rating: "★★★★★",
    ratingCount: 64,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e5e5e5, #b8b8b8)",
    image: "miushirt.jpe",
    description: "Kemeja katun cropped dengan detail bordir logo Miu Miu yang khas pada saku dada. Desain modern, chic, dan sangat modis untuk penampilan kasual formal.",
    images: [
      "miushirt.jpe",
      "fashion.jpg"
    ],
    colors: [
      { name: "Putih", hex: "#ffffff" },
      { name: "Biru Muda", hex: "#add8e6" }
    ],
    sizes: ["S", "M", "L"],
    stock: true,
    specs: {
      "Bahan": "100% Cotton Poplin",
      "Kerah": "Classic collar",
      "Lengan": "Lengan Panjang",
      "Perawatan": "Dry clean recommended"
    },
    reviews: [
      { name: "Jessica K.", date: "10 Juni 2025", rating: 5, text: "Bahan katunnya adem banget dan potongan crop-nya pas banget di pinggang." }
    ]
  },
  {
    id: 11,
    name: "Miu Miu Leather Hobo Bag",
    vendor: "StepStyle",
    category: "fashion",
    price: 42000000,
    originalPrice: 50000000,
    discount: null,
    rating: "★★★★★",
    ratingCount: 45,
    badge: "hot",
    badgeText: "Hot",
    color: "linear-gradient(145deg, #c4a87a, #8c734b)",
    image: "miubag.jpe",
    description: "Tas hobo kulit Miu Miu dengan tekstur matelassé ikonik. Dilengkapi dengan tali bahu kulit yang dapat disesuaikan dan detail hardware berwarna emas.",
    images: [
      "miubag.jpe",
      "miubag2.jpe"
    ],
    colors: [
      { name: "Krem / Emas", hex: "#d4af37" },
      { name: "Hitam", hex: "#000000" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "100% Nappa Leather",
      "Hardware": "Gold-tone metal hardware",
      "Dimensi": "24 x 18 x 6 cm",
      "Kelengkapan": "Dustbag & Authenticity Card"
    },
    reviews: [
      { name: "Nabila A.", date: "1 Juli 2025", rating: 5, text: "Kulitnya sangat lembut dan jahitannya super rapi. Muat hp dan dompet kecil." }
    ]
  },
  {
    id: 12,
    name: "Miu Miu Wander Matelasse Mini Bag",
    vendor: "StepStyle",
    category: "fashion",
    price: 38000000,
    originalPrice: 42000000,
    discount: "9%",
    rating: "★★★★★",
    ratingCount: 29,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #f3c2c2, #d58a8a)",
    image: "miubag2.jpe",
    description: "Reinterpretasi tas Wander yang ikonik dalam bentuk mini yang trendi. Dibuat dengan pengerjaan matelassé yang memukau dan pegangan melengkung yang khas.",
    images: [
      "miubag2.jpe",
      "miubag.jpe"
    ],
    colors: [
      { name: "Soft Pink", hex: "#ffb6c1" },
      { name: "Putih", hex: "#ffffff" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Bahan": "Regenerated nylon & Nappa leather trim",
      "Dimensi": "20 x 17 x 6 cm",
      "Tali": "Tali rantai lepas-pasang"
    },
    reviews: [
      { name: "Clara S.", date: "15 Juli 2025", rating: 5, text: "Lucu banget tasnya! Ukuran mini tapi masih fungsional untuk hangout sore." }
    ]
  },
  {
    id: 13,
    name: "Prada Brushed Leather Combat Boots",
    vendor: "StepStyle",
    category: "fashion",
    price: 24500000,
    originalPrice: 28000000,
    discount: "12%",
    rating: "★★★★★",
    ratingCount: 78,
    badge: "hot",
    badgeText: "Hot",
    color: "linear-gradient(145deg, #111111, #333333)",
    image: "pradaboots.jpe",
    description: "Sepatu combat boots Prada dengan bahan brushed leather premium yang kokoh. Menampilkan sol tebal bermotif traktor yang ikonik dan logo segitiga logam Prada.",
    images: [
      "pradaboots.jpe",
      "fashion.jpg"
    ],
    colors: [
      { name: "Hitam", hex: "#000000" }
    ],
    sizes: ["37", "38", "39", "40"],
    stock: true,
    specs: {
      "Bahan": "Spazzolato (Brushed) Leather",
      "Sol": "Lightweight rubber lug sole",
      "Tinggi Sol": "5 cm",
      "Negara Pembuat": "Italia"
    },
    reviews: [
      { name: "Devi R.", date: "3 Agustus 2025", rating: 5, text: "Sepatunya kelihatan gagah dan mewah. Awalnya agak kaku tapi lama-lama nyaman dipakai." }
    ]
  },
  {
    id: 14,
    name: "Elegant Classic Leather Heels",
    vendor: "StepStyle",
    category: "fashion",
    price: 8900000,
    originalPrice: 11000000,
    discount: "19%",
    rating: "★★★★☆",
    ratingCount: 52,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #ffd3b6, #ffaaa5)",
    image: "heels.jpe",
    description: "Heels stiletto klasik dengan bahan kulit domba yang lembut di bagian dalam untuk kenyamanan berjalan seharian. Desain pointed toe yang mempercantik kaki.",
    images: [
      "heels.jpe",
      "fashion.jpg"
    ],
    colors: [
      { name: "Nude/Krem", hex: "#f5f5dc" },
      { name: "Hitam", hex: "#000000" }
    ],
    sizes: ["36", "37", "38", "39"],
    stock: true,
    specs: {
      "Bahan Upper": "Genuine Calfskin Leather",
      "Bahan Lining": "Lambskin Leather",
      "Tinggi Hak": "8 cm",
      "Tipe Hak": "Stiletto"
    },
    reviews: [
      { name: "Alisha T.", date: "12 Agustus 2025", rating: 4, text: "Cantik sekali heels-nya. Pas banget untuk acara formal. Haknya kokoh." }
    ]
  },
  {
    id: 15,
    name: "iPhone 17 Pro Max Silver",
    vendor: "Techzone",
    category: "elektronik",
    price: 22000000,
    originalPrice: 24500000,
    discount: "10%",
    rating: "★★★★★",
    ratingCount: 142,
    badge: "hot",
    badgeText: "Hot",
    color: "linear-gradient(145deg, #f0f0f0, #c0c0c0)",
    image: "ip.jpe",
    description: "iPhone 17 Pro Max dengan kapasitas memori lega, sistem kamera Pro tiga sensor mutakhir, bodi titanium super kuat, dan chip A19 Pro.",
    images: [
      "ip.jpe",
      "deep blue.jpe",
      "orange.jpe"
    ],
    colors: [
      { name: "Silver", hex: "#e0e0e0", image: "ip.jpe" },
      { name: "Deep Blue", hex: "#0E294B", image: "deep blue.jpe" },
      { name: "Orange", hex: "#FF5F1F", image: "orange.jpe" }
    ],
    sizes: ["256GB", "512GB", "1TB"],
    stock: true,
    specs: {
      "Layar": "6.9 inci Super Retina XDR OLED",
      "Bahan": "Titanium Grade 5",
      "Chipset": "Apple A19 Pro",
      "Kamera Utama": "48 MP Triple Camera",
      "Garansi": "1 Tahun Garansi Resmi iBox"
    },
    reviews: [
      { name: "Andi S.", date: "15 Agustus 2025", rating: 5, text: "Bodi titaniumnya terasa sangat kokoh dan ringan. Layar lebih lega dibanding seri sebelumnya." }
    ]
  },
  {
    id: 19,
    name: "Redmi Smart Watch Elite",
    vendor: "Techzone",
    category: "elektronik",
    price: 890000,
    originalPrice: 1200000,
    discount: "26%",
    rating: "★★★★★",
    ratingCount: 75,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #e5e5e5, #b8b8b8)",
    image: "138204282311353538.jpe",
    description: "Smartwatch layar sentuh AMOLED premium dengan deteksi detak jantung 24 jam, pemantauan tidur, GPS internal, dan daya tahan baterai hingga 12 hari.",
    images: [
      "138204282311353538.jpe"
    ],
    colors: [
      { name: "Hitam", hex: "#1a1a1a" },
      { name: "Ivory", hex: "#f5f5dc" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Layar": "1.75 inci AMOLED",
      "Konektivitas": "Bluetooth 5.2",
      "Tahan Air": "5ATM (hingga 50 meter)",
      "Baterai": "289 mAh"
    },
    reviews: []
  },
  {
    id: 20,
    name: "JBL Charge Portable Speaker",
    vendor: "Techzone",
    category: "elektronik",
    price: 2100000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 96,
    badge: "new",
    badgeText: "new",
    color: "linear-gradient(145deg, #2e2e2e, #4a4a4a)",
    image: "57209857760204108.jpe",
    description: "Speaker bluetooth portable dengan suara stereo dahsyat, bass mendalam, daya tahan baterai hingga 20 jam, dan kemampuan tahan air IPX7.",
    images: [
      "57209857760204108.jpe"
    ],
    colors: [
      { name: "Hitam", hex: "#111111" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Konektivitas": "Bluetooth 5.1",
      "Daya Output": "30W RMS",
      "Tahan Air": "IPX7 Waterproof",
      "Baterai": "7500 mAh"
    },
    reviews: []
  },
  {
    id: 21,
    name: "MacBook Pro M3 Pro",
    vendor: "Techzone",
    category: "elektronik",
    price: 28500000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 43,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #d3d3d3, #a9a9a9)",
    image: "MacBook Pro.jpe",
    description: "Laptop premium MacBook Pro dengan chip Apple M3 Pro terbaru, RAM 18GB, SSD 512GB, dan layar Liquid Retina XDR 14 inci. Cocok untuk profesional kreatif.",
    images: [
      "MacBook Pro.jpe"
    ],
    colors: [
      { name: "Space Grey", hex: "#3e3e3e" },
      { name: "Silver", hex: "#d3d3d3" }
    ],
    sizes: ["14-inci", "16-inci"],
    stock: true,
    specs: {
      "Layar": "14.2 inci Liquid Retina XDR",
      "Chipset": "Apple M3 Pro (11-Core CPU)",
      "Memori": "18GB Unified Memory",
      "Penyimpanan": "512GB SSD"
    },
    reviews: []
  },
  {
    id: 22,
    name: "Canon PowerShot G7 X Mark III",
    vendor: "Techzone",
    category: "elektronik",
    price: 11200000,
    originalPrice: 12500000,
    discount: "10%",
    rating: "★★★★★",
    ratingCount: 51,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #1f1f1f, #0d0d0d)",
    image: "PowerShot G7 X Mark III.jpe",
    description: "Kamera saku premium Canon PowerShot G7 X Mark III yang sangat cocok untuk vlogging dan pembuatan konten dengan perekaman video 4K tanpa crop dan port mikrofon internal.",
    images: [
      "PowerShot G7 X Mark III.jpe"
    ],
    colors: [
      { name: "Hitam", hex: "#1a1a1a" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Sensor": "1.0 inci Stacked CMOS 20.1 MP",
      "Prosesor": "DIGIC 8",
      "Video": "4K 30p / Full HD 120p",
      "Layar": "3.0 inci Tilting Touchscreen"
    },
    reviews: []
  },
  {
    id: 23,
    name: "Anker Soundcore Motion+",
    vendor: "Techzone",
    category: "elektronik",
    price: 1450000,
    originalPrice: null,
    discount: null,
    rating: "★★★★☆",
    ratingCount: 34,
    badge: null,
    badgeText: null,
    color: "linear-gradient(145deg, #333333, #1c1c1c)",
    image: "SoundCore Elite.jpe",
    description: "Speaker Bluetooth Anker Soundcore dengan sertifikasi Hi-Res Audio, codec Qualcomm aptX, daya tahan baterai 12 jam, dan rating tahan air IPX7.",
    images: [
      "SoundCore Elite.jpe"
    ],
    colors: [
      { name: "Hitam", hex: "#1c1c1c" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Audio": "Hi-Res Audio Certified & aptX",
      "Daya": "30W",
      "Waktu Putar": "12 Jam",
      "Proteksi": "IPX7 Waterproof"
    },
    reviews: []
  },
  {
    id: 24,
    name: "Power Bank UGREEN 100W 20000mAh",
    vendor: "Techzone",
    category: "elektronik",
    price: 799000,
    originalPrice: 999000,
    discount: "20%",
    rating: "★★★★★",
    ratingCount: 112,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #6c7b95, #464f60)",
    image: "باور بانك UGREEN 100W سريع الشحن – قوة هائلة لشحن اللابتوب والهاتف والأجهزة الذكية.jpe",
    description: "Power bank berkecepatan tinggi UGREEN 100W dengan kapasitas besar 20.000mAh, dilengkapi port USB-C ganda untuk pengisian laptop, tablet, dan smartphone sekaligus.",
    images: [
      "باور بانك UGREEN 100W سريع الشحن – قوة هائلة لشحن Lapatop والهاتف والأجهزة الذكية.jpe"
    ],
    colors: [
      { name: "Abu-abu Space", hex: "#464f60" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Kapasitas": "20.000 mAh",
      "Output Maks": "100W (USB-C1)",
      "Port": "2x USB-C, 1x USB-A"
    },
    reviews: []
  },
  {
    id: 25,
    name: "Miu Miu Cardigan Knit Cream",
    vendor: "StepStyle",
    category: "fashion",
    price: 48000000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 18,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #f7f1e3, #d1ccc0)",
    image: "miu.jpe",
    description: "Cardigan rajut Miu Miu berbahan kasmir lembut warna krem dengan logo manik-manik indah di dada kiri. Siluet manis dengan kancing depan kontras.",
    images: [
      "miu.jpe"
    ],
    colors: [
      { name: "Krem", hex: "#f7f1e3" }
    ],
    sizes: ["S", "M", "L"],
    stock: true,
    specs: {
      "Bahan": "100% Cashmere",
      "Negara Pembuat": "Italia",
      "Kancing": "4 kancing depan kontras"
    },
    reviews: []
  },
  {
    id: 26,
    name: "Chanel Les 4 Ombres Eyeshadow",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 1150000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 47,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #1c1c1c, #404040)",
    image: "Chanel Les 4 Ombres Éclat De Nuit Multi-Effect Quadra Eyeshadow 2G Tissé Camélia.jpe",
    description: "Palet eyeshadow ikonik Chanel dengan 4 variasi warna multi-efek indah untuk riasan mata natural hingga glamor. Formula lembut dan warna intens tahan lama.",
    images: [
      "Chanel Les 4 Ombres Éclat De Nuit Multi-Effect Quadra Eyeshadow 2G Tissé Camélia.jpe"
    ],
    colors: [
      { name: "Tisse Camelia", hex: "#63473b" }
    ],
    sizes: ["2g"],
    stock: true,
    specs: {
      "Tekstur": "Soft Powder",
      "Isi": "4 Warna (Quadra)",
      "Negara Pembuat": "Prancis"
    },
    reviews: []
  },
  {
    id: 27,
    name: "Chanel Les Beiges Bronzing Cream",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 980000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 29,
    badge: null,
    badgeText: null,
    color: "linear-gradient(145deg, #e8c89b, #c59f71)",
    image: "Chanel Les Beiges Healthy Glow Bronzing Cream Soleil Tan 30G Light Bronz.jpe",
    description: "Krim bronzer gel-krim dari Chanel yang memberikan tampilan berkilau sehat alami layaknya sehabis berjemur di pantai. Tekstur ringan dan mudah dibaurkan.",
    images: [
      "Chanel Les Beiges Healthy Glow Bronzing Cream Soleil Tan 30G Light Bronz.jpe"
    ],
    colors: [
      { name: "Light Bronze", hex: "#c59f71" }
    ],
    sizes: ["30g"],
    stock: true,
    specs: {
      "Tekstur": "Gel-Cream",
      "Fungsi": "Bronzer & Glow",
      "Isi": "30g"
    },
    reviews: []
  },
  {
    id: 28,
    name: "Dior Addict Shine Lipstick",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 720000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 68,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #ffd3e0, #ff80a5)",
    image: "Dior - Addict Lipstick-Hydrating Shine Lipstick - 90% Natural-Origin Ingredients - Refillable.jpe",
    description: "Lipstick Dior Addict penambah kilau dengan 90% kandungan bahan alami yang memberikan kelembaban intens sepanjang hari serta warna memukau yang dapat diisi ulang (refillable)."
    ,
    images: [
      "Dior - Addict Lipstick-Hydrating Shine Lipstick - 90% Natural-Origin Ingredients - Refillable.jpe"
    ],
    colors: [
      { name: "Shine Red", hex: "#d13b53" }
    ],
    sizes: ["3.2g"],
    stock: true,
    specs: {
      "Bahan Alami": "90% Natural-Origin",
      "Fungsi": "Hydrating & High Shine",
      "Fitur": "Refillable Case"
    },
    reviews: []
  },
  {
    id: 29,
    name: "L'Oreal True Match Liquid Foundation",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 220000,
    originalPrice: 260000,
    discount: "15%",
    rating: "★★★★☆",
    ratingCount: 89,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #eedbc5, #d2b393)",
    image: "L'Oreal True Match Foundation Vanilla 2N 30Ml.jpe",
    description: "Liquid foundation L'Oreal True Match yang menyatu sempurna dengan warna kulit Anda. Diperkaya dengan Hyaluronic Acid dan SPF 17 untuk kulit sehat terlindungi.",
    images: [
      "L'Oreal True Match Foundation Vanilla 2N 30Ml.jpe"
    ],
    colors: [
      { name: "Vanilla 2N", hex: "#eedbc5" }
    ],
    sizes: ["30ml"],
    stock: true,
    specs: {
      "Kandungan": "Hyaluronic Acid & SPF 17",
      "Isi": "30ml",
      "Warna": "Vanilla (Neutral Shade)"
    },
    reviews: []
  },
  {
    id: 30,
    name: "YSL Skin Affair Cushion Foundation",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 1250000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 41,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #1c1c1c, #000000)",
    image: "YSL Skin Affair Cushion Foundation.jpe",
    description: "Cushion foundation Yves Saint Laurent (YSL) untuk hasil akhir matte berkilau alami yang tahan lama dan menutrisi kulit wajah secara optimal sepanjang hari.",
    images: [
      "YSL Skin Affair Cushion Foundation.jpe"
    ],
    colors: [
      { name: "Natural Beige", hex: "#e5c5a0" }
    ],
    sizes: ["14g"],
    stock: true,
    specs: {
      "Finish": "Luminous Matte",
      "Perlindungan": "SPF 50+ / PA+++",
      "Isi": "14g"
    },
    reviews: []
  },
  {
    id: 31,
    name: "YSL All Hours Liquid Foundation",
    vendor: "GlowBeauty",
    category: "kecantikan",
    price: 1100000,
    originalPrice: 1300000,
    discount: "15%",
    rating: "★★★★★",
    ratingCount: 56,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #f0dfcb, #d2beab)",
    image: "Yves Saint Laurent Ysl All Hours Foundation Lc2, With Luminous Matte Finish And Lightweight 24H Full Coverage, Infused Hyaluronic Acid 25ml.jpe",
    description: "Foundation YSL All Hours dengan cakupan penuh yang terasa ringan, tahan 24 jam dengan hasil akhir matte bercahaya yang tidak retak (cakey).",
    images: [
      "Yves Saint Laurent Ysl All Hours Foundation Lc2, With Luminous Matte Finish And Lightweight 24H Full Coverage, Infused Hyaluronic Acid 25ml.jpe"
    ],
    colors: [
      { name: "LC2 Light", hex: "#f0dfcb" }
    ],
    sizes: ["25ml"],
    stock: true,
    specs: {
      "Daya Tahan": "24 Jam Full Coverage",
      "Finish": "Luminous Matte",
      "Isi": "25ml",
      "Kandungan": "Hyaluronic Acid"
    },
    reviews: []
  },
  {
    id: 32,
    name: "Ninja Max Air Fryer",
    vendor: "KitchenPro",
    category: "dapur",
    price: 2850000,
    originalPrice: 3500000,
    discount: "18%",
    rating: "★★★★★",
    ratingCount: 83,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #3a3a3a, #1a1a1a)",
    image: "Air Fryers _ Ninja Air Fryer & Next Day Delivery.jpe",
    description: "Ninja Air Fryer dengan teknologi memasak cepat menggunakan sirkulasi udara super panas. Mengurangi lemak hingga 75% dibandingkan metode goreng konvensional.",
    images: [
      "Air Fryers _ Ninja Air Fryer & Next Day Delivery.jpe"
    ],
    colors: [
      { name: "Hitam", hex: "#1f1f1f" }
    ],
    sizes: ["5.2L"],
    stock: true,
    specs: {
      "Kapasitas": "5.2 Liter",
      "Daya": "1750 Watt",
      "Rentang Suhu": "40°C - 240°C"
    },
    reviews: []
  },
  {
    id: 33,
    name: "Ninja Luxe Cafe Espresso Machine",
    vendor: "KitchenPro",
    category: "dapur",
    price: 8400000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 27,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #bfbfbf, #808080)",
    image: "Buy Ninja ES601UK Luxe Cafe Premier Espresso Coffee Machine _ Coffee machines _ Argos.jpe",
    description: "Mesin espresso otomatis Ninja Luxe Cafe Premier untuk menyeduh kopi berstandar barista di rumah Anda, dilengkapi alat pembuat busa susu otomatis.",
    images: [
      "Buy Ninja ES601UK Luxe Cafe Premier Espresso Coffee Machine _ Coffee machines _ Argos.jpe"
    ],
    colors: [
      { name: "Silver Metalik", hex: "#d3d3d3" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Tekanan": "15 Bar Pump",
      "Daya": "1450 Watt",
      "Kapasitas Tangki": "2.0 Liter",
      "Fitur": "Auto Milk Frother"
    },
    reviews: []
  },
  {
    id: 34,
    name: "Russell Hobbs Bronte Toaster",
    vendor: "KitchenPro",
    category: "dapur",
    price: 650000,
    originalPrice: null,
    discount: null,
    rating: "★★★★☆",
    ratingCount: 19,
    badge: null,
    badgeText: null,
    color: "linear-gradient(145deg, #e5d8cd, #b8ab9e)",
    image: "Buy Russell Hobbs 26761 Bronte 2 Slice Toaster - Stone _ Toasters _ Argos.jpe",
    description: "Pemanggang roti Russell Hobbs Bronte 2 slice dengan desain batu retro-modern yang elegan, dilengkapi kontrol kecoklatan yang presisi.",
    images: [
      "Buy Russell Hobbs 26761 Bronte 2 Slice Toaster - Stone _ Toasters _ Argos.jpe"
    ],
    colors: [
      { name: "Stone Grey", hex: "#b8ab9e" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Kapasitas": "2 Slice Roti",
      "Daya": "850 Watt",
      "Bahan": "Stoneware Matte Finish"
    },
    reviews: []
  },
  {
    id: 35,
    name: "Premium Non-Stick Cookware Set",
    vendor: "KitchenPro",
    category: "dapur",
    price: 1850000,
    originalPrice: 2400000,
    discount: "22%",
    rating: "★★★★★",
    ratingCount: 48,
    badge: "sale",
    badgeText: "Sale",
    color: "linear-gradient(145deg, #a5a5a5, #5e5e5e)",
    image: "Cookware Set.jpe",
    description: "Set alat masak anti lengket premium isi 10 buah, dilapisi bahan keramik anti-gores dan aman bebas PFOA/PTFE dengan gagang silikon tahan panas.",
    images: [
      "Cookware Set.jpe"
    ],
    colors: [
      { name: "Abu-abu", hex: "#7a7a7a" }
    ],
    sizes: ["10-Pieces"],
    stock: true,
    specs: {
      "Bahan": "Aluminium Die-cast & Keramik",
      "Lapisan": "Anti Lengket PTFE/PFOA Free",
      "Isi Set": "Panci, Wajan, Penutup Kaca"
    },
    reviews: []
  },
  {
    id: 36,
    name: "Hisense Multicooker 8-in-1",
    vendor: "KitchenPro",
    category: "dapur",
    price: 1590000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 15,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #444444, #1a1a1a)",
    image: "Hisense Multicooker HMC6SBKUK _ Fashion World.jpe",
    description: "Multicooker Hisense 8-in-1 untuk menanak nasi, slow cooking, mengukus, membuat sup, dan lainnya secara praktis hanya dengan menekan satu tombol.",
    images: [
      "Hisense Multicooker HMC6SBKUK _ Fashion World.jpe"
    ],
    colors: [
      { name: "Hitam Glossy", hex: "#111111" }
    ],
    sizes: ["6L"],
    stock: true,
    specs: {
      "Kapasitas": "6.0 Liter",
      "Fungsi": "8-in-1 Cooking Program",
      "Daya": "1000 Watt"
    },
    reviews: []
  },
  {
    id: 37,
    name: "Ceramic Kitchen Storage Containers Set",
    vendor: "KitchenPro",
    category: "dapur",
    price: 420000,
    originalPrice: null,
    discount: null,
    rating: "★★★★☆",
    ratingCount: 22,
    badge: null,
    badgeText: null,
    color: "linear-gradient(145deg, #ffffff, #dcdcdc)",
    image: "Kitchen Storage Sets.jpe",
    description: "Set wadah penyimpanan dapur keramik berkualitas dengan tutup bambu kedap udara. Menjaga bahan makanan tetap segar sekaligus mempercantik dapur.",
    images: [
      "Kitchen Storage Sets.jpe"
    ],
    colors: [
      { name: "Putih", hex: "#ffffff" }
    ],
    sizes: ["3-Pieces"],
    stock: true,
    specs: {
      "Bahan": "Keramik & Tutup Bambu Alami",
      "Seal": "Silikon Kedap Udara",
      "Isi Set": "3 Wadah (Kopi, Teh, Gula)"
    },
    reviews: []
  },
  {
    id: 38,
    name: "Smeg Stand Mixer Black SMF01",
    vendor: "KitchenPro",
    category: "dapur",
    price: 10500000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 31,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #2b2b2b, #000000)",
    image: "SMEG SMF01BLUK Smeg SMF01BLUK Stand Mixer Black.jpe",
    description: "Stand mixer Smeg bergaya retro khas tahun 50-an dengan bodi hitam mengkilap, mangkuk stainless steel 4.8L, dan motor bertenaga 800W.",
    images: [
      "SMEG SMF01BLUK Smeg SMF01BLUK Stand Mixer Black.jpe"
    ],
    colors: [
      { name: "Hitam Glossy", hex: "#111111" }
    ],
    sizes: [],
    stock: true,
    specs: {
      "Daya": "800 Watt",
      "Kapasitas Mangkuk": "4.8 Liter Stainless Steel",
      "Tingkat Kecepatan": "10 Speeds dengan Smooth Start"
    },
    reviews: []
  },
  {
    id: 39,
    name: "Vancasso Stoneware Dinnerware Set",
    vendor: "KitchenPro",
    category: "dapur",
    price: 3200000,
    originalPrice: null,
    discount: null,
    rating: "★★★★★",
    ratingCount: 16,
    badge: "new",
    badgeText: "New",
    color: "linear-gradient(145deg, #7b949c, #4e666e)",
    image: "Vancasso  32 Piece Stoneware  Dinnerware Set.jpe",
    description: "Set peralatan makan keramik stoneware Vancasso isi 32 buah dengan glasir bermotif buatan tangan yang mewah dan tahan lama untuk hidangan harian Anda.",
    images: [
      "Vancasso  32 Piece Stoneware  Dinnerware Set.jpe"
    ],
    colors: [
      { name: "Mottled Blue", hex: "#4e666e" }
    ],
    sizes: ["32-Pieces"],
    stock: true,
    specs: {
      "Bahan": "Keramik Stoneware Premium",
      "Isi Set": "8x Piring Makan, 8x Piring Kue, 8x Mangkuk, 8x Mug",
      "Keamanan": "Microwave & Dishwasher Safe"
    },
    reviews: []
  }
];

// Auto-prefix image paths to 'img/' if they don't already have a path prefix
products.forEach(p => {
  if (p.image && !p.image.startsWith('img/') && !p.image.startsWith('http') && !p.image.startsWith('linear-gradient')) {
    p.image = 'img/' + p.image;
  }
  if (p.images && Array.isArray(p.images)) {
    p.images = p.images.map(img => {
      if (img && !img.startsWith('img/') && !img.startsWith('http') && !img.startsWith('linear-gradient')) {
        return 'img/' + img;
      }
      return img;
    });
  }
  if (p.colors && Array.isArray(p.colors)) {
    p.colors.forEach(col => {
      if (col.image && !col.image.startsWith('img/') && !col.image.startsWith('http')) {
        col.image = 'img/' + col.image;
      }
    });
  }
});


// Data vendor
const vendors = [
  { icon: '<iconify-icon icon="solar:sofa-bold"></iconify-icon>', name: "FurniHome", category: "Furniture & Dekorasi", bg: "#96755b", products: "245 produk", rating: "4.9 ★" },
  { icon: '<iconify-icon icon="game-icons:pc"></iconify-icon>', name: "Techzone", category: "Elektronik & Gadget", bg: "#6e9ac8", products: "180 produk", rating: "4.8 ★" },
  { icon: '<iconify-icon icon="hugeicons:dress-03"></iconify-icon>', name: "Fashion", category: "Pakaian", bg: "#d86969", products: "320 produk", rating: "4.7 ★" },
  { icon: '<iconify-icon icon="streamline-ultimate:make-up-lipstick-bold"></iconify-icon>', name: "GlowBeauty", category: "Kecantikan & Skincare", bg: "#e6b7cb", products: "410 produk", rating: "4.9 ★" },
  { icon: '<iconify-icon icon="solar:chef-hat-bold"></iconify-icon>', name: "KitchenPro", category: "Peralatan Dapur", bg: "#6ec89a", products: "150 produk", rating: "4.8 ★" }
];


// =============================================
// RENDER KATEGORI
// =============================================
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';

    // Hitung jumlah produk secara dinamis berdasarkan kategori
    const count = products.filter(p => p.category === cat.slug).length;
    const countText = `${count} Produk`;

    card.innerHTML = `
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${countText}</div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `category.html?cat=${cat.slug}`;
    });

    grid.appendChild(card);
  });
}


// =============================================
// RENDER PRODUK
// =============================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Hanya menampilkan 4 produk pilihan pertama di halaman utama
  products.slice(0, 4).forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const priceFormatted = formatRupiah(product.price);
    const originalFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';

    const badgeHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>`
      : '';

    const discountHTML = product.originalPrice
      ? `<span class="price-original">${originalFormatted}</span>
         <span class="price-discount">-${product.discount}</span>`
      : '';

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
        ${badgeHTML}
        <button class="wishlist-btn" id="wish-${product.id}" onclick="toggleWishlist(${product.id}, event)">
          <span>🤍</span>
        </button>
      </div>

      <div class="product-info">
        <div class="product-vendor">${product.vendor}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${priceFormatted}</span>
          ${discountHTML}
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
          + Tambah ke Keranjang
        </button>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    grid.appendChild(card);
  });
}
// =============================================
// FETCH PRODUK DARI API LARAVEL
// Dipanggil saat halaman pertama kali dibuka
// =============================================
function fetchProductsFromAPI() {
  fetch(`${API_URL}/products`)
    .then(res => res.json())
    .then(apiProducts => {
      // Gabungkan data API dengan data lokal (untuk gambar & detail)
      apiProducts.forEach(apiProduct => {
        // Cari produk yang sama di array lokal berdasarkan nama
        const localProduct = products.find(p =>
          p.name.toLowerCase() === apiProduct.name.toLowerCase()
        );
        if (localProduct) {
          // Update harga dari database (lebih akurat)
          localProduct.price = parseFloat(apiProduct.price);
          localProduct.originalPrice = apiProduct.original_price
            ? parseFloat(apiProduct.original_price)
            : null;
        }
      });
      // Render ulang produk dengan harga terbaru dari database
      renderProducts();
    })
    .catch(err => {
      // Kalau API tidak jalan, tetap tampilkan data lokal
      console.log('Error detail:', err.message);
      renderProducts();
    });
}


// =============================================
// RENDER VENDOR
// =============================================
function renderVendors() {
  const grid = document.getElementById('vendorsGrid');
  if (!grid) return;

  vendors.forEach(vendor => {
    const card = document.createElement('div');
    card.className = 'vendor-card';

    card.innerHTML = `
      <div class="vendor-avatar" style="background:${vendor.bg}20; color:${vendor.bg}">
        ${vendor.icon}
      </div>
      <div class="vendor-name">${vendor.name}</div>
      <div class="vendor-category">${vendor.category}</div>
      <div class="vendor-meta">
        <span>${vendor.products}</span>
        <span>${vendor.rating}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      showToast(`Membuka toko ${vendor.name}...`);
    });

    grid.appendChild(card);
  });
}


// =============================================
// FORMAT RUPIAH
// =============================================
function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID');
}


// =============================================
// CART — Keranjang Belanja
// =============================================
let cart = JSON.parse(localStorage.getItem('nexmart_cart')) || [];

function saveCart() {
  localStorage.setItem('nexmart_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      vendor: product.vendor,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`"${product.name}" ditambahkan ke keranjang! 🛒`);
}


// =============================================
// WISHLIST — Daftar Favorit
// =============================================
let wishlist = JSON.parse(localStorage.getItem('nexmart_wishlist')) || [];

function updateWishlistBadge() {
  const badges = document.querySelectorAll('.wishlist-badge, #wishlistBadge');
  const count = wishlist.length;
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.transform = 'scale(1.25)';
    setTimeout(() => {
      badge.style.transform = 'scale(1)';
    }, 200);
  });
}

function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const btn = document.getElementById(`wish-${productId}`) || document.getElementById(`wish-cat-${productId}`) || document.getElementById(`wish-search-${productId}`);
  const idx = wishlist.indexOf(productId);

  if (idx === -1) {
    wishlist.push(productId);
    if (btn) {
      btn.classList.add('active');
      btn.querySelector('span').textContent = '❤️';
    }
    showToast('Ditambahkan ke wishlist! ❤️');
  } else {
    wishlist.splice(idx, 1);
    if (btn) {
      btn.classList.remove('active');
      btn.querySelector('span').textContent = '🤍';
    }
    showToast('Dihapus dari wishlist');
  }

  localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
}



// =============================================
// TOAST NOTIFICATION
// =============================================
let toastTimeout;

function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toastMsg');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}


// =============================================
// NAVBAR — Scroll & Mobile Effect
// =============================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.toggle('open');
  });
}


// =============================================
// NEWSLETTER
// =============================================
function subscribeNewsletter() {
  const input = document.getElementById('emailInput');
  if (!input) return;
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    showToast('Masukkan email yang valid ya! 📧');
    return;
  }

  showToast(`Berhasil daftar dengan ${email}! 🎉`);
  input.value = '';
}


// =============================================
// HALAMAN DETAIL PRODUK (product.html)
// =============================================
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let currentQty = 1;

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function renderProductDetail() {
  const productId = getProductIdFromURL();
  currentProduct = products.find(p => p.id === productId);

  if (!currentProduct) {
    window.location.href = 'index.html';
    return;
  }

  const p = currentProduct;

  const bCrumb = document.getElementById('breadcrumbProduct');
  if (bCrumb) bCrumb.textContent = p.name;

  renderGallery(p);

  const dVendor = document.getElementById('detailVendor');
  const dName = document.getElementById('detailName');
  const dStars = document.getElementById('detailStars');
  const dRatingCount = document.getElementById('detailRatingCount');
  const dDesc = document.getElementById('detailDesc');
  const fDesc = document.getElementById('fullDescription');

  if (dVendor) dVendor.textContent = p.vendor;
  if (dName) dName.textContent = p.name;
  if (dStars) dStars.textContent = p.rating;
  if (dRatingCount) dRatingCount.textContent = `(${p.ratingCount} ulasan)`;
  if (dDesc) dDesc.textContent = p.description;
  if (fDesc) fDesc.textContent = p.description;

  const stockEl = document.getElementById('detailStock');
  if (stockEl) {
    if (p.stock) {
      stockEl.textContent = 'Stok Tersedia';
      stockEl.classList.remove('out');
    } else {
      stockEl.textContent = 'Stok Habis';
      stockEl.classList.add('out');
    }
  }

  const dPrice = document.getElementById('detailPrice');
  if (dPrice) dPrice.textContent = formatRupiah(p.price);

  const originalEl = document.getElementById('detailOriginalPrice');
  const discountEl = document.getElementById('detailDiscount');
  if (originalEl && discountEl) {
    if (p.originalPrice) {
      originalEl.textContent = formatRupiah(p.originalPrice);
      discountEl.textContent = `-${p.discount}`;
    } else {
      originalEl.textContent = '';
      discountEl.textContent = '';
    }
  }

  renderColorOptions(p);
  renderSizeOptions(p);
  renderSpecsTable(p);
  renderReviews(p);
  renderRelatedProducts(p);

  const wishBtn = document.getElementById('wishlistDetailBtn');
  if (wishBtn && wishlist.includes(p.id)) {
    wishBtn.classList.add('active');
    wishBtn.querySelector('span').textContent = '❤️';
  }

  if (!p.stock) {
    const addBtn = document.getElementById('addToCartBtn');
    const buyBtn = document.getElementById('buyNowBtn');
    if (addBtn && buyBtn) {
      addBtn.disabled = true;
      buyBtn.disabled = true;
      addBtn.style.opacity = '0.5';
      buyBtn.style.opacity = '0.5';
      addBtn.style.cursor = 'not-allowed';
      buyBtn.style.cursor = 'not-allowed';
      addBtn.textContent = 'Stok Habis';
    }
  }
}

function renderGallery(p) {
  const main = document.getElementById('galleryMain');
  const badge = document.getElementById('galleryBadge');
  const thumbs = document.getElementById('galleryThumbs');

  if (main) {
    if (p.images[0].startsWith('linear-gradient')) {
      main.style.background = p.images[0];
    } else {
      main.style.background = `url('${p.images[0]}') center/cover no-repeat`;
    }
  }

  if (badge) {
    if (p.badge) {
      badge.textContent = p.badgeText;
      badge.classList.add(`badge-${p.badge}`);
    } else {
      badge.style.display = 'none';
    }
  }

  if (thumbs) {
    thumbs.innerHTML = '';
    const isHandphone = p.name.toLowerCase().includes('iphone') || p.name.toLowerCase().includes('phone') || p.category === 'handphone';
    
    if (!isHandphone) {
      thumbs.style.display = 'none';
      return;
    } else {
      thumbs.style.display = 'grid';
    }

    p.images.forEach((img, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
      if (img.startsWith('linear-gradient')) {
        thumb.style.background = img;
      } else {
        thumb.style.background = `url('${img}') center/cover no-repeat`;
      }

      thumb.addEventListener('click', () => {
        if (main) {
          if (img.startsWith('linear-gradient')) {
            main.style.background = img;
          } else {
            main.style.background = `url('${img}') center/cover no-repeat`;
          }
        }
        thumbs.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });

      thumbs.appendChild(thumb);
    });
  }
}

function renderColorOptions(p) {
  const group = document.getElementById('colorOptionGroup');
  const container = document.getElementById('colorOptions');
  if (!group || !container) return;

  container.innerHTML = '';

  const isHandphone = p.name.toLowerCase().includes('iphone') || p.name.toLowerCase().includes('phone') || p.category === 'handphone';

  if (!isHandphone || !p.colors || p.colors.length === 0) {
    group.classList.add('hidden');
    return;
  }
  group.classList.remove('hidden');

  p.colors.forEach((color, index) => {
    const btn = document.createElement('button');
    btn.className = 'color-option' + (index === 0 ? ' active' : '');
    
    if (color.image) {
      btn.style.background = `url('${color.image}') center/cover no-repeat`;
    } else {
      btn.style.background = color.hex;
    }
    btn.title = color.name;

    btn.addEventListener('click', () => {
      container.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = color.name;
      
      if (color.image) {
        const main = document.getElementById('galleryMain');
        if (main) {
          main.style.background = `url('${color.image}') center/cover no-repeat`;
        }
      }
    });

    container.appendChild(btn);
  });

  selectedColor = p.colors[0].name;
}

function renderSizeOptions(p) {
  const group = document.getElementById('sizeOptionGroup');
  const container = document.getElementById('sizeOptions');
  if (!group || !container) return;

  container.innerHTML = '';

  if (!p.sizes || p.sizes.length === 0) {
    group.classList.add('hidden');
    return;
  }
  group.classList.remove('hidden');

  p.sizes.forEach((size, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (index === 0 ? ' active' : '');
    btn.textContent = size;

    btn.addEventListener('click', () => {
      container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = size;
    });

    container.appendChild(btn);
  });

  selectedSize = p.sizes[0];
}

function renderSpecsTable(p) {
  const table = document.getElementById('specsTable');
  if (!table) return;

  table.innerHTML = '';
  Object.entries(p.specs).forEach(([key, value]) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    table.appendChild(row);
  });
}

function renderReviews(p) {
  const list = document.getElementById('reviewsList');
  if (!list) return;

  list.innerHTML = '';

  const rScore = document.getElementById('reviewAvgScore');
  const rStars = document.getElementById('reviewAvgStars');
  const rCount = document.getElementById('reviewTotalCount');

  if (rScore) rScore.textContent = (p.rating.length > 0) ? (p.rating.split('★').length - 1) + '.0' : '0.0';
  if (rStars) rStars.textContent = p.rating;
  if (rCount) rCount.textContent = `Berdasarkan ${p.ratingCount} ulasan`;

  p.reviews.forEach(review => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <div class="review-header">
        <span class="review-name">${review.name}</span>
        <span class="review-date">${review.date}</span>
      </div>
      <div class="review-stars">${stars}</div>
      <p class="review-text">${review.text}</p>
    `;
    list.appendChild(item);
  });
}

function renderRelatedProducts(p) {
  const grid = document.getElementById('relatedGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const related = products.filter(item => item.id !== p.id).slice(0, 4);

  related.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const priceFormatted = formatRupiah(product.price);
    const originalFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';

    const badgeHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>`
      : '';

    const discountHTML = product.originalPrice
      ? `<span class="price-original">${originalFormatted}</span>
         <span class="price-discount">-${product.discount}</span>`
      : '';

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
        ${badgeHTML}
        <button class="wishlist-btn" id="wish-related-${product.id}" onclick="toggleWishlist(${product.id}, event)">
          <span>🤍</span>
        </button>
      </div>
      <div class="product-info">
        <div class="product-vendor">${product.vendor}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${priceFormatted}</span>
          ${discountHTML}
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
          + Tambah ke Keranjang
        </button>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    grid.appendChild(card);
  });
}

function setupQuantityControl() {
  const minusBtn = document.getElementById('qtyMinus');
  const plusBtn = document.getElementById('qtyPlus');
  const input = document.getElementById('qtyInput');

  if (!minusBtn || !plusBtn || !input) return;

  minusBtn.addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty -= 1;
      input.value = currentQty;
    }
  });

  plusBtn.addEventListener('click', () => {
    currentQty += 1;
    input.value = currentQty;
  });
}

function setupAddToCartDetail() {
  const addBtn = document.getElementById('addToCartBtn');
  const buyBtn = document.getElementById('buyNowBtn');

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (!currentProduct || !currentProduct.stock) return;

      const existing = cart.find(item => item.id === currentProduct.id);
      if (existing) {
        existing.qty += currentQty;
      } else {
        cart.push({
          id: currentProduct.id,
          name: currentProduct.name,
          price: currentProduct.price,
          vendor: currentProduct.vendor,
          qty: currentQty
        });
      }

      saveCart();
      updateCartBadge();
      showToast(`"${currentProduct.name}" (${currentQty}x) ditambahkan ke keranjang! 🛒`);
    });
  }

  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      if (!currentProduct || !currentProduct.stock) return;

      const existing = cart.find(item => item.id === currentProduct.id);
      if (existing) {
        existing.qty += currentQty;
      } else {
        cart.push({
          id: currentProduct.id,
          name: currentProduct.name,
          price: currentProduct.price,
          vendor: currentProduct.vendor,
          qty: currentQty
        });
      }

      saveCart();
      updateCartBadge();
      window.location.href = 'cart.html';
    });
  }
}

function setupWishlistDetail() {
  const btn = document.getElementById('wishlistDetailBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const idx = wishlist.indexOf(currentProduct.id);

    if (idx === -1) {
      wishlist.push(currentProduct.id);
      btn.classList.add('active');
      btn.querySelector('span').textContent = '❤️';
      showToast('Ditambahkan ke wishlist! ❤️');
    } else {
      wishlist.splice(idx, 1);
      btn.classList.remove('active');
      btn.querySelector('span').textContent = '🤍';
      showToast('Dihapus dari wishlist');
    }

    localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
  });
}

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetEl = document.getElementById(`tab-${target}`);
      if (targetEl) targetEl.classList.add('active');
    });
  });
}

function initProductDetailPage() {
  renderProductDetail();
  setupQuantityControl();
  setupAddToCartDetail();
  setupWishlistDetail();
  setupTabs();
}


// =============================================
// HALAMAN KATEGORI (category.html)
// =============================================
const categoryThemes = {
  furniture: { bg: " url('img/furnituree.jpg') center/cover no-repeat" },
  fashion: { bg: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('img/fashionn.jpg') center/cover no-repeat" },
  elektronik: { bg: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('img/electronic.jpg') center/cover no-repeat" },
  dapur: { bg: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('img/kitchenn.jpg') center/cover no-repeat" },
  kecantikan: { bg: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('img/makeupp.jpg') center/cover no-repeat" }
};

let categoryFilters = {
  sort: 'default',
  price: 'all',
  status: []
};

function getCategorySlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat') || categories[0].slug;
}

function renderCategoryHero(cat, productCount) {
  const bCrumb = document.getElementById('breadcrumbCategory');
  const hIcon = document.getElementById('categoryHeroIcon');
  const hTitle = document.getElementById('categoryHeroTitle');
  const hDesc = document.getElementById('categoryHeroDesc');
  const hCount = document.getElementById('categoryHeroCount');
  const heroContainer = document.getElementById('categoryHero') || document.querySelector('.cat-hero');

  if (bCrumb) bCrumb.textContent = cat.name;
  if (hIcon) {
    hIcon.style.display = 'none'; // Sembunyikan ring ikon agar lebih clean
  }
  if (hTitle) hTitle.textContent = cat.name;
  if (hDesc) hDesc.textContent = `Temukan koleksi ${cat.name.toLowerCase()} terbaik dari vendor-vendor terpercaya kami`;
  if (hCount) hCount.textContent = `${productCount} produk ditemukan`;

  const theme = categoryThemes[cat.slug];
  if (theme && heroContainer) {
    heroContainer.style.background = theme.bg;
  }
}

function renderCategoryChips(activeSlug) {
  const container = document.getElementById('categoryChips');
  if (!container) return;

  container.innerHTML = '';

  categories.forEach(cat => {
    const chip = document.createElement('a');
    chip.className = 'cat-chip' + (cat.slug === activeSlug ? ' active' : '');
    chip.href = `category.html?cat=${cat.slug}`;
    chip.innerHTML = `<span>${cat.name}</span>`;

    container.appendChild(chip);
  });
}

function getFilteredCategoryProducts(slug) {
  let result = products.filter(p => p.category === slug);

  if (categoryFilters.price !== 'all') {
    const [min, max] = categoryFilters.price.split('-').map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (categoryFilters.status.length > 0) {
    result = result.filter(p => categoryFilters.status.includes(p.badge));
  }

  switch (categoryFilters.sort) {
    case 'price-asc':
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result = [...result].sort((a, b) => {
        const scoreA = (a.rating.match(/★/g) || []).length;
        const scoreB = (b.rating.match(/★/g) || []).length;
        return scoreB - scoreA;
      });
      break;
  }

  return result;
}

function renderCategoryProducts(slug) {
  const grid = document.getElementById('categoryProductsGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  const list = getFilteredCategoryProducts(slug);
  grid.innerHTML = '';

  const resCount = document.getElementById('resultCount');
  if (resCount) resCount.innerHTML = `<strong>${list.length}</strong> produk ditemukan`;

  const cat = categories.find(c => c.slug === slug);
  if (cat) renderCategoryHero(cat, list.length);

  renderActiveFilters(slug);

  if (list.length === 0) {
    if (emptyState) emptyState.classList.add('show');
    return;
  }
  if (emptyState) emptyState.classList.remove('show');

  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const priceFormatted = formatRupiah(product.price);
    const originalFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';

    const badgeHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>`
      : '';

    const discountHTML = product.originalPrice
      ? `<span class="price-original">${originalFormatted}</span>
         <span class="price-discount">-${product.discount}</span>`
      : '';

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
        ${badgeHTML}
        <button class="wishlist-btn" id="wish-cat-${product.id}" onclick="toggleWishlist(${product.id}, event)">
          <span>🤍</span>
        </button>
      </div>
      <div class="product-info">
        <div class="product-vendor">${product.vendor}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${priceFormatted}</span>
          ${discountHTML}
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
          + Tambah ke Keranjang
        </button>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    grid.appendChild(card);

    if (wishlist.includes(product.id)) {
      const btn = card.querySelector('.wishlist-btn');
      if (btn) {
        btn.classList.add('active');
        btn.querySelector('span').textContent = '❤️';
      }
    }
  });
}

function renderActiveFilters(slug) {
  const container = document.getElementById('activeFilters');
  if (!container) return;

  container.innerHTML = '';

  const priceLabels = {
    '0-400000': 'Di bawah Rp 400.000',
    '400000-1000000': 'Rp 400.000 — Rp 1.000.000',
    '1000000-999999999': 'Di atas Rp 1.000.000'
  };
  const statusLabels = { sale: 'Sedang Diskon', new: 'Produk Baru' };

  const chips = [];

  if (categoryFilters.price !== 'all') {
    chips.push({ type: 'price', label: priceLabels[categoryFilters.price] || 'Harga tertentu' });
  }

  categoryFilters.status.forEach(status => {
    chips.push({ type: 'status', value: status, label: statusLabels[status] || status });
  });

  if (chips.length === 0) {
    container.classList.remove('show');
    return;
  }
  container.classList.add('show');

  chips.forEach(chip => {
    const btn = document.createElement('button');
    btn.className = 'active-filter-chip';
    btn.innerHTML = `${chip.label} <span class="chip-remove">✕</span>`;

    btn.addEventListener('click', () => {
      if (chip.type === 'price') {
        categoryFilters.price = 'all';
        const radio = document.querySelector('input[name="price"][value="all"]');
        if (radio) radio.checked = true;
      } else if (chip.type === 'status') {
        categoryFilters.status = categoryFilters.status.filter(s => s !== chip.value);
        const checkbox = document.querySelector(`#statusOptions input[value="${chip.value}"]`);
        if (checkbox) checkbox.checked = false;
      }
      renderCategoryProducts(slug);
    });

    container.appendChild(btn);
  });

  if (chips.length > 1) {
    const clearAll = document.createElement('button');
    clearAll.className = 'active-filter-clear';
    clearAll.textContent = 'Hapus Semua';
    clearAll.addEventListener('click', () => {
      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) resetBtn.click();
    });
    container.appendChild(clearAll);
  }
}

function setupCategoryFilters(slug) {
  document.querySelectorAll('input[name="sort"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      categoryFilters.sort = e.target.value;
      const mSort = document.getElementById('sortSelectMobile');
      if (mSort) mSort.value = e.target.value;
      renderCategoryProducts(slug);
    });
  });

  const mobileSort = document.getElementById('sortSelectMobile');
  if (mobileSort) {
    mobileSort.addEventListener('change', (e) => {
      categoryFilters.sort = e.target.value;
      const radioTarget = document.querySelector(`input[name="sort"][value="${e.target.value}"]`);
      if (radioTarget) radioTarget.checked = true;
      renderCategoryProducts(slug);
    });
  }

  document.querySelectorAll('input[name="price"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      categoryFilters.price = e.target.value;
      renderCategoryProducts(slug);
    });
  });

  document.querySelectorAll('#statusOptions input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      categoryFilters.status = Array.from(
        document.querySelectorAll('#statusOptions input[type="checkbox"]:checked')
      ).map(c => c.value);
      renderCategoryProducts(slug);
    });
  });

  const resetFilterBtn = document.getElementById('resetFilterBtn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      categoryFilters = { sort: 'default', price: 'all', status: [] };

      const defSort = document.querySelector('input[name="sort"][value="default"]');
      const defPrice = document.querySelector('input[name="price"][value="all"]');

      if (defSort) defSort.checked = true;
      if (defPrice) defPrice.checked = true;

      document.querySelectorAll('#statusOptions input[type="checkbox"]').forEach(c => c.checked = false);

      const mSort = document.getElementById('sortSelectMobile');
      if (mSort) mSort.value = 'default';

      renderCategoryProducts(slug);
    });
  }
}

function initCategoryPage() {
  const slug = getCategorySlugFromURL();

  renderCategoryChips(slug);
  renderCategoryProducts(slug);
  setupCategoryFilters(slug);

  const emptyResetBtn = document.getElementById('emptyResetBtn');
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) resetBtn.click();
    });
  }
}


// =============================================
// HALAMAN KERANJANG (cart.html)
// =============================================

// Kode promo yang valid
const PROMO_CODES = {
  'VENDORA': 0.15,   // diskon 15%
  'HEMAT10': 0.10,   // diskon 10%
  'GRATIS': 0.20,    // diskon 20%
};

let appliedPromo = null;

function getShippingCost(subtotal) {
  if (subtotal === 0) return 0;
  if (subtotal >= 500000) return 0; // gratis ongkir
  return 25000;
}

function renderCartPage() {
  const emptyState = document.getElementById('cartEmptyState');
  const cartContent = document.getElementById('cartContent');
  const itemsList = document.getElementById('cartItemsList');
  const countText = document.getElementById('cartItemCountText');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!emptyState || !cartContent || !itemsList) return;

  // Tampilkan kondisi kosong / berisi
  if (cart.length === 0) {
    emptyState.style.display = 'flex';
    cartContent.style.display = 'none';
    if (countText) countText.textContent = 'Keranjangmu masih kosong';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  emptyState.style.display = 'none';
  cartContent.style.display = 'grid';
  if (checkoutBtn) checkoutBtn.disabled = false;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countText) countText.textContent = `${totalItems} item dalam keranjangmu`;

  // Render tiap item
  itemsList.innerHTML = '';
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const imgSrc = product ? product.image : null;
    const color = product ? product.color : '#e0e0e0';

    const card = document.createElement('div');
    card.className = 'cart-item-card';
    card.innerHTML = `
      <div class="cart-item-img">
        ${imgSrc
        ? `<img src="${imgSrc}" alt="${item.name}">`
        : `<div style="width:100%;height:100%;background:${color};border-radius:12px"></div>`}
      </div>
      <div class="cart-item-details">
        <div class="cart-item-vendor">${item.vendor}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRupiah(item.price)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="cart-qty-control">
          <button class="cart-qty-btn" onclick="changeCartQty(${item.id}, -1)" ${item.qty <= 1 ? 'disabled' : ''}>−</button>
          <span class="cart-qty-value">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-subtotal">${formatRupiah(item.price * item.qty)}</div>
        <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" title="Hapus">
          <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
        </button>
      </div>
    `;
    itemsList.appendChild(card);
  });

  updateCartSummary();
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderCartPage();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartPage();
  showToast('Produk dihapus dari keranjang');
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = appliedPromo ? Math.round(subtotal * appliedPromo.rate) : 0;
  const shipping = getShippingCost(subtotal - discount);
  const total = subtotal - discount + shipping;

  const elSubtotal = document.getElementById('summarySubtotal');
  const elDiscount = document.getElementById('summaryDiscount');
  const elDiscRow = document.getElementById('summaryDiscountRow');
  const elShipping = document.getElementById('summaryShipping');
  const elTotal = document.getElementById('summaryTotal');
  const freeNote = document.getElementById('freeShipNote');

  if (elSubtotal) elSubtotal.textContent = formatRupiah(subtotal);
  if (elShipping) elShipping.textContent = shipping === 0 ? 'Gratis 🎉' : formatRupiah(shipping);
  if (elTotal) elTotal.textContent = formatRupiah(total);

  if (elDiscRow && elDiscount) {
    if (discount > 0) {
      elDiscRow.style.display = 'flex';
      elDiscount.textContent = `-${formatRupiah(discount)}`;
    } else {
      elDiscRow.style.display = 'none';
    }
  }

  // Catatan gratis ongkir
  if (freeNote) {
    if (shipping > 0) {
      const remaining = 500000 - (subtotal - discount);
      freeNote.textContent = remaining > 0
        ? `Tambah ${formatRupiah(remaining)} lagi untuk gratis ongkir!`
        : '';
    } else {
      freeNote.textContent = '';
    }
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const msgEl = document.getElementById('promoMsg');
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  const rate = PROMO_CODES[code];

  if (!code) {
    msgEl.textContent = 'Masukkan kode promo terlebih dahulu.';
    msgEl.className = 'promo-msg error';
    return;
  }

  if (!rate) {
    msgEl.textContent = `Kode "${code}" tidak valid atau sudah kedaluwarsa.`;
    msgEl.className = 'promo-msg error';
    appliedPromo = null;
    updateCartSummary();
    return;
  }

  appliedPromo = { code, rate };
  msgEl.textContent = `Kode "${code}" berhasil diterapkan! Diskon ${rate * 100}% 🎉`;
  msgEl.className = 'promo-msg success';
  updateCartSummary();
}


// =============================================
// HALAMAN CHECKOUT (checkout.html)
// =============================================

// Biaya pengiriman berdasarkan metode yang dipilih
const SHIPPING_OPTIONS = {
  regular: { label: 'Reguler (2–4 hari)', cost: 20000 },
  express: { label: 'Express (1 hari)', cost: 45000 },
};

let checkoutShippingMethod = 'regular';

/* ---- Render daftar item di ringkasan checkout ---- */
function renderCheckoutItems() {
  const list = document.getElementById('checkoutItemsList');
  if (!list) return;

  list.innerHTML = '';

  if (cart.length === 0) {
    list.innerHTML = '<p style="color:var(--gray);font-size:0.82rem;">Keranjangmu kosong.</p>';
    return;
  }

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'checkout-item-row';
    row.innerHTML = `
      <span class="checkout-item-qty">${item.qty}×</span>
      <span class="checkout-item-name" title="${item.name}">${item.name}</span>
      <span class="checkout-item-price">${formatRupiah(item.price * item.qty)}</span>
    `;
    list.appendChild(row);
  });
}

/* ---- Hitung & tampilkan total di ringkasan checkout ---- */
function updateCheckoutSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const promoDiscount = appliedPromo ? Math.round(subtotal * appliedPromo.rate) : 0;
  const shippingCost = cart.length === 0 ? 0 : (SHIPPING_OPTIONS[checkoutShippingMethod]?.cost ?? 20000);
  const total = subtotal - promoDiscount + shippingCost;

  const elSub = document.getElementById('checkoutSubtotal');
  const elDisc = document.getElementById('checkoutDiscount');
  const elDiscRow = document.getElementById('checkoutDiscountRow');
  const elShip = document.getElementById('checkoutShipping');
  const elTotal = document.getElementById('checkoutTotal');

  if (elSub) elSub.textContent = formatRupiah(subtotal);
  if (elShip) elShip.textContent = formatRupiah(shippingCost);
  if (elTotal) elTotal.textContent = formatRupiah(total);

  if (elDiscRow && elDisc) {
    if (promoDiscount > 0) {
      elDiscRow.style.display = 'flex';
      elDisc.textContent = `-${formatRupiah(promoDiscount)}`;
    } else {
      elDiscRow.style.display = 'none';
    }
  }

  // Sinkronkan nominal di panel detail pembayaran
  const transferDisplay = document.getElementById('transferAmountDisplay');
  const qrisDisplay = document.getElementById('qrisAmountDisplay');
  if (transferDisplay) transferDisplay.textContent = formatRupiah(total);
  if (qrisDisplay) qrisDisplay.textContent = formatRupiah(total);
}

/* ---- Interaksi pilih metode pengiriman ---- */
function setupShippingMethodCards() {
  const cards = document.querySelectorAll('.shipping-method-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        checkoutShippingMethod = radio.value;
      }
      updateCheckoutSummary();
    });
  });
}

/* ---- Interaksi pilih metode pembayaran ---- */
function setupPaymentMethodCards() {
  const cards = document.querySelectorAll('.payment-method-card');

  // Sembunyikan semua panel detail dulu
  document.querySelectorAll('.payment-detail').forEach(d => d.classList.remove('show'));

  // Tampilkan panel untuk metode yang pertama kali aktif
  const defaultActive = document.querySelector('.payment-method-card.active input[type="radio"]');
  if (defaultActive) {
    const panel = document.getElementById(`paymentDetail-${defaultActive.value}`);
    if (panel) panel.classList.add('show');
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Toggle class aktif pada kartu
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Centang radio
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      // Sembunyikan semua panel detail, lalu tampilkan yang sesuai
      document.querySelectorAll('.payment-detail').forEach(d => d.classList.remove('show'));
      if (radio) {
        const panel = document.getElementById(`paymentDetail-${radio.value}`);
        if (panel) panel.classList.add('show');
      }
    });
  });
}

/* ---- Validasi form & submit pesanan ---- */
function setupCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validasi field wajib
    const fields = [
      { id: 'custName', label: 'Nama Penerima' },
      { id: 'custPhone', label: 'Nomor HP' },
      { id: 'custAddress', label: 'Alamat Lengkap' },
      { id: 'custCity', label: 'Kota / Kabupaten' },
      { id: 'custPostal', label: 'Kode Pos' },
    ];

    let hasError = false;
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) {
        el.classList.remove('input-error');
        if (!el.value.trim()) {
          el.classList.add('input-error');
          hasError = true;
        }
      }
    });

    if (hasError) {
      showToast('Lengkapi data pengiriman terlebih dahulu! 📝');
      return;
    }

    if (cart.length === 0) {
      showToast('Keranjangmu masih kosong!');
      return;
    }

    // Simulasi order berhasil — kosongkan cart dan simpan data order
    const btn = document.getElementById('placeOrderBtn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<iconify-icon icon="eos-icons:loading"></iconify-icon> Memproses...';
    }

    setTimeout(() => {
      // Ambil data form
      const name = document.getElementById('custName')?.value.trim() ?? '';
      const phone = document.getElementById('custPhone')?.value.trim() ?? '';
      const address = document.getElementById('custAddress')?.value.trim() ?? '';
      const city = document.getElementById('custCity')?.value.trim() ?? '';
      const postal = document.getElementById('custPostal')?.value.trim() ?? '';
      const note = document.getElementById('custNote')?.value.trim() ?? '';

      // Metode pengiriman & pembayaran yang aktif
      const shippingRadio = document.querySelector('input[name="shippingMethod"]:checked');
      const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');

      const shippingVal = shippingRadio?.value ?? 'regular';
      const paymentVal = paymentRadio?.value ?? 'transfer';

      const shippingLabels = { regular: 'Reguler (2–4 hari)', express: 'Express (1 hari)' };
      const paymentLabels = { transfer: 'Transfer Bank', ewallet: 'E-Wallet / QRIS', cod: 'Bayar di Tempat (COD)' };

      // Hitung total
      const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
      const promoDisc = appliedPromo ? Math.round(subtotal * appliedPromo.rate) : 0;
      const shipCost = SHIPPING_OPTIONS[shippingVal]?.cost ?? 20000;
      const total = subtotal - promoDisc + shipCost;

      // Buat order ID unik
      const orderId = 'VDR-' + Date.now().toString(36).toUpperCase().slice(-8);

      // Simpan ke localStorage
      const orderData = {
        id: orderId,
        date: new Date().toISOString(),
        items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, vendor: i.vendor })),
        subtotal, promoDisc, shipCost, total,
        shipping: shippingVal,
        shippingLabel: shippingLabels[shippingVal],
        payment: paymentVal,
        paymentLabel: paymentLabels[paymentVal],
        name, phone, address, city, postal, note,
      };
      localStorage.setItem('vendora_last_order', JSON.stringify(orderData));

      // Kosongkan cart
      cart = [];
      saveCart();
      updateCartBadge();

      // Redirect ke halaman sukses
      window.location.href = 'order-success.html';
    }, 1200);
  });
}

/* ---- Entry point halaman checkout ---- */
function initCheckoutPage() {
  renderCheckoutItems();
  updateCheckoutSummary();
  setupShippingMethodCards();
  setupPaymentMethodCards();
  setupCheckoutForm();
}


// =============================================
// HALAMAN PENCARIAN (search.html)
// =============================================
let searchFilters = {
  sort: 'default',
  price: 'all',
  categories: [],
  vendors: [],
  status: []
};

// Fungsi pencarian instan
function initSearchPage() {
  const searchInput = document.getElementById('searchMainInput');
  const clearBtn = document.getElementById('searchClearBtn');

  if (!searchInput) return;

  // Baca query parameter 'q' dari URL
  const params = new URLSearchParams(window.location.search);
  const urlQuery = params.get('q') || '';
  if (urlQuery) {
    searchInput.value = urlQuery;
    clearBtn.style.display = 'flex';
  }

  // Terapkan filter & render awal
  renderSearchProducts();

  // Event listener input pencarian (Real-time search)
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      clearBtn.style.display = 'flex';
    } else {
      clearBtn.style.display = 'none';
    }
    renderSearchProducts();
  });

  // Tombol hapus pencarian
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    renderSearchProducts();
  });

  // Event listener untuk filter kategori desktop
  document.querySelectorAll('.filter-cat-chk').forEach(cb => {
    cb.addEventListener('change', () => {
      searchFilters.categories = Array.from(document.querySelectorAll('.filter-cat-chk:checked')).map(c => c.value);
      renderSearchProducts();
    });
  });

  // Event listener untuk filter harga desktop
  document.querySelectorAll('input[name="priceFilter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      searchFilters.price = e.target.value;
      renderSearchProducts();
    });
  });

  // Event listener untuk filter status desktop
  document.querySelectorAll('.filter-status-chk').forEach(cb => {
    cb.addEventListener('change', () => {
      searchFilters.status = Array.from(document.querySelectorAll('.filter-status-chk:checked')).map(c => c.value);
      renderSearchProducts();
    });
  });

  // Event listener untuk filter vendor desktop
  document.querySelectorAll('.filter-vendor-chk').forEach(cb => {
    cb.addEventListener('change', () => {
      searchFilters.vendors = Array.from(document.querySelectorAll('.filter-vendor-chk:checked')).map(c => c.value);
      renderSearchProducts();
    });
  });

  // Event listener untuk sorting
  const sortSelect = document.getElementById('searchSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      searchFilters.sort = e.target.value;
      renderSearchProducts();
    });
  }

  // Tombol reset filter desktop
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetSearchAndFilters();
    });
  }
}

// Fungsi pencarian cepat via tag rekomendasi
function quickSearch(keyword) {
  const searchInput = document.getElementById('searchMainInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.value = keyword;
    if (clearBtn) clearBtn.style.display = 'flex';
    renderSearchProducts();
  }
}

// Reset pencarian dan semua filter
function resetSearchAndFilters() {
  const searchInput = document.getElementById('searchMainInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';

  // Reset checkboxes desktop
  document.querySelectorAll('.filter-cat-chk').forEach(cb => cb.checked = false);
  document.querySelectorAll('.filter-status-chk').forEach(cb => cb.checked = false);
  document.querySelectorAll('.filter-vendor-chk').forEach(cb => cb.checked = false);
  
  // Reset radio harga desktop
  const allPriceRadio = document.getElementById('price-all');
  if (allPriceRadio) allPriceRadio.checked = true;

  // Reset checkboxes mobile
  document.querySelectorAll('.filter-cat-chk-mob').forEach(cb => cb.checked = false);
  document.querySelectorAll('.filter-status-chk-mob').forEach(cb => cb.checked = false);
  document.querySelectorAll('.filter-vendor-chk-mob').forEach(cb => cb.checked = false);

  const mobPriceAll = document.getElementById('mob-price-all');
  if (mobPriceAll) mobPriceAll.checked = true;

  // Reset filter object
  searchFilters = {
    sort: 'default',
    price: 'all',
    categories: [],
    vendors: [],
    status: []
  };

  const sortSelect = document.getElementById('searchSortSelect');
  if (sortSelect) sortSelect.value = 'default';

  renderSearchProducts();
}

// Digunakan oleh mobile filter drawer apply button
window.triggerSearchRender = function() {
  renderSearchProducts();
};

function renderSearchProducts() {
  const grid = document.getElementById('searchProductsGrid');
  const emptyState = document.getElementById('searchEmptyState');
  const resultCountText = document.getElementById('searchResultCount');
  if (!grid) return;

  const query = (document.getElementById('searchMainInput')?.value || '').trim().toLowerCase();

  // 1. Jalankan penyaringan (Filtering)
  let list = [...products];

  // Filter teks pencarian (search query)
  if (query) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.vendor.toLowerCase().includes(query)
    );
  }

  // Filter kategori
  if (searchFilters.categories.length > 0) {
    list = list.filter(p => searchFilters.categories.includes(p.category));
  }

  // Filter rentang harga
  if (searchFilters.price !== 'all') {
    const [min, max] = searchFilters.price.split('-').map(Number);
    list = list.filter(p => p.price >= min && p.price <= max);
  }

  // Filter status (new / sale)
  if (searchFilters.status.length > 0) {
    list = list.filter(p => searchFilters.status.includes(p.badge));
  }

  // Filter vendor
  if (searchFilters.vendors.length > 0) {
    list = list.filter(p => searchFilters.vendors.includes(p.vendor));
  }

  // 2. Jalankan pengurutan (Sorting)
  switch (searchFilters.sort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => {
        const starsA = (a.rating.match(/★/g) || []).length;
        const starsB = (b.rating.match(/★/g) || []).length;
        return starsB - starsA;
      });
      break;
  }

  // 3. Render Hasil Pencarian
  grid.innerHTML = '';

  // Update text jumlah hasil
  if (resultCountText) {
    if (query) {
      resultCountText.innerHTML = `Menampilkan <strong>${list.length}</strong> hasil untuk <strong>"${query}"</strong>`;
    } else {
      resultCountText.innerHTML = `Menampilkan semua produk (<strong>${list.length}</strong> produk)`;
    }
  }

  // Update filter badge mobile
  const mobFilterBadge = document.getElementById('mobileFilterBadge');
  if (mobFilterBadge) {
    let appliedCount = 0;
    if (searchFilters.categories.length > 0) appliedCount += searchFilters.categories.length;
    if (searchFilters.price !== 'all') appliedCount++;
    if (searchFilters.status.length > 0) appliedCount += searchFilters.status.length;
    if (searchFilters.vendors.length > 0) appliedCount += searchFilters.vendors.length;

    if (appliedCount > 0) {
      mobFilterBadge.textContent = appliedCount;
      mobFilterBadge.style.display = 'inline-block';
    } else {
      mobFilterBadge.style.display = 'none';
    }
  }

  // Render filter chips aktif
  renderSearchActiveChips();

  if (list.length === 0) {
    if (emptyState) emptyState.classList.add('show');
    return;
  }
  if (emptyState) emptyState.classList.remove('show');

  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const priceFormatted = formatRupiah(product.price);
    const originalFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';

    const badgeHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>`
      : '';

    const discountHTML = product.originalPrice
      ? `<span class="price-original">${originalFormatted}</span>
         <span class="price-discount">-${product.discount}</span>`
      : '';

    card.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
        ${badgeHTML}
        <button class="wishlist-btn" id="wish-search-${product.id}" onclick="toggleWishlist(${product.id}, event)">
          <span>🤍</span>
        </button>
      </div>
      <div class="product-info">
        <div class="product-vendor">${product.vendor}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${product.rating}</span>
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${priceFormatted}</span>
          ${discountHTML}
        </div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
          + Tambah ke Keranjang
        </button>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    grid.appendChild(card);

    if (wishlist.includes(product.id)) {
      const btn = card.querySelector('.wishlist-btn');
      if (btn) {
        btn.classList.add('active');
        btn.querySelector('span').textContent = '❤️';
      }
    }
  });
}

function renderSearchActiveChips() {
  const container = document.getElementById('searchActiveFilters');
  if (!container) return;

  container.innerHTML = '';

  const priceLabels = {
    '0-400000': 'Di bawah Rp 400.000',
    '400000-1000000': 'Rp 400.000 — Rp 1.000.000',
    '1000000-999999999': 'Di atas Rp 1.000.000'
  };
  const statusLabels = { sale: 'Sedang Diskon', new: 'Produk Baru' };

  let chips = [];

  // Chips Kategori
  searchFilters.categories.forEach(cat => {
    chips.push({ type: 'category', value: cat, label: cat.charAt(0).toUpperCase() + cat.slice(1) });
  });

  // Chips Harga
  if (searchFilters.price !== 'all') {
    chips.push({ type: 'price', value: searchFilters.price, label: priceLabels[searchFilters.price] || 'Harga tertentu' });
  }

  // Chips Status
  searchFilters.status.forEach(st => {
    chips.push({ type: 'status', value: st, label: statusLabels[st] || st });
  });

  // Chips Vendor
  searchFilters.vendors.forEach(ven => {
    chips.push({ type: 'vendor', value: ven, label: ven });
  });

  if (chips.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'flex';

  chips.forEach(chip => {
    const el = document.createElement('div');
    el.className = 'filter-chip';
    el.innerHTML = `${chip.label} <span class="filter-chip-remove">✕</span>`;

    el.addEventListener('click', () => {
      removeSearchFilter(chip.type, chip.value);
    });

    container.appendChild(el);
  });

  // Tombol Hapus Semua
  const clearAll = document.createElement('a');
  clearAll.className = 'clear-all-filters-link';
  clearAll.href = '#';
  clearAll.textContent = 'Hapus Semua Filter';
  clearAll.addEventListener('click', (e) => {
    e.preventDefault();
    resetSearchAndFilters();
  });
  container.appendChild(clearAll);
}

function removeSearchFilter(type, value) {
  if (type === 'category') {
    searchFilters.categories = searchFilters.categories.filter(c => c !== value);
    const cb = document.querySelector(`.filter-cat-chk[value="${value}"]`);
    if (cb) cb.checked = false;
  } else if (type === 'price') {
    searchFilters.price = 'all';
    const radio = document.getElementById('price-all');
    if (radio) radio.checked = true;
  } else if (type === 'status') {
    searchFilters.status = searchFilters.status.filter(s => s !== value);
    const cb = document.querySelector(`.filter-status-chk[value="${value}"]`);
    if (cb) cb.checked = false;
  } else if (type === 'vendor') {
    searchFilters.vendors = searchFilters.vendors.filter(v => v !== value);
    const cb = document.querySelector(`.filter-vendor-chk[value="${value}"]`);
    if (cb) cb.checked = false;
  }

  renderSearchProducts();
}


// =============================================
// WISHLIST PAGE LOGIC
// =============================================
let currentWishlistCategory = 'all';
let currentWishlistSearch = '';
let currentWishlistSort = 'recent';
let currentWishlistView = 'grid';

function getWishlistProductImage(img) {
  if (!img) return 'img/sofafa.jpe';
  if (img.startsWith('http') || img.startsWith('img/')) return img;
  return 'img/' + img;
}

function initWishlistPage() {
  updateWishlistBadge();
  updateCartBadge();
  renderWishlistCategoryPills();
  renderWishlistGrid();
  updateWishlistStats();
}

function updateWishlistStats() {
  const totalItemsEl = document.getElementById('statTotalItems');
  const totalValueEl = document.getElementById('statTotalValue');
  const totalSavingsEl = document.getElementById('statTotalSavings');
  const stockStatusEl = document.getElementById('statStockStatus');

  if (!totalItemsEl) return;

  const items = products.filter(p => wishlist.includes(p.id));
  const totalItems = items.length;
  const totalValue = items.reduce((sum, p) => sum + (p.price || 0), 0);
  const totalSavings = items.reduce((sum, p) => {
    if (p.originalPrice && p.originalPrice > p.price) {
      return sum + (p.originalPrice - p.price);
    }
    return sum;
  }, 0);

  totalItemsEl.textContent = `${totalItems} Produk`;
  totalValueEl.textContent = formatRupiah(totalValue);
  totalSavingsEl.textContent = totalSavings > 0 ? formatRupiah(totalSavings) : 'Rp 0';
  if (stockStatusEl) {
    stockStatusEl.textContent = totalItems > 0 ? 'Semua Tersedia' : 'Belum Ada';
  }
}

function renderWishlistCategoryPills() {
  const pillsContainer = document.getElementById('wishlistCategoryPills');
  if (!pillsContainer) return;

  const items = products.filter(p => wishlist.includes(p.id));
  const countAll = items.length;

  const catCounts = {};
  items.forEach(p => {
    const cat = (p.category || 'lainnya').toLowerCase();
    catCounts[cat] = (catCounts[cat] || 0) + 1;
  });

  let html = `
    <button class="cat-pill ${currentWishlistCategory === 'all' ? 'active' : ''}" data-category="all" onclick="filterWishlistCategory('all')">
      <span>Semua</span>
      <span class="pill-count" id="countAll">${countAll}</span>
    </button>
  `;

  const categoriesList = [
    { slug: 'furniture', name: 'Furniture' },
    { slug: 'fashion', name: 'Fashion' },
    { slug: 'elektronik', name: 'Elektronik' },
    { slug: 'dapur', name: 'Dapur' },
    { slug: 'kecantikan', name: 'Kecantikan' }
  ];

  categoriesList.forEach(cat => {
    const count = catCounts[cat.slug] || 0;
    if (count > 0 || currentWishlistCategory === cat.slug) {
      html += `
        <button class="cat-pill ${currentWishlistCategory === cat.slug ? 'active' : ''}" data-category="${cat.slug}" onclick="filterWishlistCategory('${cat.slug}')">
          <span>${cat.name}</span>
          <span class="pill-count">${count}</span>
        </button>
      `;
    }
  });

  pillsContainer.innerHTML = html;
}

function filterWishlistCategory(catSlug) {
  currentWishlistCategory = catSlug;
  renderWishlistCategoryPills();
  renderWishlistGrid();
}

function handleWishlistSearch(query) {
  currentWishlistSearch = query.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) {
    clearBtn.style.display = currentWishlistSearch ? 'flex' : 'none';
  }
  renderWishlistGrid();
}

function clearWishlistSearch() {
  const searchInput = document.getElementById('wishlistSearchInput');
  if (searchInput) searchInput.value = '';
  currentWishlistSearch = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderWishlistGrid();
}

function handleWishlistSort(sortBy) {
  currentWishlistSort = sortBy;
  renderWishlistGrid();
}

function setWishlistView(mode) {
  currentWishlistView = mode;
  const gridContainer = document.getElementById('wishlistGrid');
  const btnGrid = document.getElementById('btnGridView');
  const btnList = document.getElementById('btnListView');

  if (mode === 'list') {
    if (gridContainer) {
      gridContainer.classList.remove('grid-mode');
      gridContainer.classList.add('list-mode');
    }
    if (btnList) btnList.classList.add('active');
    if (btnGrid) btnGrid.classList.remove('active');
  } else {
    if (gridContainer) {
      gridContainer.classList.remove('list-mode');
      gridContainer.classList.add('grid-mode');
    }
    if (btnGrid) btnGrid.classList.add('active');
    if (btnList) btnList.classList.remove('active');
  }

  renderWishlistGrid();
}

function renderWishlistGrid() {
  const grid = document.getElementById('wishlistGrid');
  const emptyState = document.getElementById('wishlistEmpty');
  const toolbar = document.getElementById('wishlistToolbar');
  const activeFilterBar = document.getElementById('activeFilterBar');
  const filterStatusText = document.getElementById('filterStatusText');

  if (!grid) return;

  if (wishlist.length === 0) {
    grid.style.display = 'none';
    if (toolbar) toolbar.style.display = 'none';
    if (activeFilterBar) activeFilterBar.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    renderEmptyRecommendations();
    updateWishlistStats();
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (toolbar) toolbar.style.display = 'flex';
  grid.style.display = currentWishlistView === 'list' ? 'flex' : 'grid';

  let items = products.filter(p => wishlist.includes(p.id));

  if (currentWishlistCategory !== 'all') {
    items = items.filter(p => (p.category || '').toLowerCase() === currentWishlistCategory);
  }

  if (currentWishlistSearch) {
    items = items.filter(p =>
      p.name.toLowerCase().includes(currentWishlistSearch) ||
      (p.vendor && p.vendor.toLowerCase().includes(currentWishlistSearch))
    );
  }

  if (currentWishlistCategory !== 'all' || currentWishlistSearch) {
    if (activeFilterBar) activeFilterBar.style.display = 'flex';
    if (filterStatusText) {
      let msg = `Menampilkan ${items.length} produk`;
      if (currentWishlistCategory !== 'all') msg += ` dalam kategori "${currentWishlistCategory}"`;
      if (currentWishlistSearch) msg += ` dengan kata kunci "${currentWishlistSearch}"`;
      filterStatusText.textContent = msg;
    }
  } else {
    if (activeFilterBar) activeFilterBar.style.display = 'none';
  }

  if (currentWishlistSort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (currentWishlistSort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (currentWishlistSort === 'discount-desc') {
    items.sort((a, b) => {
      const discA = a.originalPrice ? (a.originalPrice - a.price) : 0;
      const discB = b.originalPrice ? (b.originalPrice - b.price) : 0;
      return discB - discA;
    });
  } else if (currentWishlistSort === 'name-asc') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    items.sort((a, b) => wishlist.indexOf(b.id) - wishlist.indexOf(a.id));
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: #fff; border-radius: 16px; border: 1px solid var(--gray-light);">
        <iconify-icon icon="solar:magnifer-broken-bold-duotone" style="font-size: 3.2rem; color: var(--accent); margin-bottom: 0.8rem;"></iconify-icon>
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.4rem; color: var(--dark);">Tidak ada produk yang cocok</h3>
        <p style="font-size: 0.9rem; color: var(--gray); margin-bottom: 1.3rem;">Coba sesuaikan kata kunci pencarian atau ubah filter kategori Anda.</p>
        <button onclick="resetWishlistFilters()" style="padding: 0.65rem 1.5rem; background: var(--accent); color: #fff; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: background 0.2s;">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'w-card';
    card.id = `wcard-${product.id}`;

    const priceFormatted = formatRupiah(product.price);
    const origPriceFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';
    const discountHTML = product.originalPrice
      ? `<span class="w-price-original">${origPriceFormatted}</span>
         <span class="w-discount-pill">-${product.discount || 'Sale'}</span>`
      : '';

    const badgeHTML = product.badge
      ? `<span class="w-badge-pill ${product.badge}">${product.badgeText || product.badge}</span>`
      : (product.discount ? `<span class="w-badge-pill sale">Diskon</span>` : '');

    const imgUrl = getWishlistProductImage(product.image);

    if (currentWishlistView === 'list') {
      card.innerHTML = `
        <div class="w-card-media" onclick="window.location.href='product.html?id=${product.id}'">
          <img src="${imgUrl}" alt="${product.name}" class="w-card-img" onerror="this.onerror=null; this.src='img/sofafa.jpe';">
          ${badgeHTML}
          <button class="w-card-remove-btn" title="Hapus dari wishlist" onclick="removeWishlistItem(${product.id}, event)">
            <iconify-icon icon="solar:trash-bin-trash-bold"></iconify-icon>
          </button>
        </div>
        <div class="w-card-body">
          <div class="w-card-info-col">
            <div class="w-card-meta-row">
              <span class="w-vendor-name"><iconify-icon icon="solar:shop-2-bold"></iconify-icon> ${product.vendor}</span>
              <span class="w-stock-pill"><span class="w-stock-dot"></span> Ready Stock</span>
            </div>
            <a href="product.html?id=${product.id}" class="w-card-title">${product.name}</a>
            <div class="w-rating-row">
              <span class="w-stars">${product.rating || '★★★★★'}</span>
              <span class="w-rating-count">(${product.ratingCount || 45})</span>
            </div>
          </div>
          <div class="w-card-actions-col">
            <div class="w-price-row">
              <span class="w-price-current">${priceFormatted}</span>
              ${discountHTML}
            </div>
            <div class="w-card-actions">
              <button class="btn-w-add-cart" onclick="moveWishlistItemToCart(${product.id}, event)">
                <iconify-icon icon="solar:cart-large-bold"></iconify-icon>
                <span>+ Ke Keranjang</span>
              </button>
              <button class="btn-w-item-share" title="Bagikan Produk" onclick="shareIndividualItem(${product.id}, event)">
                <iconify-icon icon="solar:share-linear"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="w-card-media" onclick="window.location.href='product.html?id=${product.id}'">
          <img src="${imgUrl}" alt="${product.name}" class="w-card-img" onerror="this.onerror=null; this.src='img/sofafa.jpe';">
          ${badgeHTML}
          <button class="w-card-remove-btn" title="Hapus dari wishlist" onclick="removeWishlistItem(${product.id}, event)">
            <iconify-icon icon="solar:trash-bin-trash-bold"></iconify-icon>
          </button>
        </div>
        <div class="w-card-body">
          <div class="w-card-meta-row">
            <span class="w-vendor-name"><iconify-icon icon="solar:shop-2-bold"></iconify-icon> ${product.vendor}</span>
            <span class="w-stock-pill"><span class="w-stock-dot"></span> Ready Stock</span>
          </div>
          <a href="product.html?id=${product.id}" class="w-card-title">${product.name}</a>
          <div class="w-rating-row">
            <span class="w-stars">${product.rating || '★★★★★'}</span>
            <span class="w-rating-count">(${product.ratingCount || 45})</span>
          </div>
          <div class="w-price-row">
            <span class="w-price-current">${priceFormatted}</span>
            ${discountHTML}
          </div>
          <div class="w-card-actions">
            <button class="btn-w-add-cart" onclick="moveWishlistItemToCart(${product.id}, event)">
              <iconify-icon icon="solar:cart-large-bold"></iconify-icon>
              <span>+ Ke Keranjang</span>
            </button>
            <button class="btn-w-item-share" title="Bagikan Produk" onclick="shareIndividualItem(${product.id}, event)">
              <iconify-icon icon="solar:share-linear"></iconify-icon>
            </button>
          </div>
        </div>
      `;
    }

    grid.appendChild(card);
  });
}

function resetWishlistFilters() {
  currentWishlistCategory = 'all';
  currentWishlistSearch = '';
  const searchInput = document.getElementById('wishlistSearchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderWishlistCategoryPills();
  renderWishlistGrid();
}

function removeWishlistItem(productId, event) {
  if (event) event.stopPropagation();
  const card = document.getElementById(`wcard-${productId}`);
  if (card) {
    card.classList.add('removing');
  }

  setTimeout(() => {
    const idx = wishlist.indexOf(productId);
    if (idx !== -1) {
      wishlist.splice(idx, 1);
      localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
      updateWishlistBadge();
      updateWishlistStats();
      renderWishlistCategoryPills();
      renderWishlistGrid();
      showToast('Produk berhasil dihapus dari wishlist');
    }
  }, 320);
}

function moveWishlistItemToCart(productId, event) {
  if (event) event.stopPropagation();
  addToCart(productId);
  showToast('Produk ditambahkan ke keranjang belanja! 🛒');
}

function moveAllWishlistToCart() {
  if (wishlist.length === 0) {
    showToast('Wishlist Anda masih kosong!');
    return;
  }

  let addedCount = 0;
  wishlist.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (product) {
      const existing = cart.find(item => item.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          vendor: product.vendor,
          qty: 1
        });
      }
      addedCount++;
    }
  });

  saveCart();
  updateCartBadge();
  showToast(`${addedCount} produk berhasil dipindahkan ke keranjang! 🛒`);
}

function openClearWishlistModal() {
  const modal = document.getElementById('clearModalBackdrop');
  if (modal) modal.classList.add('active');
}

function closeClearWishlistModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('clearModalBackdrop');
  if (modal) modal.classList.remove('active');
}

function confirmClearWishlist() {
  wishlist = [];
  localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
  closeClearWishlistModal();
  updateWishlistBadge();
  updateWishlistStats();
  renderWishlistCategoryPills();
  renderWishlistGrid();
  showToast('Seluruh produk wishlist telah dikosongkan');
}

function openShareModal() {
  const modal = document.getElementById('shareModalBackdrop');
  const input = document.getElementById('shareLinkInput');
  if (input) {
    input.value = `${window.location.origin}${window.location.pathname}?share=${wishlist.join('-')}`;
  }
  if (modal) modal.classList.add('active');
}

function closeShareModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('shareModalBackdrop');
  if (modal) modal.classList.remove('active');
}

function copyShareLink() {
  const input = document.getElementById('shareLinkInput');
  const copyBtnText = document.getElementById('copyBtnText');
  const copyIcon = document.getElementById('copyIcon');

  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
      if (copyBtnText) copyBtnText.textContent = 'Tersalin! ✓';
      if (copyIcon) copyIcon.setAttribute('icon', 'solar:check-circle-bold');
      showToast('Tautan wishlist berhasil disalin ke clipboard! 📋');

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = 'Salin';
        if (copyIcon) copyIcon.setAttribute('icon', 'solar:copy-linear');
      }, 2500);
    }).catch(() => {
      showToast('Gagal menyalin tautan');
    });
  }
}

function shareIndividualItem(productId, event) {
  if (event) event.stopPropagation();
  const url = `${window.location.origin}/product.html?id=${productId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Tautan produk disalin ke clipboard! 📋');
    });
  } else {
    showToast('Tautan: ' + url);
  }
}

function shareToSocial(platform, event) {
  if (event) event.preventDefault();
  const shareUrl = encodeURIComponent(`${window.location.origin}${window.location.pathname}?share=${wishlist.join('-')}`);
  const shareText = encodeURIComponent('Lihat koleksi produk impian saya di Vendora Marketplace:');

  let targetUrl = '';
  if (platform === 'whatsapp') {
    targetUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;
  } else if (platform === 'telegram') {
    targetUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
  } else if (platform === 'twitter') {
    targetUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  }

  if (targetUrl) {
    window.open(targetUrl, '_blank', 'width=600,height=450');
  }
}

function renderEmptyRecommendations() {
  const recGrid = document.getElementById('emptyRecommendationsGrid');
  if (!recGrid) return;

  const recItems = products.slice(0, 4);

  recGrid.innerHTML = '';
  recItems.forEach(product => {
    const card = document.createElement('div');
    card.className = 'w-card';
    const imgUrl = getWishlistProductImage(product.image);
    const priceFormatted = formatRupiah(product.price);
    const isWish = wishlist.includes(product.id);

    card.innerHTML = `
      <div class="w-card-media" onclick="window.location.href='product.html?id=${product.id}'">
        <img src="${imgUrl}" alt="${product.name}" class="w-card-img" onerror="this.onerror=null; this.src='img/sofafa.jpe';">
        <button class="w-card-remove-btn" title="Simpan ke wishlist" style="color: ${isWish ? '#c0392b' : '#7a7a7a'}" onclick="quickToggleEmptyWishlist(${product.id}, this, event)">
          <iconify-icon icon="${isWish ? 'solar:heart-bold' : 'solar:heart-linear'}"></iconify-icon>
        </button>
      </div>
      <div class="w-card-body">
        <div class="w-card-meta-row">
          <span class="w-vendor-name"><iconify-icon icon="solar:shop-2-bold"></iconify-icon> ${product.vendor}</span>
          <span class="w-stock-pill"><span class="w-stock-dot"></span> Ready</span>
        </div>
        <a href="product.html?id=${product.id}" class="w-card-title">${product.name}</a>
        <div class="w-rating-row">
          <span class="w-stars">${product.rating || '★★★★★'}</span>
          <span class="w-rating-count">(${product.ratingCount || 50})</span>
        </div>
        <div class="w-price-row">
          <span class="w-price-current">${priceFormatted}</span>
        </div>
        <div class="w-card-actions">
          <button class="btn-w-add-cart" onclick="quickAddRecToWishlist(${product.id}, event)">
            <iconify-icon icon="solar:heart-add-bold"></iconify-icon>
            <span>Tambah ke Wishlist</span>
          </button>
        </div>
      </div>
    `;

    recGrid.appendChild(card);
  });
}

function quickAddRecToWishlist(productId, event) {
  if (event) event.stopPropagation();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    showToast('Produk ditambahkan ke wishlist! ❤️');
    renderWishlistCategoryPills();
    renderWishlistGrid();
    updateWishlistStats();
  }
}

function quickToggleEmptyWishlist(productId, btn, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    showToast('Ditambahkan ke wishlist! ❤️');
  } else {
    wishlist.splice(idx, 1);
    showToast('Dihapus dari wishlist');
  }
  localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderWishlistCategoryPills();
  renderWishlistGrid();
  updateWishlistStats();
}


// =============================================
// INISIALISASI HALAMAN
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateWishlistBadge();

  if (document.getElementById('wishlistGrid')) {
    initWishlistPage();
  } else if (document.getElementById('productsGrid')) {
    renderCategories();
    fetchProductsFromAPI();
    renderVendors();
    updateCartBadge();

    wishlist.forEach(id => {
      const btn = document.getElementById(`wish-${id}`);
      if (btn) {
        btn.classList.add('active');
        btn.querySelector('span').textContent = '❤️';
      }
    });
  } else if (document.getElementById('detailName')) {
    initProductDetailPage();
  } else if (document.getElementById('categoryProductsGrid')) {
    initCategoryPage();
  } else if (document.getElementById('cartItemsList')) {
    renderCartPage();
  } else if (document.getElementById('checkoutItemsList')) {
    initCheckoutPage();
  } else if (document.getElementById('searchProductsGrid')) {
    initSearchPage();
  }
});