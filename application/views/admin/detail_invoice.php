<div class="container-fluid">
	<h4>Detail Pesanan <div class="btn btn-sm btn-success">No. Invoice : <?php echo $invoice->id ?></div> </h4>

	<table class="table table-bordered table-hover table-striped">
		<tr align="center">
			<th>NO</th>
			<th>NAMA PRODUK</th>
			<th>JUMLAH PESANAN</th>
			<th>HARGA SATUAN</th>
			<th>TOTAL</th>
		</tr>

		<?php
		$total = 0;
		if (is_array($pesanan) && !empty($pesanan)) {
			foreach ($pesanan as $index => $psn) :
				$subtotal = $psn->jumlah * $psn->harga;
				$total += $subtotal;
				?>
				<tr align="center">
					<td><?php echo $index + 1 ?></td>
					<td><?php echo $psn->nama_brg ?></td>
					<td><?php echo $psn->jumlah ?></td>
					<td align="right">Rp. <?php echo number_format($psn->harga, 0, ',', '.') ?></td>
					<td align="right">Rp. <?php echo number_format($subtotal, 0, ',', '.') ?></td>
				</tr>
				<?php
			endforeach;
		} else {
            // If there is no data, display a message in a single row
			echo '<tr><td colspan="5">Tidak ada data yang tersedia</td></tr>';
		}
		?>

		<tr>
			<td colspan="4" align="right">Grand Total</td>
			<td align="right">Rp. <?php echo number_format($total, 0, ',', '.') ?></td>
		</tr>
	</table>

	<a href="<?php echo base_url('admin/invoice/index') ?>" class="btn btn-sm btn-primary">Kembali</a>
</div>
