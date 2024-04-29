document.write(`
	<nav class="navbar bg-body border-bottom" style="padding-top: .75rem; padding-bottom: .75rem;">
	    <div class="container">
	        <a class="navbar-brand d-flex align-items-center position-relative" href="index.html">
	            <img src="assets/img/logotype.svg" width="auto" height="20" class="d-lg-none">
	            <img src="assets/img/logotype.svg" width="auto" height="30" class="d-none d-lg-block">
	            <h1 class="position-absolute top-50 start-50 translate-middle fs-3 opacity-0">indracostore</h1>
	        </a>
	        <ul class="list-unstyled m-0 ms-auto d-flex align-items-center">
	            <li class="pe-lg-2" data-bs-toggle="modal" data-bs-target="#modalSearching">
	                <button class="navbar-toggler rounded-0 border-0 d-lg-none">
	                    <i class="bi bi-search"></i>
	                </button>
	                <div class="input-group border bg-white d-none d-lg-flex" style="max-width: 230px;">
	                    <input type="search" class="form-control rounded-0 border-0 bg-transparent" name="" placeholder="Cari Produk">
	                    <button class="btn rounded-0">
	                        <i class="bi bi-search"></i>
	                    </button>
	                </div>
	            </li>
	            <li>
	                <a class="navbar-toggler rounded-0 border-0" href="signin.html">
	                    <i class="bi bi-person-circle"></i>
	                </a>              
	            </li>
	            <li class="position-relative">
	                <a class="navbar-toggler rounded-0 border-0" href="cart.html">
	                    <i class="bi bi-bag"></i>
	                </a>
	                <span class="position-absolute translate-middle p-1 text-bg-danger border border-light rounded-pill lh-1 fw-medium text-center d-flex justify-content-center align-items-center" style="min-width: 23.6px; top: .25rem; left: calc(100% - .75rem); font-size: .875rem;">0</span>
	            </li>
	        </ul>
	    </div>
	</nav>
	`)