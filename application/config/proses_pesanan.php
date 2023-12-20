<?
class Proses_pesanan extends CI_Controller {

    public function proses_pesanan() {
        // Kode yang sudah ada untuk memproses pesanan

        // Anggap Anda telah mengumpulkan detail yang diperlukan dalam $nama, $alamat, $no_telp, $jasa_pengiriman, $pilih_transaksi
        // Anggap juga $keranjang dan $grand_total sudah ada

        // Mengirim email konfirmasi
        $this->send_confirmation_email($nama, $alamat, $no_telp, $jasa_pengiriman, $pilih_transaksi, $keranjang, $grand_total);

        // Mengarahkan atau menampilkan pesan sukses
        redirect('dashboard'); // Ganti ini dengan halaman yang ingin Anda arahkan setelah pesanan berhasil
    }

    private function send_confirmation_email($nama, $alamat, $no_telp, $jasa_pengiriman, $pilih_transaksi, $keranjang, $grand_total) {
        // Membuat pesan email
        $email_message = "<h2>Rangkuman Pesanan</h2>";
        $email_message .= "<p>Nama: $nama</p>";
        $email_message .= "<p>Alamat: $alamat</p>";
        $email_message .= "<p>No. Telepon: $no_telp</p>";
        $email_message .= "<p>Jasa Pengiriman: $jasa_pengiriman</p>";
        $email_message .= "<p>Pilih Transaksi: $pilih_transaksi</p>";
        $email_message .= "<h3>Item Pesanan</h3>";

        foreach ($keranjang as $item) {
            $email_message .= "<p>{$item['name']} - Rp. " . number_format($item['price'], 0, ',', '.') . "</p>";
        }

        $email_message .= "<p>Total Belanja Anda : Rp. " . number_format($grand_total, 0, ',', '.') . "</p>";

        // Memuat perpustakaan email
        $this->load->library('email');

        // Konfigurasi email
        $this->email->from('catherinesurya0510@gmail.com', 'Daily Bakery Fresh');
        $this->email->to('cacalia211@gmail.com'); // Ganti ini dengan alamat email pelanggan
        $this->email->subject('Konfirmasi Pesanan');
        $this->email->message($email_message);

        // Mengirim email
        $this->email->send();
    }
}
