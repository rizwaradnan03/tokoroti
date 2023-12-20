<?php

class Model_pesanan extends CI_Model
{

    // Find All Pesanan with Relasi to Invoice and Barang
    public function get_all_pesanan_with_relation()
    {
        $this->db->select('tb_pesanan.*, tb_invoice.nama as nama_voice, tb_invoice.alamat as alamat');
        $this->db->from('tb_pesanan');
        $this->db->join('tb_invoice', 'tb_pesanan.id_invoice = tb_invoice.id', 'inner');
        $this->db->join('tb_barang', 'tb_pesanan.id_brg = tb_barang.id_brg', 'inner');

        return $this->db->get()->result();
    }

    // Find All
    public function get_all_pesanan()
    {
        return $this->db->get('tb_pesanan')->result();
    }

    // Find One Pesanan With Relasi
    public function get_pesanan_by_id_with_relation($id)
    {
        $this->db->select('tb_pesanan.*, tb_invoice.nama as nama_invoice, tb_invoice.alamat as alamat');
        $this->db->from('tb_pesanan');
        $this->db->join('tb_invoice', 'tb_pesanan.id_invoice = tb_invoice.id_invoice', 'inner');
        $this->db->join('tb_barang', 'tb_pesanan.id_barang = tb_barang.id_barang', 'inner');

        $this->db->where('tb_pesanan.id', $id);

        return $this->db->get()->result();
    }


    // Find One
    public function get_pesanan_by_id($id)
    {
        return $this->db->get_where('tb_pesanan', array('id_pesanan' => $id))->row();
    }

    // Create
    public function create_pesanan($data)
    {
        return $this->db->insert('tb_pesanan', $data);
    }

    // Update
    public function update_pesanan($id, $data)
    {
        $this->db->where('id', $id);
        return $this->db->update('tb_pesanan', $data);
    }

    // Delete
    public function delete_pesanan($id)
    {
        $this->db->where('id', $id);
        return $this->db->delete('tb_pesanan');
    }

    // Add this method to your model
    public function search_pesanan($keyword)
    {
        $this->db->like('kategori', $keyword);
        // Add more conditions if needed

        $query = $this->db->get('tb_pesanan');

        return $query->result();
    }
}
