<div class="container-fluid">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="btn btn-sm btn-success">
                <?php 
                $grand_total = 0;
                if ($keranjang = $this->cart->contents()) {
                    foreach ($keranjang as $item) {
                        $grand_total = $grand_total + $item['subtotal'];
                    }
                    echo "<h5>Total Belanja Anda : Rp. " . number_format($grand_total, 0, ',', '.');

                    ?>
                </div><br><br>

                <h3>Input Alamat Pengiriman dan Pembayaran</h3>

                <form method="post" action="<?php echo base_url() ?>dashboard/proses_pesanan">
                   <div class="form-group">
                      <label>Nama Lengkap</label>
                      <input type="text" name="nama" placeholder="Nama Lengkap Anda" class="form-control">
                  </div>

                  <div class="form-group">
                      <label>Alamat Lengkap</label>
                      <input type="text" name="alamat" placeholder="Alamat Lengkap Anda" class="form-control">
                  </div>

                  <div class="form-group">
                      <label>No. Telepon</label>
                      <input type="text" name="no_telp" placeholder="Nomor Telepon Anda" class="form-control">
                  </div>

                  <div class="form-group">
                      <label>Jasa Pengiriman</label>
                      <select class="form-control">
                         <option>GOJEK</option>
                         <option>GRAB</option>
                     </select>
                 </div>

                 <div class="form-group">
                  <label>Pilih Transaksi</label>
                  <select class="form-control">
                     <option>BCA - XXXXXX</option>
                     <option>MANDIRI - XXXXX</option>
                 </select>
             </div>

             <button type="submit" class="btn btn-sm btn-primary mb-3">Pesan</button>
             <a href="<?php echo base_url('dashboard/detail_keranjang') ?>" class="btn btn-sm btn-danger mb-3">Kembali</a>

         </form>

         <?php 
     } else
     {
        echo "<h5> Keranjang Belanja Anda Masih Kosong </h5>";
    }
    ?>
</div>
<div class="col-md-2"></div>
</div>
</div>
