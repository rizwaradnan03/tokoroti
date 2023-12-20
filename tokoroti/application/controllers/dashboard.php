<?php

class Dashboard extends CI_Controller{

	public function __construct(){
		parent::__construct();

		if($this->session->userdata('role_id') != '2'){
			$this->session->set_flashdata('pesan','<div class="alert alert-danger alert-dismissible fade show" role="alert">
				Anda Belum Login!
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
				</div>');
			redirect('auth/login');
		}
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

	public function detail_keranjang()
	{
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('keranjang');
		$this->load->view('templates/footer');
	}

	public function hapus_keranjang()
	{
		$this->cart->destroy();
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
        $this->load->view('proses_pesanan', $data); // Teruskan $data ke view
        $this->load->view('templates/footer');
    } else {
    	echo "Maaf, Pesanan Anda Gagal Diproses";
    }
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