document.write(`
<li class="list-group-item px-0 py-3 text-reset fs-reset review-item">
    <div class="row">
        <div class="col col-auto">
            <div class="ratio ratio-1x1 bg-light rounded-circle overflow-hidden mb-2" style="width: 69px;">
                <div class="d-flex align-items-center justify-content-center w-100 h-100 no-img-product">
                    <i class="icon-user" style="font-size: 2.25rem;"></i>
                </div>
                <!-- stock image jika image user belum upload (langsung tumpuki sesuai posisi) -->
                <img src="assets/img/user/no_user.svg" class="img-fluid w-100" alt="">
                <!--
                <img src="assets/img/user/user.jpg" class="img-fluid w-100" alt="">
                -->
            </div>
        </div>
        <div class="col col-12 col-sm">
            <h6 class="fw-medium fs-5 mb-0">Yoggi D. Pradhokot</h6>
            <div class="my-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
            <div class="mb-3">
                <span>
                    <small>
                        <i class="bi bi-calendar-fill"></i> Jum'at, 26 Juni 2023
                        <i class="bi bi-clock-fill ms-4"></i> 18.30 WIB
                    </small>
                </span>
            </div>
            <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam
                illum eius odit veritatis doloremque. Quaerat, accusamus. Quaerat, fugiat
                omnis quod officia praesentium perspiciatis sint possimus consequuntur sunt
                et odit.
            </p>
        </div>
    </div>
</li>
`)