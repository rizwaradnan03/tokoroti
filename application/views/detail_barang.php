<div class="container-fluid">
	<div class="card" style="width: 60rem;">
		<h5 class="card-title" align="center">Detail Produk</h5>
		<div class="card-body">

			<?php foreach ($barang as $brg): ?>
				<div class="row">
					<div class="col-md-4">
						<img src="<?php echo base_url().'/uploads/'.$brg->gambar ?>" class="card-img-top">
					</div>
					<div class="col-md-8">
						<table class="table">
							<tr>
								<td>Nama Produk</td>
								<td><strong><?php echo $brg->nama_brg ?></strong></td>
							</tr>

							<tr>
								<td>Keterangan</td>
								<td><strong><?php echo $brg->keterangan ?></strong></td>
							</tr>

							<tr>
								<td>Stok</td>
								<td><strong><?php echo $brg->stok ?></strong></td>
							</tr>

							<tr>
								<td>Harga</td>
								<td><strong><div class="btn btn-sm btn-success">Rp. <?php echo number_format($brg->harga, 0, ',', '.') ?> </div></strong></td>
							</tr>
						</table>

						<a href="<?php echo site_url('dashboard/tambah_ke_keranjang/') . $brg->id_brg ?>" class="btn btn-sm btn-primary">Tambah Ke Keranjang</a>

						<a href="<?php echo base_url('welcome'); ?>" class="btn btn-sm btn-danger">Kembali</a>
					</div>
				</div>
			<?php endforeach; ?>

		</div>
	</div>
</div>
