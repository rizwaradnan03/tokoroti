<?php

class Data_barang extends CI_Controller{

	public function __construct(){
		parent::__construct();

		if($this->session->userdata('role_id') != '1'){
			$this->session->set_flashdata('pesan','<div class="alert alert-danger alert-dismissible fade show" role="alert">
				Anda Belum Login!
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
				</div>');
			redirect('auth/login');
		}
	}

	public function index()
	{
		$data['barang'] = $this->model_barang->tampil_data()->result();
		$this->load->view('templates_admin/header');
		$this->load->view('templates_admin/sidebar');
		$this->load->view('admin/data_barang', $data);
		$this->load->view('templates_admin/footer');
	}

	public function tambah_aksi()
	{
		$nama_brg       = $this->input->post('nama_brg');
		$keterangan     = $this->input->post('keterangan');
		$kategori       = $this->input->post('kategori');
		$harga          = $this->input->post('harga');
		$stok           = $this->input->post('stok');
		$gambar         = $_FILES['gambar']['name'];

    	// Jika gambar tidak diunggah, tetapkan gambar default
		if (empty($gambar)) {
			$gambar = 'default_image.jpg';
		} else {
        	// Konfigurasi untuk proses upload gambar
			$config['upload_path']   = './uploads/';
			$config['allowed_types'] = 'jpg|jpeg|png|gif';

        	// Memuat library upload dengan konfigurasi
			$this->load->library('upload', $config);

	        // Memeriksa apakah proses upload berhasil
			if (!$this->upload->do_upload('gambar')) {
        	    // Tampilkan pesan kesalahan jika upload gagal
				echo "Gambar Gagal diupload: " . $this->upload->display_errors();
			} else {
            	// Ambil nama file gambar yang diupload
				$gambar = $this->upload->data('file_name');
			}
		}

    	// Data untuk ditambahkan ke tabel 'tb_barang'
		$data = array(
			'nama_brg'      => $nama_brg,
			'keterangan'    => $keterangan,
			'kategori'      => $kategori,
			'harga'         => $harga,
			'stok'          => $stok,
			'gambar'        => $gambar
		);

    	// Panggil metode tambah_aksi dari model_barang untuk menambahkan data
		$this->model_barang->tambah_aksi($data, 'tb_barang');

    	// Redirect ke halaman data_barang setelah penambahan berhasil
		redirect('admin/data_barang/index');
	}

	public function edit($id)
	{
		$where = array('id_brg' =>$id);
		$data['barang'] = $this->model_barang->edit_barang($where, 'tb_barang')->result();
		$this->load->view('templates_admin/header');
		$this->load->view('templates_admin/sidebar');
		$this->load->view('admin/edit_barang', $data);
		$this->load->view('templates_admin/footer');
	}

	public function update()
	{
		$id         = $this->input->post('id_brg');
		$nama_brg   = $this->input->post('nama_brg');
		$keterangan = $this->input->post('keterangan');
		$kategori   = $this->input->post('kategori');
		$harga      = $this->input->post('harga');
		$stok       = $this->input->post('stok');

		$data = array(
			'nama_brg'      => $nama_brg,
			'keterangan'    => $keterangan,
			'kategori'      => $kategori,
			'harga'         => $harga,
			'stok'          => $stok
		);

		$where = array(
			'id_brg' => $id
		);

		$this->model_barang->update_data($where, $data, 'tb_barang');
		redirect('admin/data_barang/index');
	}

	public function hapus($id)
	{
		$where = array('id_brg' => $id);
		$this->model_barang->hapus_data($where, 'tb_barang');
		redirect('admin/data_barang/index');
	}

	public function search_plus() {
		$keyword = $this->input->post('search_plus');

		if (!empty($keyword)) {
            // Jika terdapat kata kunci, lakukan pencarian
			$where = "nama_brg LIKE '%$keyword%'";
			$data['barang'] = $this->model_barang->search_plus($where, 'tb_barang')->result();
		} else {
            // Jika tidak ada kata kunci, tampilkan semua data
			$data['barang'] = $this->model_barang->get_data('tb_barang')->result();
		}

		$this->load->view('templates_admin/header');
		$this->load->view('templates_admin/sidebar');
		$this->load->view('admin/search_plus', $data);
		$this->load->view('templates_admin/footer');
	}

}	