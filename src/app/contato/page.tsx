import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Mapa from "../../../res/mapa";
import Link from 'next/link';
import './contato.css';

export default function Home() {
  return (
    <div className="home">
      <div className="contact-section">
        <h2>ENTRE EM CONTATO</h2>
        <div className="contact-container">
          <div className="contact-item">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <Link href="tel:+5511999999999">+55 11 99999-9999</Link>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaEnvelope /></div>
            <Link href="mailto:contato@exemplo.com">contato@exemplo.com</Link>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaInstagram /></div>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
          </div>
        </div>
        <div className="whatsapp-container">
          <div className="whatsapp-item">
            <div className="whatsapp-icon"><FaWhatsapp /></div>
            <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</Link>
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="mapa">
          <Mapa />
        </div>
        <div className="location">
          <h3>Localização</h3>
          <p>Shopping Colatina</p>
          <p>3º andar</p>
          <p>Porta 4</p>
        </div>
      </div>
    </div>
  );
}
