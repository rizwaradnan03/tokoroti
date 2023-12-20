<div class="container-fluid">

    <div id="carouselExampleIndicators" class="carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="<?php echo base_url('assets/img/slider5.jpg'); ?>" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="<?php echo base_url('assets/img/slider3.jpg'); ?>" class="d-block w-100" alt="..."> <!-- Ganti dengan sumber gambar yang sesuai -->
            </div>
            <!-- Tambahkan carousel-item sesuai kebutuhan -->
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>


    <div class="row text-center mt-4">
        <?php foreach ($pastry as $brg) : ?>
            <div class="card ml-3 mb-3" style="width: 18rem;">
                <img src="<?php echo base_url('uploads/') . $brg->gambar ?>" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title mb-1"><?php echo $brg->nama_brg ?></h5>
                    <p class="card-text"><?php echo $brg->keterangan ?></p>
                    <span class="badge badge-pill badge-success mb-3">Rp. <?php echo number_format($brg->harga, 0, ',', '.') ?></span><br>
                    <a href="<?php echo base_url('dashboard/tambah_ke_keranjang/') . $brg->id_brg ?>" class="btn btn-sm btn-primary">Tambah Ke Keranjang</a>
                    <a href="<?php echo base_url('dashboard/detail/') . $brg->id_brg ?>" class="btn btn-sm btn-success">Detail</a>
                </div>
            </div>
        <?php endforeach; ?>
    </div>