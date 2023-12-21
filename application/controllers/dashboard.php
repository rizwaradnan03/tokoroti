<?php

class Dashboard extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();

		$this->load->model('model_pesanan');
		$this->load->model('model_barang');

		if ($this->session->userdata('role_id') != '2') {
			$this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show" role="alert">
				Anda Belum Login!
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
				</div>');
			redirect('auth/login');
		}
	}

	public function halaman_tambah_keranjang()
	{
		$data_barang = $this->model_barang->tampil_data();
		// echo "<pre>";
		// print_r($data_barang);die;
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('tambah_keranjang', array('data_barang' => $data_barang));
		$this->load->view('templates/footer');
	}

	public function tambah_ke_keranjang($id)
	{
		$barang = $this->model_barang->find($id);

		$data = array(
			'id'      => $barang->id_brg,
			'qty'     => 1,
			'price'   => $barang->harga,
			'name'    => $barang->nama_brg
		);

		$this->cart->insert($data);
		redirect('welcome');
	}

	public function tambah_ke_keranjang_($id)
	{

		$data = array(
			'qty'     => 1,
			'price'   => $barang->harga,
			'name'    => $barang->nama_brg
		);

		$barang = $this->model_pesanan->create($data);

		$this->cart->insert($data);
		redirect('welcome');
	}

	public function detail_keranjang()
	{
		$keranjang = $this->model_pesanan->get_all_pesanan_with_relation();

		$total = 0;
		for ($i = 0; $i < sizeof($keranjang); $i++) {
			$total += $keranjang[$i]->jumlah * $keranjang[$i]->harga;
		}

		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('templates/footer');
		$this->load->view('keranjang', array('keranjang' => $keranjang, 'total' => $total));
	}

	public function tambah_jumlah()
	{
		$id = $this->input->get('id');

		$get_pesanan = $this->model_pesanan->get_pesanan_by_id($id);
		$get_barang = $this->model_barang->find($get_pesanan->id_brg);

		if ($get_pesanan->jumlah <= $get_barang->stok) {

			$kurangin_stok_barang = (int)$get_barang->stok - 1;
			$this->model_barang->update_stok_barang($get_barang->id_brg, $kurangin_stok_barang);

			$tambahin_jumlah_pesanan = (int)$get_pesanan->jumlah + 1;
			$this->model_pesanan->update_jumlah_pesanan($get_pesanan->id, $tambahin_jumlah_pesanan);

			$response_data['status'] = 'valid';
		} else {
			$response_data['status'] = 'invalid';
		}

		$keranjang = $this->model_pesanan->get_all_pesanan_with_relation();

		$total = 0;
		for ($i = 0; $i < sizeof($keranjang); $i++) {
			$total += $keranjang[$i]->jumlah * $keranjang[$i]->harga;
		}

		$response_data['keranjang'] = $keranjang;
		$response_data['total'] = $total;
		$response_data['pesanan'] = $get_pesanan;
		$response_data['barang'] = $get_barang;

		echo json_encode($response_data);
	}

	public function kurang_jumlah()
	{
		$id = $this->input->get('id');

		$get_pesanan = $this->model_pesanan->get_pesanan_by_id($id);
		$get_barang = $this->model_barang->find($get_pesanan->id_brg);

		if ($get_pesanan->jumlah > 0) {

			$tambahin_stok_barang = (int)$get_barang->stok + 1;
			$this->model_barang->update_stok_barang($get_barang->id_brg, $tambahin_stok_barang);

			$kurangin_jumlah_pesanan = (int)$get_pesanan->jumlah - 1;
			$this->model_pesanan->update_jumlah_pesanan($get_pesanan->id, $kurangin_jumlah_pesanan);

			$response_data['deleted'] = 'false';
		} else {
			$this->model_pesanan->delete_pesanan($get_pesanan->id);
			$response_data['deleted'] = 'true';
		}

		$keranjang = $this->model_pesanan->get_all_pesanan_with_relation();

		$total = 0;
		for ($i = 0; $i < sizeof($keranjang); $i++) {
			$total += $keranjang[$i]->jumlah * $keranjang[$i]->harga;
		}

		$response_data['keranjang'] = $keranjang;
		$response_data['total'] = $total;
		$response_data['pesanan'] = $get_pesanan;
		$response_data['barang'] = $get_barang;

		echo json_encode($response_data);
	}

	public function hapus_keranjang($id)
	{
		$this->model_pesanan->delete_pesanan($id);
		redirect('welcome');
	}

	public function kembali()
	{
		$this->cart->destroy();
		redirect('welcome');
	}

	public function lanjutkan_belanja()
	{
		$barang = $this->model_barang->find($id);

		$data = array(
			'id'      => $barang->id_brg,
			'qty'     => 1,
			'price'   => $barang->harga,
			'name'    => $barang->nama_brg
		);

		$this->cart->insert($data);
		redirect('welcome');
	}

	public function pembayaran()
	{
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('pembayaran');
		$this->load->view('templates/footer');
	}

	// application/controllers/Dashboard.php

	public function proses_pesanan()
	{
		$is_processed = $this->model_invoice->index();
		if ($is_processed) {
			$data['is_processed'] = $is_processed; // Teruskan $is_processed ke view
			$this->load->view('templates/header');
			$this->load->view('templates/sidebar');
			$this->load->view('proses_pesanan', $data);
			$this->load->view('templates/footer');
		} else {
			echo "Maaf, Pesanan Anda Gagal Diproses";
		}
		$this->cart->destroy();
	}


	public function detail($id_brg)
	{
		$data['barang'] = $this->model_barang->detail_brg($id_brg);
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('detail_barang', $data);
		$this->load->view('templates/footer');
	}

	// Add this method to your Dashboard controller
	public function cari_barang()
	{
		$keyword = $this->input->get('keyword');

		// Load your model and perform the search
		$data['bread'] = $this->model_kategori->search_barang($keyword);

		// Load the view with the search results
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('cari_barang', $data);
		$this->load->view('templates/footer');
	}
}
