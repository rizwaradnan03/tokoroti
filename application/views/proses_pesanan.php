<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Fresh Bakery</title>
    <!-- Include your CSS stylesheets if needed -->
</head>
<body>

    <div class="container">
        <h2>Struk Pesanan</h2>

        <?php if ($is_processed): ?>

            <h5>Selamat, pembelian Anda sudah berhasil!</h5>

            <table class="table table-bordered table-striped table-hover">
                <thead>
                    <tr align="center">
                        <th>NO</th>
                        <th>Nama Produk</th>
                        <th>Jumlah</th>
                        <th>Harga</th>
                        <th>Tanggal Pembelian</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    <?php
                    $no = 1;
                    foreach ($this->cart->contents() as $items) : ?>
                        <tr align="center">
                            <td><?= $no++ ?></td>
                            <td><?= $items['name'] ?></td>
                            <td><?= $items['qty'] ?></td>
                            <td align="right">Rp. <?= number_format($items['price'], 0, ',', '.') ?></td>
                            <td><?= date('d-m-Y H:i:s') ?></td>
                            <td align="right">Rp. <?= number_format($items['subtotal'], 0, ',', '.') ?></td>
                        </tr>
                    <?php endforeach; ?>

                    <tr>
                        <td colspan="5" align="right">Grand Total</td>
                        <td align="right">Rp. <?= number_format($this->cart->total(), 0, ',', '.') ?></td>
                    </tr>
                </tbody>
            </table>

            <div align="right">
                <a href="<?= base_url('dashboard/kembali') ?>" class="btn btn-sm btn-success">Kembali</a>
            </div>

        <?php else: ?>
            <p>Maaf, pesanan Anda gagal diproses</p>
        <?php endif; ?>

    </div>

    <script>
        // Use the browser's print function when the page is loaded
        window.onload = function () {
            window.print();
        }
    </script>

</body>
</html>
