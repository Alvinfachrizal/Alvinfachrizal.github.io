document.write(`
<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center pt-3">
        <li class="page-item disabled">
            <a class="page-link border-0 rounded-0">
                <i class="bi bi-chevron-double-left d-lg-none"></i>
                <span class="d-none d-lg-inline">Sebelumnya</span>
            </a>
        </li>
        <li class="page-item active">
            <button class="page-link border-0">1</button>
        </li>
        <li class="page-item">
            <button class="page-link border-0">2</button>
        </li>
        <li class="page-item">
            <button class="page-link border-0">3</button>
        </li>
        <li class="page-item">
            <a class="page-link border-0 rounded-0" href="#">
                <i class="bi bi-chevron-double-right d-lg-none"></i>
                <span class="d-none d-lg-inline">Selanjutnya</span>
            </a>
        </li>
    </ul>
</nav>
`)