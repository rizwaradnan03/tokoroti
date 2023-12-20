<!-- Display the search results for each category -->
<div class="row text-center mt-4">
    <div class="col-md-3">
        <?php foreach ($bread as $brg) : ?>
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