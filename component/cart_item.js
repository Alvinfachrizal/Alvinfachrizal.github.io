document.write(`
<div class="cart-item">
    <div class="row g-3">
        <div class="col col-12 col-md-auto">
            <a class="text-reset text-decoration-none d-flex flex-nowrap align-items-center" data-bs-toggle="modal" href="#modalHapusCartItem">
                <button class="btn-close me-1 me-md-0"></button> <small class="opacity-50 d-md-none">Hapus</small>
            </a>
        </div>
        <div class="col col-5 col-sm-auto">
            <div class="ratio ratio-1x1 bg-light">
                <!-- no image -->
                <img src="assets/img/product/no_images.svg" width="100%" height="auto" alt="">
                <!-- on image -->
                <img src="assets/img/product/produk.png" width="100%" height="auto" class="bg-light" alt="">
            </div>
        </div>
        <div class="col col-7 col-sm-8 ms-sm-auto col-md">
            <div class="row g-2 gx-md-3">
                <div class="col col-12 col-md-12">
                    <h4 class="fs-5 fw-medium text-capitalize mb-0">
                        UCAFÉ Kopi Instan Cappuccino R10
                    </h4>
                    <div>
                        <span>Renceng (10 sachets x 25g)</span>
                    </div>
                </div>
                <div class="col col-12 col-md">
                    <div class="harga-produk">
                        <!-- <div class="harga-normal fw-medium">Rp 14.700,-</div> -->
                        <div class="harga-promo justify-content-start">
                            <span class="harga-reguler opacity-75">
                                <del>Rp 14.700,-</del>
                            </span>
                            <span class="harga-diskon fw-medium">Rp 13.500,-</span>
                        </div>
                    </div>
                </div>
                <div class="col col-12 col-md-auto">
                    <div class="input-group qty-produk" style="width: 115px;">
                        <button class="btn p-0">
                            <i class="bi bi-dash-circle-fill"></i>
                        </button>
                        <input type="number" min="1" max="100" value="100" class="form-control text-center p-0 border-0"
                            style="width: 70px;">
                        <button class="btn p-0">
                            <i class="bi bi-plus-circle-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`)