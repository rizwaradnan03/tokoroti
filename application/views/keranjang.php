<div class="container-fluid">
	<h4>Keranjang Belanja</h4>

	<table class="table table-bordered table-striped table-hover">
		<thead id="thead">
			<tr align="center">
				<th>NO</th>
				<th>Nama Produk</th>
				<th>Jumlah</th>
				<th>Harga</th>
				<th>Total</th>
				<th>Aksi</th>
			</tr>
		</thead>

		<tbody id="tbody">
			<?php
			$no = 1; // Inisialisasi $no dengan 1
			foreach ($keranjang as $data) : ?>
				<tr align="center">
					<td><?= $no++ ?></td>
					<td><?= $data->nama_brg ?></td>
					<td><?= $data->jumlah ?></td>
					<td align="right">Rp. <?= number_format($data->harga, 0, ',', '.') ?></td>
					<td align="right">Rp. <?= number_format($data->harga * $data->jumlah, 0, ',', '.') ?></td>
					<td>
						<button class="btn btn-success tambah-jumlah" id="<?= $data->id ?>">+</button>
						<button class="btn btn-danger kurang-jumlah" id="<?= $data->id ?>">-</button>
					</td>
				</tr>
			<?php endforeach; ?>

			<tr>
				<td colspan="5"></td>
				<td align="right">Rp. <?= number_format($total, 0, ',', '.') ?></td>
			</tr>
		</tbody>
	</table>

	<div align="right">
		<a href="<?= base_url('dashboard/halaman_tambah_keranjang') ?>">
			<div class="btn btn-sm btn-success">Tambah Keranjang</div>
		</a>
		<a href="<?= base_url('dashboard/lanjutkan_belanja/') ?>">
			<div class="btn btn-sm btn-primary">Lanjutkan Belanja</div>
		</a>
		<a href="<?= base_url('dashboard/pembayaran') ?>">
			<div class="btn btn-sm btn-warning">Pembayaran</div>
		</a>
	</div>

</div>
<script>
	$('.tambah-jumlah').on("click", function() {
		let id = $(this).attr('id')

		$.ajax({
			url: '/tokoroti/dashboard/tambah_jumlah',
			data: {
				id: id
			},
			type: "GET"
		}).then((result) => {
			let data = JSON.parse(result)

			if (data.status == "valid") {
				Swal.fire({
					title: "Berhasil Menambahkan Jumlah Pesanan",
					text: "Selamat Anda Berhasil Menambahkan Jumlah Pesanan!",
					icon: "success"
				});
			}else{
				Swal.fire({
					title: "Gagal Menambahkan Jumlah Pesanan",
					text: "Maaf Anda Gagal Menambahkan Jumlah Pesanan!",
					icon: "error"
				});
			}

			setTimeout(() => {
				location.reload()
			}, 2000)
		})
	})
	$('.kurang-jumlah').on("click", function() {
		let id = $(this).attr('id')

		$.ajax({
			url: '/tokoroti/dashboard/kurang_jumlah',
			data: {
				id: id
			},
			type: "GET"
		}).then((result) => {
			let data = JSON.parse(result)

			if (data.deleted == "false") {
				Swal.fire({
					title: "Berhasil Mengurangkan Data Pesanan",
					text: "Selamat Anda Berhasil Mengurangkan Data Pesanan!",
					icon: "success"
				});
			}else{
				Swal.fire({
					title: "Berhasil Menghapus Data Pesanan",
					text: "Selamat Anda Berhasil Menghapus Data Pesanan!",
					icon: "succes"
				});
			}

			setTimeout(() => {
				location.reload()
			}, 2000)
		})
	})
</script>
