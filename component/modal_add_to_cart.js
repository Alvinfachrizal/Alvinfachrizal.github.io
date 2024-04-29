document.write(`
<div class="modal fade modal-center" id="modalAddToCart" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalAddToCartLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down modal-lg">
        <div class="modal-content rounded-0">
            <div class="modal-body p-0">
                <header class="bg-white sticky-top">
                    <div class="container-fluid py-3 d-flex justify-content-between align-items-center">
                        <h6 class="modal-title opacity-25" id="modalAddToCartLabel">
                            <i class="bi bi-cart-fill me-2"></i> Add to cart
                        </h6>
                        <button type="button" class="btn-close rounded-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </header>
                <main>
                    <div class="container-fluid">
                        <div class="row gx-lg-3">
                            <div class="col col-12 col-lg-4">
                                <div class="ratio ratio-1x1 rounded overflow-hidden">
                                    <img src="assets/img/product/no_images.svg" class="img-fluid opacity-50" alt="">
                                    <div class="img-loading d-flex justify-content-center align-items-center w-100 h-100">
                                        <div class="spinner-border text-dark" style="width: 30px; height: 30px;" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <!--
                                    <img src="assets/img/product/supresso_sumatra_mandheling_coffee_beans_200g_1.png" class="img-fluid bg-white" alt="">
                                    -->
                                </div>
                            </div>
                            <div class="col col-12 col-lg-8 text-capitalize">
                                <h3 class="fs-6 fw-normal mb-0 opacity-75">
                                    <small>single origin</small>
                                </h3>
                                <h4 class="fs-4 fw-medium mb-0">
                                    sumatra mandheling coffee beans
                                </h4>
                                <p class="mb-3">
                                    <small>200g</small>
                                </p>
                                <p class="mb-0">
                                    Stock : 90pcs
                                </p>
                                <div class="product-price fs-5 mb-3">
                                    <div class="normal-price fw-medium d-none">
                                        <span>Rp&nbsp;95.000,-</span>
                                    </div>
                                    <div class="special-price d-flex flex-wrap align-items-center column-gap-2">
                                        <div class="discount-price text-reset fw-medium">
                                            <span>Rp&nbsp;75.000,-</span>
                                        </div>
                                        <div class="regular-price small">
                                            <span class="opacity-50">Rp&nbsp;95.000,-</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-justify opacity-75 small">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="bg-white sticky-bottom">
                    <div class="container-fluid">
                        <hr class="opacity-75">
                        <div id="alert-out-stock"></div>
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <div class="qty-product fs-5">
                                    <button class="btn-minus"></button>
                                    <input type="number" value="1" min="1" max="100" name="">
                                    <button class="btn-plus" id="toggle-alert-out-stock"></button>
                                </div>
                                <span class="d-none d-lg-inline ms-2">item added to your Cart</span>
                            </div>
                            <span class="fs-5 fw-medium">Subtotal : Rp&nbsp;75.000,-</span>
                        </div>
                        <hr class="opacity-75">
                    </div>
                    <div class="container-fluid pb-3 d-flex flex-wrap gap-2 flex-lg-nowrap">
                        <a class="btn btn-lg rounded-0 btn-light w-100" href="#">Continue Shopping</a>
                        <a class="btn btn-lg rounded-0 btn-dark w-100" href="#">Continue Cart & Checkout</a>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
`)