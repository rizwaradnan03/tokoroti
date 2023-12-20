<div class="container-fluid">
    <h4>Keranjang Belanja</h4>

    <table class="table table-bordered table-striped table-hover">
        <thead>
            <tr align="center">
                <th>NO</th>
                <th>Nama Produk</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Total</th>
                <th>Aksi</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $no = 1; // Inisialisasi $no dengan 1
            foreach ($keranjang as $data) : ?>
                <tr align="center">
                    <td><?= $no++ ?></td>
                    <td><?= $data->nama_brg ?></td>
                    <td><?= $data->jumlah ?></td>
                    <td align="right">Rp. <?= number_format($data->harga, 0, ',', '.') ?></td>
                    <td align="right">Rp. <?= number_format($data->harga * $data->jumlah, 0, ',', '.') ?></td>
                    <td><a href="<?php echo base_url() . 'dashboard/hapus_keranjang/' . $data->id ?>" class="btn btn-danger">Hapus Keranjang</a></td>
                </tr>
            <?php endforeach; ?>

            <tr>
                <td colspan="5"></td>
                <td align="right">Rp. <?= number_format($total, 0, ',', '.') ?></td>
            </tr>
        </tbody>
    </table>

    <div align="right">
        <a href="<?= base_url('dashboard/halaman_tambah_keranjang') ?>"><div class="btn btn-sm btn-success">Tambah Keranjang</div></a>
        <a href="<?= base_url('dashboard/lanjutkan_belanja/') ?>"><div class="btn btn-sm btn-primary">Lanjutkan Belanja</div></a>
        <a href="<?= base_url('dashboard/pembayaran') ?>"><div class="btn btn-sm btn-warning">Pembayaran</div></a>
    </div>
    
</div>
