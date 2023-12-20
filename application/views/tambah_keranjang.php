<div class="container-fluid">
    <div class="card mx-auto" style="width: 70%;">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label>Nama</label>
                    <input type="text" class="form-control" placeholder="Masukkan Nama" required>
                </div>
                <div class="form-group">
                    <label>Alamat</label>
                    <textarea name="alamat" class="form-control" placeholder="Masukkan Alamat" required></textarea>
                </div>
                <div class="form-group">
                    <label>Barang</label>
                    <select name="id_brg" class="form-control" id="select2" required>
                        <option value="" selected disabled>--Pilih Barang--</option>
                        <?php foreach($data_barang as $data) : ?>
                            <option value="<?php echo $data->id_brg ?>"><?php echo $data->nama_brg ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>