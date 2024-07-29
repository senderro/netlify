// Footer.tsx
"use client";
import React from 'react';
import './footer.css'; // Importe o CSS do footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
        <a href="/contato" className="contact-button">CONTATE-NOS</a>
      </div>
    </footer>
  );
};

export default Footer;
