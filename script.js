  // =============================================
    // DATA — Data statis pengganti database
    // Nanti bisa diganti dengan fetch() ke API Laravel
    // =============================================

    // Data kategori
    const categories = [
      { icon: "🛋️", name: "Furniture",  count: "1.2K produk" },
      { icon: "👗", name: "Fashion",    count: "3.4K produk" },
      { icon: "📱", name: "Elektronik", count: "890 produk"  },
      { icon: "🍳", name: "Dapur",      count: "560 produk"  },
      { icon: "💄", name: "Kecantikan", count: "2.1K produk" },
    ];

    // Data produk unggulan
    const products = [
      {
        id: 1,
        name: "Sofa Minimalis Nordic",
        vendor: "FurniHome",
        price: 1850000,
        originalPrice: 2500000,
        discount: "26%",
        rating: "★★★★★",
        ratingCount: 128,
        badge: "sale",
        badgeText: "Sale",
        color: "linear-gradient(145deg, #e8d5b7, #c4a87a)"
      },
      {
        id: 2,
        name: "Sneakers Urban Pro",
        vendor: "StepStyle",
        price: 459000,
        originalPrice: null,
        discount: null,
        rating: "★★★★☆",
        ratingCount: 84,
        badge: "new",
        badgeText: "New",
        color: "linear-gradient(145deg, #b7c8e8, #7a9ac4)"
      },
      {
        id: 3,
        name: "Wireless Earbuds X1",
        vendor: "TechZone",
        price: 329000,
        originalPrice: 450000,
        discount: "27%",
        rating: "★★★★★",
        ratingCount: 302,
        badge: "hot",
        badgeText: "Hot",
        color: "linear-gradient(145deg, #2e2e2e, #4a4a4a)"
      },
      {
        id: 4,
        name: "Meja Kerja Lipat",
        vendor: "FurniHome",
        price: 780000,
        originalPrice: null,
        discount: null,
        rating: "★★★★☆",
        ratingCount: 56,
        badge: "new",
        badgeText: "New",
        color: "linear-gradient(145deg, #d5e8b7, #8ac47a)"
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

        // Klik kartu → bisa diarahkan ke halaman produk dengan filter
        card.addEventListener('click', () => {
          showToast(`Membuka kategori ${cat.name}...`);
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
            <button class="btn-add-cart" onclick="addToCart(${product.id})">
              + Tambah ke Keranjang
            </button>
          </div>
        `;

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
    // INISIALISASI
    // Jalankan semua fungsi render saat halaman siap
    // =============================================
    document.addEventListener('DOMContentLoaded', () => {
      renderCategories(); // render kartu kategori
      renderProducts();   // render kartu produk
      renderVendors();    // render kartu vendor
      updateCartBadge();  // sync badge cart dari localStorage

      // Set status wishlist yang sudah tersimpan
      wishlist.forEach(id => {
        const btn = document.getElementById(`wish-${id}`);
        if (btn) {
          btn.classList.add('active');
          btn.querySelector('span').textContent = '❤️';
        }
      });
    });
