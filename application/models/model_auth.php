<?php

class Model_auth extends CI_Model
{
	public function cek_login()
	{
        $username = set_value('username'); // Menggunakan $this->input->post() untuk mendapatkan nilai dari form
        $password = set_value('password'); // Menggunakan $this->input->post() untuk mendapatkan nilai dari form

        $result = $this->db ->where('username', $username)
        ->where('password', $password)
        ->limit(1)
        ->get('tb_user');

        if ($result->num_rows() > 0) {
        	return $result->row();
        } else {
            return array(); // Mengembalikan false jika tidak ada hasil
        }
    }
}
