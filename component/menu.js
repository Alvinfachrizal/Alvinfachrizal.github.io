document.write(`
	<nav id="mainMenu" class="bg-light sticky-top border-bottom border-secondary">

	    <div class="overflow-x-auto">
	        <ul id="mainMenuBar" class="nav text-uppercase flex-nowrap text-nowrap justify-content-sm-center py-1 py-lg-0">
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseProduk" id="navProduk" href="#">
	                    <h4 class="lh-reset fs-reset mb-0">produk</h4>
	                </a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseMesin" id="navMesin" href="#">
	                    <h4 class="lh-reset fs-reset mb-0">mesin & peralatan</h4>
	                </a>
	            </li>
	            <li class="nav-item">
	                <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePromo" id="navPromo" href="#">
	                    <h4 class="lh-reset fs-reset mb-0">promo</h4>
	                </a>
	            </li>
	        </ul>
	    </div>

	    <div class="container">

	    	<!-- Collapse Produk -->
	        <div class="collapse fade" id="collapseProduk" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Products</h5>
	                <hr class="opacity-50">
	                <div class="row gx-lg-5">
	                    <div class="col col-12 col-lg-auto">
	                        <ul id="sidemenu-product" class="nav flex-column text-capitalize" style="width: 100%; min-width: calc(175px + 1vw);">
	                            <li class="nav-item">
	                                <a class="nav-link px-0 active" data-bs-target="#tabSupresso" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">supresso</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabBalicafe" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">BaliCafé</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabUcafe" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">UCAFÉ</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabRS" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">rasa sayang</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabTB" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">tugu buaya</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabUE" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">uang emas</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabHC" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">hao cafe</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabBrochoco" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">BROCHOCO</h2>
	                                </a>
	                            </li>
	                            <li class="nav-item">
	                                <a class="nav-link px-0" data-bs-target="#tabJaheku" href="brand.html">
	                                    <h2 class="fs-reset lh-1 mb-0">jaheku</h2>
	                                </a>
	                            </li>
	                        </ul>
	                    </div>
	                    <div class="col col-auto d-none d-lg-block"><div class="h-100 vr" style="background-color: rgba(0,0,0,.75);"></div></div>
	                    <div class="col col-12 col-lg d-none d-lg-block">
	                        <div class="tab-content">

	                            <div class="tab-pane fade show active" id="tabSupresso">
	                            	<div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logosupresso.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Dengan biji-biji kopi yang berasal dari timur hingga barat Indonesia, koleksi kopi single-origin Supresso menghasilkan profil rasa yang premium, mewah sekaligus unik. Dengan sepenuh hati, kami fokus menyajikan kopi kualitas tinggi untuk penikmat kopi di seluruh dunia dalam bentuk biji, bubuk, drip, dan kapsul. Nikmati pengalaman kopi Indonesia dalam kualitas dan kemurniannya, bersama Supresso. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/supresso.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabBalicafe">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logobalicafe.png" width="auto" height="100" class="mb-4">
			                            	<p>
			                            		Diracik dari kopi Bali asli, nikmati hasil kreasi Balicafé kami, dan menyatulah dengan tradisi kopi pulau Bali yang magis.
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/balicafe.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabUcafe">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logoucafe.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Dengan biji-biji kopi yang berasal dari timur hingga barat Indonesia, koleksi kopi single-origin Supresso menghasilkan profil rasa yang premium, mewah sekaligus unik. Dengan sepenuh hati, kami fokus menyajikan kopi kualitas tinggi untuk penikmat kopi di seluruh dunia dalam bentuk biji, bubuk, drip, dan kapsul. Nikmati pengalaman kopi Indonesia dalam kualitas dan kemurniannya, bersama Supresso. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/ucafe.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabRS">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logors.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Rasa sayang eh, Rasa sayang sayang eh ~ Diracik pada 1984 dengan rasa dan aroma nostalgia, Rasa sayang membawa penghormatan bagi kopi di masa lalu, sekaligus memupuk rasa nostalgia yang semakin hangat dengan teknik presisi yang lebih baru.
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/rasa_sayang.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabTB">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logotb.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Bercita rasa kuat serta tekstur tegas. Dikembangkan sejak 1977, Tugu Buaya memiliki rasa yang unik dengan karakter kopi yang diterima semua orang. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/tugu_buaya.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabUE">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logoue.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Dibuat dari biji kopi pilihan, cobalah kopi asli dengan paduan metode pengolahan tradisional dan modern ini. Dari kreasi kopi hitam yang sesungguhnya, temukan nuansa kontemporer yang tiada duanya. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/uang_emas.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabHC">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logohao.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Dibuat dari biji kopi pilihan, cobalah kopi asli dengan paduan metode pengolahan tradisional dan modern ini. Dari kreasi kopi hitam yang sesungguhnya, temukan nuansa kontemporer yang tiada duanya. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/haocafe.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabBrochoco">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logobro.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Mau minuman cokelat dengan berbagai rasa pilihan? BROCHOCO jawabannya! Isi hari-harimu dengan BROCHOCO, dengan rasa Original juga Choco Banana. Nikmati beragam rasa manisnya cokelat dan lembutnya krim, berpadu seimbang dalam cita rasa yang menggoda. Favorit semua kalangan dan selalu jadi pilihan, dengan berbagai kreasi penyajian yang lezat. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/brochoco.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                            <div class="tab-pane fade" id="tabJaheku">
	                                <div class="hstack gap-5 align-items-start">
		                            	<div>
			                            	<img src="assets/img/logo/logojaheku.png" width="auto" height="100" class="mb-4">
			                            	<p>
				                            	Jaheku / definisi / “Jahe kesukaanku” dalam bahasa Indonesia. Merupakan bahan pangan yang familiar di banyak negara, Jaheku menyajikan segala manfaat dan kesegaran jahe kepada konsumen dalam bentuk minuman, dengan kombinasi rasa Jaheku Gula Aren, dan juga Jaheku Madu, memantapkan berbagai manfaat serta rasa unik jahe yang selalu disukai. 
			                            	</p>
		                            	</div>
		                            	<img src="assets/img/navbar/jaheku.jpg" width="288" height="auto">
	                            	</div>
	                            </div>

	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>

	        <!-- Collapse Mesin & Equipment -->
	        <div class="collapse fade" id="collapseMesin" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Machine & Equipment</h5>
	                <hr class="opacity-50">
	                <p>
	                    Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Iusto officiis omnis earum officia magnam a, magni recusandae sint cum, perspiciatis deleniti, voluptates commodi cupiditate qui debitis rem soluta, aspernatur molestiae!
	                </p>
	            </div>
	        </div>

	        <!-- Collapse Promo -->
	        <div class="collapse fade" id="collapsePromo" data-bs-parent="#mainMenu">
	            <div class="pt-3 pb-4">
	                <h5 class="fs-3 fw-medium">Promo</h5>
	                <hr class="opacity-50">
	                <div class="swiper swiper-promo" id="swiperPromo">
	                	<div class="swiper-wrapper promo-list">

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS Gelas Tangkai</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced from the East to the West of Indonesia
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS Gelas Tangkai</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced from the East to the West of Indonesia
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS Gelas Tangkai</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced from the East to the West of Indonesia
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS Gelas Tangkai</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced from the East to the West of Indonesia
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                		<div class="swiper-slide">
	                			<a class="text-reset text-decoration-none" href="#">
		                			<figure class="figure w-100">
		                				<div class="figure-img ratio ratio-16x9 bg-secondary rounded-0 overflow-hidden mb-3">
		                					<div class="top-50 start-50 translate-middle d-flex justify-content-center align-items-center z-3">
									        	<div class="spinner-border text-dark" role="status"></div>
								        	</div>
								        	<!--
		                					<img src="assets/img/product/promo.png" class="z-2 h-auto top-50 start-50 translate-middle" alt="...">
		                					-->
		                					<img src="assets/img/product/no_images.svg" class="z-1" alt="...">
		                				</div>
		                				<figcaption class="figure-caption fs-5 fw-medium lh-1 mb-2">GRATIS Gelas Tangkai</figcaption>
		                				<figcaption class="figure-caption small">
			                				With coffee beans sourced from the East to the West of Indonesia
		                				</figcaption>
		                			</figure>
	                			</a>
	                		</div>

	                	</div>
	                	<div class="swiper-button swiper-button-prev text-reset"></div>
	                    <div class="swiper-button swiper-button-next text-reset"></div>
	                </div>
	            </div>
	        </div>

	    </div>

	</nav>
	`)