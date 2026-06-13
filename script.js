  // =============================================
    // DATA — Data statis pengganti database
    // Nanti bisa diganti dengan fetch() ke API Laravel
    // =============================================

    // Data kategori
    // - slug: digunakan untuk URL halaman kategori (category.html?cat=slug)
    const categories = [
      { icon: "🛋️", name: "Furniture",  count: "1.2K produk", slug: "furniture"  },
      { icon: "👗", name: "Fashion",    count: "3.4K produk", slug: "fashion"    },
      { icon: "📱", name: "Elektronik", count: "890 produk",  slug: "elektronik" },
      { icon: "🍳", name: "Dapur",      count: "560 produk",  slug: "dapur"      },
      { icon: "💄", name: "Kecantikan", count: "2.1K produk", slug: "kecantikan" },
    ];

    // Data produk unggulan
    // Catatan tambahan untuk halaman detail produk (product.html):
    //  - description     : deskripsi panjang/lengkap produk
    //  - images          : array warna gradient untuk galeri (gambar utama + thumbnail)
    //  - colors          : pilihan varian warna (opsional, kosongkan [] jika tidak ada)
    //  - sizes           : pilihan varian ukuran (opsional, kosongkan [] jika tidak ada)
    //  - stock           : true = tersedia, false = stok habis
    //  - specs           : objek pasangan key-value untuk tabel spesifikasi
    //  - reviews         : array ulasan pelanggan {name, date, rating(1-5), text}
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
        description: "Sofa minimalis dengan desain Nordic yang elegan, dilengkapi rangka kayu solid dan busa berkepadatan tinggi untuk kenyamanan maksimal. Cocok untuk ruang tamu modern maupun apartemen minimalis.",
        images: [
          "linear-gradient(145deg, #e8d5b7, #c4a87a)",
          "linear-gradient(145deg, #c4a87a, #a8864a)",
          "linear-gradient(145deg, #f0e4cf, #d5bd96)",
          "linear-gradient(145deg, #d8c19a, #b8946a)"
        ],
        colors: [
          { name: "Krem",   hex: "#e8d5b7" },
          { name: "Cokelat",hex: "#a8864a" },
          { name: "Abu-abu",hex: "#a0a0a0" }
        ],
        sizes: [],
        stock: true,
        specs: {
          "Bahan":      "Kain linen & rangka kayu jati",
          "Dimensi":    "180 x 85 x 75 cm",
          "Berat":      "32 kg",
          "Kapasitas":  "2-3 orang",
          "Garansi":    "1 tahun garansi rangka"
        },
        reviews: [
          { name: "Dinda P.", date: "12 Mei 2025", rating: 5, text: "Sofanya empuk banget dan warnanya sesuai foto. Pengiriman juga rapi, dibungkus kayu." },
          { name: "Aditya R.", date: "2 April 2025", rating: 4, text: "Kualitas bagus untuk harga segini, hanya proses perakitan agak lama." },
          { name: "Maya S.", date: "20 Maret 2025", rating: 5, text: "Cocok untuk ruang tamu kecil, ukurannya pas dan terlihat mewah." }
        ]
      },
      {
        id: 2,
        name: "Sneakers Urban Pro",
        vendor: "StepStyle",
        category: "fashion",
        price: 459000,
        originalPrice: null,
        discount: null,
        rating: "★★★★☆",
        ratingCount: 84,
        badge: "new",
        badgeText: "New",
        color: "linear-gradient(145deg, #b7c8e8, #7a9ac4)",
        description: "Sneakers urban dengan sol empuk dan bahan breathable, dirancang untuk aktivitas harian maupun olahraga ringan. Desain kekinian dengan pilihan warna yang serbaguna.",
        images: [
          "linear-gradient(145deg, #b7c8e8, #7a9ac4)",
          "linear-gradient(145deg, #7a9ac4, #5a7aa4)",
          "linear-gradient(145deg, #d0dcf2, #a0b8e0)",
          "linear-gradient(145deg, #95aed8, #6b8cc0)"
        ],
        colors: [
          { name: "Biru",  hex: "#7a9ac4" },
          { name: "Putih", hex: "#f0f0f0" },
          { name: "Hitam", hex: "#2e2e2e" }
        ],
        sizes: ["38", "39", "40", "41", "42", "43"],
        stock: true,
        specs: {
          "Bahan Upper":  "Knit fabric breathable",
          "Bahan Sol":    "Rubber outsole anti-slip",
          "Berat":        "320 gram (per sepatu, ukuran 40)",
          "Cocok untuk":  "Jalan kaki, lari ringan, harian",
          "Garansi":      "30 hari tukar ukuran"
        },
        reviews: [
          { name: "Bagus W.", date: "8 Mei 2025", rating: 4, text: "Nyaman dipakai lama, tapi ukurannya agak kebesaran sedikit dari biasanya." },
          { name: "Sinta L.", date: "29 April 2025", rating: 5, text: "Modelnya keren, warna sesuai gambar, ringan banget dipakai." }
        ]
      },
      {
        id: 3,
        name: "Wireless Earbuds X1",
        vendor: "TechZone",
        category: "elektronik",
        price: 329000,
        originalPrice: 450000,
        discount: "27%",
        rating: "★★★★★",
        ratingCount: 302,
        badge: "hot",
        badgeText: "Hot",
        color: "linear-gradient(145deg, #2e2e2e, #4a4a4a)",
        description: "Earbuds nirkabel dengan suara jernih, fitur active noise cancelling, dan daya tahan baterai hingga 24 jam dengan charging case. Tahan air IPX5 untuk aktivitas outdoor.",
        images: [
          "linear-gradient(145deg, #2e2e2e, #4a4a4a)",
          "linear-gradient(145deg, #4a4a4a, #6a6a6a)",
          "linear-gradient(145deg, #1a1a1a, #3a3a3a)",
          "linear-gradient(145deg, #3a3a3a, #5a5a5a)"
        ],
        colors: [
          { name: "Hitam", hex: "#2e2e2e" },
          { name: "Putih", hex: "#f0f0f0" }
        ],
        sizes: [],
        stock: true,
        specs: {
          "Tipe Konektivitas": "Bluetooth 5.3",
          "Daya Tahan Baterai":"8 jam (24 jam dengan case)",
          "Fitur":             "Active Noise Cancelling, Touch Control",
          "Ketahanan Air":     "IPX5",
          "Garansi":           "1 tahun resmi"
        },
        reviews: [
          { name: "Fajar T.", date: "15 Mei 2025", rating: 5, text: "Suaranya jernih, bass mantap, ANC-nya cukup efektif untuk harga segini." },
          { name: "Citra A.", date: "1 Mei 2025", rating: 5, text: "Sudah dipakai sebulan, koneksi stabil dan baterai awet." },
          { name: "Reza M.", date: "18 April 2025", rating: 4, text: "Bagus, cuma case agak besar untuk dikantongi." }
        ]
      },
      {
        id: 4,
        name: "Meja Kerja Lipat",
        vendor: "FurniHome",
        category: "furniture",
        price: 780000,
        originalPrice: null,
        discount: null,
        rating: "★★★★☆",
        ratingCount: 56,
        badge: "new",
        badgeText: "New",
        color: "linear-gradient(145deg, #d5e8b7, #8ac47a)",
        description: "Meja kerja lipat hemat ruang dengan permukaan tahan gores, cocok untuk home office maupun belajar. Mudah dilipat dan disimpan saat tidak digunakan.",
        images: [
          "linear-gradient(145deg, #d5e8b7, #8ac47a)",
          "linear-gradient(145deg, #8ac47a, #6aa45a)",
          "linear-gradient(145deg, #e5f0d0, #b5d89a)",
          "linear-gradient(145deg, #c0dca0, #90c070)"
        ],
        colors: [],
        sizes: [],
        stock: false,
        specs: {
          "Bahan":     "Particle board + rangka besi",
          "Dimensi":   "100 x 50 x 75 cm (terbuka)",
          "Berat":     "9 kg",
          "Kapasitas Beban": "Hingga 25 kg",
          "Garansi":   "6 bulan"
        },
        reviews: [
          { name: "Wulan D.", date: "5 Mei 2025", rating: 4, text: "Praktis untuk apartemen kecil, mudah dilipat dan ringan dipindah." },
          { name: "Hendra P.", date: "22 April 2025", rating: 3, text: "Cukup kokoh, tapi permukaannya agak mudah baret kalau kena benda tajam." }
        ]
      }
    ];

    // Data vendor
    const vendors = [
      { icon: "🛋️", name: "FurniHome",   category: "Furniture & Dekorasi", bg: "#c8a96e", products: "245 produk", rating: "4.9 ★" },
      { icon: "👟", name: "StepStyle",   category: "Fashion & Sepatu",      bg: "#6e9ac8", products: "180 produk", rating: "4.8 ★" },
      { icon: "📱", name: "TechZone",    category: "Elektronik & Gadget",   bg: "#2e2e2e", products: "320 produk", rating: "4.7 ★" },
      { icon: "💄", name: "GlowBeauty", category: "Kecantikan & Skincare", bg: "#c87a9a", products: "410 produk", rating: "4.9 ★" },
    ];


    // =============================================
    // RENDER KATEGORI
    // Membuat kartu kategori dari array di atas
    // =============================================
    function renderCategories() {
      const grid = document.getElementById('categoriesGrid');

      // Loop setiap item di array categories
      categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';

        // Isi HTML kartu
        card.innerHTML = `
          <span class="category-icon">${cat.icon}</span>
          <div class="category-name">${cat.name}</div>
          <div class="category-count">${cat.count}</div>
        `;

        // Klik kartu → buka halaman kategori dengan filter produk
        card.addEventListener('click', () => {
          window.location.href = `category.html?cat=${cat.slug}`;
        });

        grid.appendChild(card); // masukkan ke DOM
      });
    }


    // =============================================
    // RENDER PRODUK
    // Membuat kartu produk dari array di atas
    // =============================================
    function renderProducts() {
      const grid = document.getElementById('productsGrid');

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Format harga ke Rupiah
        const priceFormatted = formatRupiah(product.price);
        const originalFormatted = product.originalPrice ? formatRupiah(product.originalPrice) : '';

        // Buat badge HTML (jika ada)
        const badgeHTML = product.badge
          ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>`
          : '';

        // Buat harga coret HTML (jika ada diskon)
        const discountHTML = product.originalPrice
          ? `<span class="price-original">${originalFormatted}</span>
             <span class="price-discount">-${product.discount}</span>`
          : '';

        card.innerHTML = `
          <!-- Gambar produk (placeholder warna) -->
          <div class="product-img" style="background:${product.color}">
            ${badgeHTML}
            <button class="wishlist-btn" id="wish-${product.id}" onclick="toggleWishlist(${product.id}, event)">
              <span>🤍</span>
            </button>
          </div>

          <!-- Info produk -->
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
            <!-- Tombol add to cart: panggil fungsi addToCart dengan ID produk -->
            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
              + Tambah ke Keranjang
            </button>
          </div>
        `;

        // Klik kartu (selain tombol) → buka halaman detail produk
        card.addEventListener('click', () => {
          window.location.href = `product.html?id=${product.id}`;
        });

        grid.appendChild(card);
      });
    }


    // =============================================
    // RENDER VENDOR
    // Membuat kartu vendor dari array di atas
    // =============================================
    function renderVendors() {
      const grid = document.getElementById('vendorsGrid');

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
    // Mengubah angka jadi format Rp 1.850.000
    // =============================================
    function formatRupiah(angka) {
      return 'Rp ' + angka.toLocaleString('id-ID');
    }


    // =============================================
    // CART — Keranjang Belanja
    // Menyimpan data di localStorage agar tidak hilang
    // saat halaman di-refresh
    // =============================================

    // Ambil data cart dari localStorage (atau array kosong jika belum ada)
    let cart = JSON.parse(localStorage.getItem('nexmart_cart')) || [];

    // Simpan cart ke localStorage
    function saveCart() {
      localStorage.setItem('nexmart_cart', JSON.stringify(cart));
    }

    // Update angka badge di ikon cart navbar
    function updateCartBadge() {
      const total = cart.reduce((sum, item) => sum + item.qty, 0); // jumlah semua qty
      document.getElementById('cartBadge').textContent = total;
    }

    // Tambah produk ke cart
    function addToCart(productId) {
      // Cari produk berdasarkan ID
      const product = products.find(p => p.id === productId);
      if (!product) return;

      // Cek apakah produk sudah ada di cart
      const existing = cart.find(item => item.id === productId);

      if (existing) {
        existing.qty += 1; // tambah qty jika sudah ada
      } else {
        // Tambahkan produk baru ke cart
        cart.push({
          id:    product.id,
          name:  product.name,
          price: product.price,
          vendor:product.vendor,
          qty:   1
        });
      }

      saveCart();           // simpan ke localStorage
      updateCartBadge();    // update angka badge
      showToast(`"${product.name}" ditambahkan ke keranjang! 🛒`);
    }


    // =============================================
    // WISHLIST — Daftar Favorit
    // =============================================
    let wishlist = JSON.parse(localStorage.getItem('nexmart_wishlist')) || [];

    function toggleWishlist(productId, event) {
      event.stopPropagation(); // cegah event klik kartu produk
      const btn = document.getElementById(`wish-${productId}`);
      const idx = wishlist.indexOf(productId);

      if (idx === -1) {
        // Belum di wishlist → tambahkan
        wishlist.push(productId);
        btn.classList.add('active');
        btn.querySelector('span').textContent = '❤️';
        showToast('Ditambahkan ke wishlist! ❤️');
      } else {
        // Sudah ada → hapus
        wishlist.splice(idx, 1);
        btn.classList.remove('active');
        btn.querySelector('span').textContent = '🤍';
        showToast('Dihapus dari wishlist');
      }

      localStorage.setItem('nexmart_wishlist', JSON.stringify(wishlist));
    }


    // =============================================
    // TOAST NOTIFICATION
    // Popup notifikasi kecil di bawah kanan
    // =============================================
    let toastTimeout; // untuk menghindari konflik timer

    function showToast(message) {
      const toast = document.getElementById('toast');
      const msg   = document.getElementById('toastMsg');

      msg.textContent = message;
      toast.classList.add('show');    // tampilkan toast

      clearTimeout(toastTimeout);     // reset timer jika dipanggil lagi cepat
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show'); // sembunyikan setelah 2.5 detik
      }, 2500);
    }


    // =============================================
    // NAVBAR — Scroll Effect
    // Tambah shadow saat halaman di-scroll ke bawah
    // =============================================
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });


    // =============================================
    // NAVBAR — Mobile Toggle (Hamburger)
    // Buka/tutup menu saat tombol hamburger diklik
    // =============================================
    document.getElementById('navToggle').addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      menu.classList.toggle('open'); // toggle class open
    });


    // =============================================
    // NEWSLETTER — Subscribe
    // =============================================
    function subscribeNewsletter() {
      const input = document.getElementById('emailInput');
      const email = input.value.trim();

      // Validasi email sederhana
      if (!email || !email.includes('@')) {
        showToast('Masukkan email yang valid ya! 📧');
        return;
      }

      // Nanti: kirim ke backend Laravel via fetch()
      showToast(`Berhasil daftar dengan ${email}! 🎉`);
      input.value = ''; // kosongkan input
    }


    // =============================================
    // HALAMAN DETAIL PRODUK (product.html)
    // Semua fungsi di bawah ini khusus untuk halaman detail produk.
    // Mengambil ID produk dari parameter URL: product.html?id=1
    // =============================================

    // Variabel state untuk halaman detail produk
    let currentProduct = null;  // produk yang sedang ditampilkan
    let selectedColor  = null;  // nama warna yang dipilih user
    let selectedSize   = null;  // ukuran yang dipilih user
    let currentQty     = 1;     // jumlah yang akan dibeli/ditambah ke cart

    // Ambil ID produk dari query string URL (?id=...)
    function getProductIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return parseInt(params.get('id'), 10);
    }

    // Render seluruh halaman detail produk
    function renderProductDetail() {
      const productId = getProductIdFromURL();
      currentProduct  = products.find(p => p.id === productId);

      // Jika produk tidak ditemukan (misalnya ID salah/tidak ada),
      // kembalikan user ke halaman utama.
      if (!currentProduct) {
        window.location.href = 'index.html';
        return;
      }

      const p = currentProduct;

      // ---------- BREADCRUMB ----------
      document.getElementById('breadcrumbProduct').textContent = p.name;

      // ---------- GALERI GAMBAR ----------
      renderGallery(p);

      // ---------- INFO DASAR ----------
      document.getElementById('detailVendor').textContent = p.vendor;
      document.getElementById('detailName').textContent   = p.name;
      document.getElementById('detailStars').textContent  = p.rating;
      document.getElementById('detailRatingCount').textContent = `(${p.ratingCount} ulasan)`;
      document.getElementById('detailDesc').textContent   = p.description;
      document.getElementById('fullDescription').textContent = p.description;

      // ---------- STATUS STOK ----------
      const stockEl = document.getElementById('detailStock');
      if (p.stock) {
        stockEl.textContent = 'Stok Tersedia';
        stockEl.classList.remove('out');
      } else {
        stockEl.textContent = 'Stok Habis';
        stockEl.classList.add('out');
      }

      // ---------- HARGA ----------
      document.getElementById('detailPrice').textContent = formatRupiah(p.price);

      const originalEl = document.getElementById('detailOriginalPrice');
      const discountEl = document.getElementById('detailDiscount');
      if (p.originalPrice) {
        originalEl.textContent = formatRupiah(p.originalPrice);
        discountEl.textContent = `-${p.discount}`;
      } else {
        originalEl.textContent = '';
        discountEl.textContent = '';
      }

      // ---------- VARIAN WARNA ----------
      renderColorOptions(p);

      // ---------- VARIAN UKURAN ----------
      renderSizeOptions(p);

      // ---------- TABEL SPESIFIKASI ----------
      renderSpecsTable(p);

      // ---------- ULASAN ----------
      renderReviews(p);

      // ---------- PRODUK TERKAIT ----------
      renderRelatedProducts(p);

      // ---------- STATUS WISHLIST ----------
      const wishBtn = document.getElementById('wishlistDetailBtn');
      if (wishlist.includes(p.id)) {
        wishBtn.classList.add('active');
        wishBtn.querySelector('span').textContent = '❤️';
      }

      // ---------- TOMBOL JIKA STOK HABIS ----------
      if (!p.stock) {
        const addBtn = document.getElementById('addToCartBtn');
        const buyBtn = document.getElementById('buyNowBtn');
        addBtn.disabled = true;
        buyBtn.disabled = true;
        addBtn.style.opacity = '0.5';
        buyBtn.style.opacity = '0.5';
        addBtn.style.cursor  = 'not-allowed';
        buyBtn.style.cursor  = 'not-allowed';
        addBtn.textContent   = 'Stok Habis';
      }
    }


    // ---------- RENDER GALERI ----------
    function renderGallery(p) {
      const main   = document.getElementById('galleryMain');
      const badge  = document.getElementById('galleryBadge');
      const thumbs = document.getElementById('galleryThumbs');

      // Set gambar utama ke gambar pertama
      main.style.background = p.images[0];

      // Tampilkan badge (Sale/New/Hot) jika ada
      if (p.badge) {
        badge.textContent = p.badgeText;
        badge.classList.add(`badge-${p.badge}`);
      } else {
        badge.style.display = 'none';
      }

      // Buat thumbnail untuk setiap gambar
      thumbs.innerHTML = '';
      p.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
        thumb.style.background = img;

        // Klik thumbnail → ganti gambar utama
        thumb.addEventListener('click', () => {
          main.style.background = img;
          // Update status "active" pada thumbnail
          thumbs.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });

        thumbs.appendChild(thumb);
      });
    }


    // ---------- RENDER PILIHAN WARNA ----------
    function renderColorOptions(p) {
      const group = document.getElementById('colorOptionGroup');
      const container = document.getElementById('colorOptions');
      container.innerHTML = '';

      // Sembunyikan grup jika produk tidak punya varian warna
      if (!p.colors || p.colors.length === 0) {
        group.classList.add('hidden');
        return;
      }
      group.classList.remove('hidden');

      p.colors.forEach((color, index) => {
        const btn = document.createElement('button');
        btn.className = 'color-option' + (index === 0 ? ' active' : '');
        btn.style.background = color.hex;
        btn.title = color.name;

        btn.addEventListener('click', () => {
          container.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedColor = color.name;
        });

        container.appendChild(btn);
      });

      // Set warna default terpilih
      selectedColor = p.colors[0].name;
    }


    // ---------- RENDER PILIHAN UKURAN ----------
    function renderSizeOptions(p) {
      const group = document.getElementById('sizeOptionGroup');
      const container = document.getElementById('sizeOptions');
      container.innerHTML = '';

      // Sembunyikan grup jika produk tidak punya varian ukuran
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

      // Set ukuran default terpilih
      selectedSize = p.sizes[0];
    }


    // ---------- RENDER TABEL SPESIFIKASI ----------
    function renderSpecsTable(p) {
      const table = document.getElementById('specsTable');
      table.innerHTML = '';

      // Loop setiap pasangan key-value di objek specs
      Object.entries(p.specs).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${value}</td>`;
        table.appendChild(row);
      });
    }


    // ---------- RENDER ULASAN ----------
    function renderReviews(p) {
      const list = document.getElementById('reviewsList');
      list.innerHTML = '';

      // Ringkasan skor rata-rata
      document.getElementById('reviewAvgScore').textContent = (p.rating.length > 0)
        ? (p.rating.split('★').length - 1) + '.0'
        : '0.0';
      document.getElementById('reviewAvgStars').textContent = p.rating;
      document.getElementById('reviewTotalCount').textContent = `Berdasarkan ${p.ratingCount} ulasan`;

      // Buat kartu untuk setiap ulasan
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


    // ---------- RENDER PRODUK TERKAIT ----------
    // Menampilkan produk lain (selain produk yang sedang dibuka)
    function renderRelatedProducts(p) {
      const grid = document.getElementById('relatedGrid');
      grid.innerHTML = '';

      // Ambil maksimal 4 produk lain (bukan produk saat ini)
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
          <div class="product-img" style="background:${product.color}">
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

        // Klik kartu → pindah ke halaman detail produk terkait
        card.addEventListener('click', () => {
          window.location.href = `product.html?id=${product.id}`;
        });

        grid.appendChild(card);
      });
    }


    // ---------- PENGATUR JUMLAH (QUANTITY) ----------
    function setupQuantityControl() {
      const minusBtn = document.getElementById('qtyMinus');
      const plusBtn  = document.getElementById('qtyPlus');
      const input    = document.getElementById('qtyInput');

      minusBtn.addEventListener('click', () => {
        if (currentQty > 1) {
          currentQty -= 1;
          input.value = currentQty;
        }
      });

      plusBtn.addEventListener('click', () => {
        currentQty += 1; // bisa ditambahkan batas maksimal jika perlu
        input.value = currentQty;
      });
    }


    // ---------- TOMBOL TAMBAH KE KERANJANG (HALAMAN DETAIL) ----------
    function setupAddToCartDetail() {
      document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (!currentProduct.stock) return;

        // Tambahkan produk sebanyak currentQty ke cart
        const existing = cart.find(item => item.id === currentProduct.id);
        if (existing) {
          existing.qty += currentQty;
        } else {
          cart.push({
            id:     currentProduct.id,
            name:   currentProduct.name,
            price:  currentProduct.price,
            vendor: currentProduct.vendor,
            qty:    currentQty
          });
        }

        saveCart();
        updateCartBadge();
        showToast(`"${currentProduct.name}" (${currentQty}x) ditambahkan ke keranjang! 🛒`);
      });

      // ---------- TOMBOL BELI SEKARANG ----------
      document.getElementById('buyNowBtn').addEventListener('click', () => {
        if (!currentProduct.stock) return;

        // Tambahkan ke cart lalu arahkan langsung ke halaman cart
        const existing = cart.find(item => item.id === currentProduct.id);
        if (existing) {
          existing.qty += currentQty;
        } else {
          cart.push({
            id:     currentProduct.id,
            name:   currentProduct.name,
            price:  currentProduct.price,
            vendor: currentProduct.vendor,
            qty:    currentQty
          });
        }

        saveCart();
        updateCartBadge();
        window.location.href = 'cart.html';
      });
    }


    // ---------- TOMBOL WISHLIST (HALAMAN DETAIL) ----------
    function setupWishlistDetail() {
      document.getElementById('wishlistDetailBtn').addEventListener('click', () => {
        const btn = document.getElementById('wishlistDetailBtn');
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
      });
    }


    // ---------- TAB NAVIGASI (Deskripsi / Spesifikasi / Ulasan) ----------
    function setupTabs() {
      const tabBtns = document.querySelectorAll('.tab-btn');

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab; // "description", "specs", atau "reviews"

          // Reset semua tab & konten ke non-aktif
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

          // Aktifkan tab & konten yang dipilih
          btn.classList.add('active');
          document.getElementById(`tab-${target}`).classList.add('active');
        });
      });
    }


    // ---------- INISIALISASI HALAMAN DETAIL PRODUK ----------
    function initProductDetailPage() {
      renderProductDetail();
      setupQuantityControl();
      setupAddToCartDetail();
      setupWishlistDetail();
      setupTabs();
    }


    // =============================================
    // HALAMAN KATEGORI (category.html)
    // Menampilkan produk berdasarkan kategori dengan filter & sorting.
    // Kategori diambil dari parameter URL: category.html?cat=furniture
    // =============================================

    // Tema warna untuk hero tiap kategori (silakan tambah/ubah sesuai slug)
    const categoryThemes = {
      furniture:  { bg: "linear-gradient(135deg, #2e2618 0%, #5a4a30 100%)" },
      fashion:    { bg: "linear-gradient(135deg, #1e2a3a 0%, #3a5a7a 100%)" },
      elektronik: { bg: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)" },
      dapur:      { bg: "linear-gradient(135deg, #2a3a1e 0%, #4a6a30 100%)" },
      kecantikan: { bg: "linear-gradient(135deg, #3a1e2a 0%, #6a3050 100%)" }
    };

    // State filter & sort halaman kategori
    let categoryFilters = {
      sort: 'default',
      price: 'all',
      status: []   // bisa berisi 'sale' dan/atau 'new'
    };

    // Ambil slug kategori dari query string URL (?cat=...)
    function getCategorySlugFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('cat') || categories[0].slug;
    }

    // Render hero bagian atas (ikon, judul, deskripsi, jumlah produk)
    function renderCategoryHero(cat, productCount) {
      document.getElementById('breadcrumbCategory').textContent = cat.name;
      document.getElementById('categoryHeroIcon').textContent  = cat.icon;
      document.getElementById('categoryHeroTitle').textContent = cat.name;
      document.getElementById('categoryHeroDesc').textContent  =
        `Temukan koleksi ${cat.name.toLowerCase()} terbaik dari vendor-vendor terpercaya kami`;
      document.getElementById('categoryHeroCount').textContent = `${productCount} produk ditemukan`;

      // Terapkan warna tema sesuai kategori (fallback ke warna default jika tidak ada)
      const theme = categoryThemes[cat.slug];
      if (theme) {
        document.getElementById('categoryHero').style.background = theme.bg;
      }
    }

    // Render chip navigasi kategori di bagian atas
    function renderCategoryChips(activeSlug) {
      const container = document.getElementById('categoryChips');
      container.innerHTML = '';

      categories.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'category-chip' + (cat.slug === activeSlug ? ' active' : '');
        chip.innerHTML = `<span>${cat.icon}</span><span>${cat.name}</span>`;

        chip.addEventListener('click', () => {
          window.location.href = `category.html?cat=${cat.slug}`;
        });

        container.appendChild(chip);
      });
    }

    // Ambil daftar produk sesuai kategori + filter + sort yang aktif
    function getFilteredCategoryProducts(slug) {
      // 1. Filter berdasarkan kategori
      let result = products.filter(p => p.category === slug);

      // 2. Filter berdasarkan rentang harga
      if (categoryFilters.price !== 'all') {
        const [min, max] = categoryFilters.price.split('-').map(Number);
        result = result.filter(p => p.price >= min && p.price <= max);
      }

      // 3. Filter berdasarkan status (sale / new)
      if (categoryFilters.status.length > 0) {
        result = result.filter(p => categoryFilters.status.includes(p.badge));
      }

      // 4. Sorting
      switch (categoryFilters.sort) {
        case 'price-asc':
          result = [...result].sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result = [...result].sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          // Hitung jumlah bintang penuh (★) sebagai skor rating
          result = [...result].sort((a, b) => {
            const scoreA = (a.rating.match(/★/g) || []).length;
            const scoreB = (b.rating.match(/★/g) || []).length;
            return scoreB - scoreA;
          });
          break;
        // 'default' → tidak diurutkan ulang (urutan asli data)
      }

      return result;
    }

    // Render grid produk untuk halaman kategori
    function renderCategoryProducts(slug) {
      const grid       = document.getElementById('categoryProductsGrid');
      const emptyState = document.getElementById('emptyState');
      const list       = getFilteredCategoryProducts(slug);

      grid.innerHTML = '';

      // Update jumlah hasil di toolbar & hero
      document.getElementById('resultCount').innerHTML = `<strong>${list.length}</strong> produk ditemukan`;
      const cat = categories.find(c => c.slug === slug);
      if (cat) renderCategoryHero(cat, list.length);

      // Tampilkan chip filter yang sedang aktif
      renderActiveFilters(slug);

      // Tampilkan pesan kosong jika tidak ada produk yang cocok
      if (list.length === 0) {
        emptyState.classList.add('show');
        return;
      }
      emptyState.classList.remove('show');

      // Render setiap produk — reuse style .product-card dari index
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
          <div class="product-img" style="background:${product.color}">
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

        // Klik kartu → buka halaman detail produk
        card.addEventListener('click', () => {
          window.location.href = `product.html?id=${product.id}`;
        });

        grid.appendChild(card);

        // Set status wishlist jika produk sudah ada di wishlist
        if (wishlist.includes(product.id)) {
          const btn = card.querySelector('.wishlist-btn');
          btn.classList.add('active');
          btn.querySelector('span').textContent = '❤️';
        }
      });
    }

    // Render chip "filter aktif" di atas grid produk — memudahkan user
    // melihat & menghapus filter yang sedang diterapkan tanpa buka sidebar
    function renderActiveFilters(slug) {
      const container = document.getElementById('activeFilters');
      if (!container) return;

      container.innerHTML = '';

      const priceLabels = {
        '0-400000':           'Di bawah Rp 400.000',
        '400000-1000000':     'Rp 400.000 — Rp 1.000.000',
        '1000000-999999999':  'Di atas Rp 1.000.000'
      };
      const statusLabels = { sale: 'Sedang Diskon', new: 'Produk Baru' };

      const chips = [];

      if (categoryFilters.price !== 'all') {
        chips.push({ type: 'price', label: priceLabels[categoryFilters.price] || 'Harga tertentu' });
      }

      categoryFilters.status.forEach(status => {
        chips.push({ type: 'status', value: status, label: statusLabels[status] || status });
      });

      // Tidak ada filter aktif → sembunyikan baris
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

      // Tombol "Hapus Semua" hanya muncul jika lebih dari 1 filter aktif
      if (chips.length > 1) {
        const clearAll = document.createElement('button');
        clearAll.className = 'active-filter-clear';
        clearAll.textContent = 'Hapus Semua';
        clearAll.addEventListener('click', () => {
          document.getElementById('resetFilterBtn').click();
        });
        container.appendChild(clearAll);
      }
    }

    // Pasang event listener untuk semua kontrol filter & sort
    function setupCategoryFilters(slug) {
      // Filter urutkan (sidebar desktop)
      document.querySelectorAll('input[name="sort"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          categoryFilters.sort = e.target.value;
          document.getElementById('sortSelectMobile').value = e.target.value; // sinkron dengan dropdown mobile
          renderCategoryProducts(slug);
        });
      });

      // Dropdown urutkan (mobile)
      document.getElementById('sortSelectMobile').addEventListener('change', (e) => {
        categoryFilters.sort = e.target.value;
        // Sinkronkan radio button sidebar
        document.querySelector(`input[name="sort"][value="${e.target.value}"]`).checked = true;
        renderCategoryProducts(slug);
      });

      // Filter rentang harga
      document.querySelectorAll('input[name="price"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          categoryFilters.price = e.target.value;
          renderCategoryProducts(slug);
        });
      });

      // Filter status (checkbox: sale, new)
      document.querySelectorAll('#statusOptions input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          categoryFilters.status = Array.from(
            document.querySelectorAll('#statusOptions input[type="checkbox"]:checked')
          ).map(c => c.value);
          renderCategoryProducts(slug);
        });
      });

      // Tombol reset filter
      document.getElementById('resetFilterBtn').addEventListener('click', () => {
        // Reset state filter ke default
        categoryFilters = { sort: 'default', price: 'all', status: [] };

        // Reset tampilan semua input
        document.querySelector('input[name="sort"][value="default"]').checked = true;
        document.querySelector('input[name="price"][value="all"]').checked = true;
        document.querySelectorAll('#statusOptions input[type="checkbox"]').forEach(c => c.checked = false);
        document.getElementById('sortSelectMobile').value = 'default';

        renderCategoryProducts(slug);
      });
    }

    // ---------- INISIALISASI HALAMAN KATEGORI ----------
    function initCategoryPage() {
      const slug = getCategorySlugFromURL();

      renderCategoryChips(slug);
      renderCategoryProducts(slug);
      setupCategoryFilters(slug);

      // Tombol reset di empty state cukup memicu klik tombol reset utama
      const emptyResetBtn = document.getElementById('emptyResetBtn');
      if (emptyResetBtn) {
        emptyResetBtn.addEventListener('click', () => {
          document.getElementById('resetFilterBtn').click();
        });
      }
    }


    // =============================================
    // INISIALISASI
    // Jalankan semua fungsi render saat halaman siap
    // =============================================
    document.addEventListener('DOMContentLoaded', () => {
      updateCartBadge();  // sync badge cart dari localStorage (semua halaman)

      // Deteksi halaman saat ini berdasarkan elemen yang ada di DOM,
      // lalu jalankan fungsi inisialisasi yang sesuai.
      if (document.getElementById('productsGrid')) {
        // ----- HALAMAN UTAMA (index.html) -----
        renderCategories();
        renderProducts();
        renderVendors();

        // Set status wishlist yang sudah tersimpan
        wishlist.forEach(id => {
          const btn = document.getElementById(`wish-${id}`);
          if (btn) {
            btn.classList.add('active');
            btn.querySelector('span').textContent = '❤️';
          }
        });
      } else if (document.getElementById('detailName')) {
        // ----- HALAMAN DETAIL PRODUK (product.html) -----
        initProductDetailPage();
      } else if (document.getElementById('categoryProductsGrid')) {
        // ----- HALAMAN KATEGORI (category.html) -----
        initCategoryPage();
      }
    });
