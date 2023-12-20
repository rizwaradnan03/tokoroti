<?php

class Model_kategori extends CI_Model
{
	public function data_bread()
	{
		return $this->db->get_where('tb_barang',array('kategori' => 'bread'));
	}

	public function data_cake()
	{
		return $this->db->get_where('tb_barang',array('kategori' => 'cake'));
	}

	public function data_pastry()
	{
		return $this->db->get_where('tb_barang',array('kategori' => 'pastry'));
	}
	

	public function data_other()
	{
		return $this->db->get_where('tb_barang',array('kategori' => 'other'));
	}


	// Add this method to your model
	public function search_barang($keyword)
	{
		$this->db->like('kategori', $keyword);
    // Add more conditions if needed

		$query = $this->db->get('tb_barang');

		return $query->result();
	}

	
}