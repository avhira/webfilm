import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
import img from '../img/App Store - Filled.png';
import img2 from '../img/Google Play.png';
import logoFooter from '../img/logo-footer.png';

export default function Footer() {
  const col1 = [
    { link: '#', text: 'FAQ' },
    { link: '#', text: 'Relasi Investor' },
    { link: '#', text: 'Cara Menonton' },
    { link: '#', text: 'Informasi Perusahaan' },
    { link: '#', text: 'Hanya di Pluit Sakti' },
  ];
  const col2 = [
    { link: '#', text: 'Pusat Bantuan' },
    { link: '#', text: 'Pekerjaan' },
    { link: '#', text: 'Aturan Penggunaan' },
    { link: '#', text: 'Kontak Kami' },
  ];
  const col3 = [
    { link: '#', text: 'Akun' },
    { link: '#', text: 'Privasi' },
    { link: '#', text: 'Tes Kecepatan' },
    { link: '#', text: 'Pusat Media' },
    { link: '#', text: 'Pengaturan Kuki' },
  ];
  return (
    <footer id="footer" className="container footer">
      <div className="kiri">
        <ul>
          {col1.map((data, i) => (
            <li key={i}>
              <a href={data.link}>{data.text}</a>
            </li>
          ))}
        </ul>
        <ul>
          {col2.map((data, i) => (
            <li key={i}>
              <a href={data.link}>{data.text}</a>
            </li>
          ))}
        </ul>
        <ul>
          {col3.map((data, i) => (
            <li key={i}>
              <a href={data.link}>{data.text}</a>
            </li>
          ))}
        </ul>

        <div className="kanan">
          <h4>Dapatkan Aplikasi</h4>
          <div className="footer-img">
            <img src={img} alt="app store" />
            <img src={img2} alt="playstore" />
          </div>

          <p>Ikut Kami</p>
          <div>
            <a href="#">
              <Youtube className="warna" />
            </a>
            <a href="#">
              <Facebook className="warna" />
            </a>
            <a href="#">
              <Twitter className="warna" />
            </a>
            <a href="#">
              <Instagram className="warna" />
            </a>
            <a href="#">
              <Linkedin className="warna" />
            </a>
          </div>
        </div>
      </div>
      <div className="bawah">
        <div className="bawah-img">
          <a href="#">
            <img src={logoFooter} alt="logo footer" />
          </a>
          <p>@ 2023. All rights reserved.</p>
        </div>
        <ul>
          <li>
            <a href="#">Aturan</a>
          </li>
          <li>
            <a href="#">Privasi</a>
          </li>
          <li>
            <a href="#">Kontak</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
