<?php
class Kategori extends CI_Controller
{
	public function bread()
	{
        // Memuat model
		$this->load->model('model_kategori');

        // Mengambil data dari model
		$data['bread'] = $this->model_kategori->data_bread()->result();

        // Memuat views
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('bread', $data);
		$this->load->view('templates/footer');
	}

	public function cake()
	{
        // Memuat model
		$this->load->model('model_kategori');

        // Mengambil data dari model
		$data['cake'] = $this->model_kategori->data_cake()->result();

        // Memuat views
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('cake', $data);
		$this->load->view('templates/footer');
	}

	public function pastry()
	{
        // Memuat model
		$this->load->model('model_kategori');

        // Mengambil data dari model
		$data['pastry'] = $this->model_kategori->data_pastry()->result();

        // Memuat views
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('pastry', $data);
		$this->load->view('templates/footer');
	}

	public function other()
	{
        // Memuat model
		$this->load->model('model_kategori');

        // Mengambil data dari model
		$data['other'] = $this->model_kategori->data_other()->result();

        // Memuat views
		$this->load->view('templates/header');
		$this->load->view('templates/sidebar');
		$this->load->view('other', $data);
		$this->load->view('templates/footer');
	}

	
}
