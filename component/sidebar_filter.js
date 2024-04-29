document.write(` 
	<!-- offcanvas sidebar (filter & urutkan) -->
	<div class="offcanvas-lg offcanvas-start text-reset" data-bs-backdrop="static" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title opacity-50" id="offcanvasFilterLabel">
				<i class="bi bi-funnel"></i> Saring Produk
			</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"></button>
		</div>
		<div class="offcanvas-body flex-lg-column">

			<!-- accordion menu (filter on mobile) -->
			<div class="accordion accordion-flush text-reset mb-lg-5" id="accordionFilter">
				<div class="accordion-item text-reset">
					<h5 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-kategori" aria-expanded="false" aria-controls="accordion-collapse-kategori">
							KATEGORI
						</button>
					</h5>
					<div id="accordion-collapse-kategori" class="accordion-collapse collapse show" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div>
								<div class="form-check">
									<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriKopi">
									<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriKopi">
										kopi
									</label>
								</div>
								<div class="ps-4 pb-2">
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="kopiBubuk">
										<label class="form-check-label btn w-100 text-start rounded-0" for="kopiBubuk">
											<h3>kopi bubuk</h3>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="kopi2in1">
										<label class="form-check-label btn w-100 text-start rounded-0" for="kopi2in1">
											<h3>kopi 2 in 1</h3>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="kopi3in1">
										<label class="form-check-label btn w-100 text-start rounded-0" for="kopi3in1">
											<h3>kopi 3 in 1</h3>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="kopiInstan">
										<label class="form-check-label btn w-100 text-start rounded-0" for="kopiInstan">
											<h3>kopi instan</h3>
										</label>
									</div>
								</div>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriMesin">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriMesin">
									<h3>mesin</h3>
								</label>
							</div>
							<div>
								<div class="form-check">
									<input class="form-check-input rounded-circle" type="checkbox" value="" id="kategoriMinuman">
									<label class="form-check-label btn w-100 text-start rounded-0" for="kategoriMinuman">
										minuman
									</label>
								</div>
								<div class="ps-4">
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="minumanJahe">
										<label class="form-check-label btn w-100 text-start rounded-0" for="minumanJahe">
											<h3>jahe</h3>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input rounded-circle" type="checkbox" value="" id="minumanCokelat">
										<label class="form-check-label btn w-100 text-start rounded-0" for="minumanCokelat">
											<h3>cokelat</h3>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h5 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-merek" aria-expanded="false" aria-controls="accordion-collapse-merek">
							MEREK
						</button>
					</h5>
					<div id="accordion-collapse-merek" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekBalicafe">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekBalicafe">
									<h2>BaliCafe</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekUcafe">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekUcafe">
									<h2>UCAFÉ</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekRS">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekRS">
									<h2>rasa sayang</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekTB">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekTB">
									<h2>tugu buaya</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekUE">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekUE">
									<h2>uang emas</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekHC">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekHC">
									<h2>hao cafe</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekBrochoco">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekBrochoco">
									<h2>BROCHOCO</h2>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="merekJaheku">
								<label class="form-check-label btn w-100 text-start rounded-0" for="merekJaheku">
									<h2>jaheku</h2>
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h5 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-kemasan" aria-expanded="false" aria-controls="accordion-collapse-kemasan">
							KEMASAN
						</button>
					</h5>
					<div id="accordion-collapse-kemasan" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanBag">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanBag">
									<h3>Bag</h3>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanBox">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanBox">
									<h3>Box</h3>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanRenceng">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanRenceng">
									<h3>Renceng</h3>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanSachet">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanSachet">
									<h3>Sachet</h3>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input rounded-circle" type="checkbox" value="" id="kemasanTupper">
								<label class="form-check-label btn w-100 text-start rounded-0" for="kemasanTupper">
									<h3>Tupper</h3>
								</label>
							</div>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset d-none d-lg-block">
					<h5 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-urutkan" aria-expanded="false" aria-controls="accordion-collapse-urutkan">
							URUTKAN
						</button>
					</h5>
					<div id="accordion-collapse-urutkan" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<script type="text/javascript" src="component/sort_product.js"></script>
						</div>
					</div>
				</div>

				<div class="accordion-item text-reset">
					<h5 class="accordion-header">
						<button class="accordion-button text-reset px-0 fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-harga" aria-expanded="false" aria-controls="accordion-collapse-harga">
							HARGA
						</button>
					</h5>
					<div id="accordion-collapse-harga" class="accordion-collapse collapse" data-bs-parent="#accordionFilter">
						<div class="accordion-body px-0">
							<p class="d-flex justify-content-between align-items-center flex-nowrap column-gap-3 text-nowrap">
								<span>Rp 0,-</span>
								<span>Rp 123.000,-</span>
							</p>
							<div style="padding: 0 12px;">
								<div id="range"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="d-none d-lg-flex flex-column row-gap-1">
				<script type="text/javascript" src="component/trigger_filter.js"></script>
			</div>
			
		</div>
		<div class="offcanvas-header column-gap-2">
			<script type="text/javascript" src="component/trigger_filter.js"></script>
		</div>
	</div>

	<!-- offcanvas sidebar urutkan -->
	<div class="offcanvas-lg offcanvas-end d-lg-none" data-bs-backdrop="static" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSort" aria-labelledby="offcanvasSortLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title opacity-50" id="offcanvasSortLabel">
				<i class="bi bi-sort-down"></i> Urutkan Produk
			</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSort"></button>
		</div>
		<div class="offcanvas-body">
			<div>
				<script type="text/javascript" src="component/sort_product.js"></script>
			</div>
		</div>
		<div class="offcanvas-header column-gap-2">
			<script type="text/javascript" src="component/trigger_filter.js"></script>
		</div>
	</div> 
	`)