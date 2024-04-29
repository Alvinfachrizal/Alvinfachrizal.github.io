document.write(`
	<!-- tambahkan class "stok-habis" di class #card-produk untuk menampilkan konfirmasi stok produk habis -->
	<div class="card card-produk rounded-0 border-0 text-reset text-center h-100 position-relative">
	    <a class="text-decoration-none text-reset d-inline bg-light" href="detail_produk.html" style="flex-grow: 0;">
	        <div class="ratio ratio-1x1">
	        	<div class="wording-stok-habis top-50 start-50 translate-middle" style="background-color: #f2f2f2c5; z-index: 100;">
	        		<h5 class="fw-medium text-center fs-4">STOK <br class="d-lg-none"> HABIS</h5>
	        	</div>
	        	<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
		        	<div class="spinner-border text-dark" role="status"></div>
	        	</div>
	            <img src="assets/img/product/produk.png" class="bg-light z-2" alt="...">
	            <!-- jika image produk belum ada tau kosong nonaktifkan image di atas
	            <img src="assets/img/product/no_images.svg" class="z-1" alt="...">
	            -->
	        </div>
	    </a>
	    <div class="card-body bg-light d-flex flex-column">
	        <div style="flex: 1 1 auto;">
	            <h3 class="card-title fs-reset mb-1 opacity-75"><small>kopi</small></h3>
	            <h4 class="card-title fs-reset mb-0 fw-medium">UCAFÉ Kopi Instan Cappuccino R10</h4>
	            <p class="card-text my-2"><small>Renceng (10 sachets x 25g)</small></p>
	        </div>
	        <div class="harga-produk" style="flex-grow: 0;">
	            <!-- <div class="harga-normal fw-medium">Rp 14.700,-</div> -->
	            <div class="harga-promo">
	                <span class="harga-reguler opacity-75"><del>Rp 14.700,-</del></span>
	                <span class="harga-diskon fw-medium">Rp 13.500,-</span>
	            </div>
	        </div>
	    </div>
	    <div class="card-footer p-0 border-0 rounded-0">
	        <button class="btn btn-dark w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#modalTambahKeranjang">
				Beli <span class="d-none d-md-inline">Sekarang</span>
			</button>
	    </div>
	    <button class="btn btn-lg text-bg-dark position-absolute top-0 end-0 m-2 m-sm-3 z-3 lh-1 rounded-1 p-2" data-bs-toggle="modal" data-bs-target="#modalAddToCart">
			<i class="bi bi-cart-plus"></i>
		</button>
	</div>
	`)