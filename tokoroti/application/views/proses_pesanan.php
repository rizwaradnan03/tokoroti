





<!-- application/views/proses_pesanan.php -->

<div class="container">
	<h2>Struk Pesanan</h2>

	<?php if ($is_processed): ?>

		<h5>Selamat pembelian anda sudah berhasil!</h5>

    <table class="table table-bordered table-striped table-hover">
        <thead>
            <tr align="center">
                <th>NO</th>
                <th>Nama Produk</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Total</th>
                <th>Tanggal Pembelian</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $no = 1; // Inisialisasi $no dengan 1
            foreach ($this->cart->contents() as $items) : ?>
                <tr align="center">
                    <td><?= $no++ ?></td>
                    <td><?= $items['name'] ?></td>
                    <td><?= $items['qty'] ?></td>
                    <td align="right">Rp. <?= number_format($items['price'], 0, ',', '.') ?></td>
                    <td align="right">Rp. <?= number_format($items['subtotal'], 0, ',', '.') ?></td>
                    <td><?php echo date('Y-m-d / h:i:sa');?></td>
                </tr>
            <?php endforeach; ?>

            <tr>
                <td colspan="4"></td>
                <td align="right">Rp. <?= number_format($this->cart->total(), 0, ',', '.') ?></td>
            </tr>
        </tbody>
    </table>

    <div align="right">
        <a href="<?= base_url('dashboard/kembali') ?>"><div class="btn btn-sm btn-success">kembali</div></a>
    </div>
		

	<?php else: ?>
		<p>Maaf, Pesanan Anda Gagal Diproses</p>
	<?php endif; ?>

</div>

