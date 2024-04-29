document.write(`
<div class="modal fade" id="modalTambahKeranjang" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="modalTambahKeranjangLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content rounded-0">
            <div class="modal-header border-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="text-center">
                    <i class="bi bi-check-circle text-success lh-1" style="font-size: 4rem;"></i>
                    <br>
                    <span class="fs-2 text-success">Berhasil Ditambahkan!</span>
                    <br>
                    <span>Produk berhasil di tambahkan ke dalam keranjang.</span>
                </p>
            </div>
            <div class="modal-footer justify-content-center border-0">
                <button type="button" class="btn btn-lg w-100 btn-outline-success rounded-0" data-bs-dismiss="modal">Lanjutkan
                    Berbelanja</button>
            </div>
        </div>
    </div>
</div>
`)