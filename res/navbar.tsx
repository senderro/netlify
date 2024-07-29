"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import "../global.css";
import { Baskervville } from 'next/font/google';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
});

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isTransparent ? 'transparent' : ''}`}>
      <div className="navbar-container">
        <Link href="https://www.instagram.com/marcos_lucio_nogueira/" className="navbar-logo">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Foto"
          />
          <div className={`navbar-title ${baskervville.className}`}>
            Marcos Lucio Nogueira
            <hr className="navbar-divider" />
            <div className="navbar-subtitle">Advogados</div>
          </div>
        </Link>
        <button
          className="navbar-toggle"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <svg className="navbar-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`} id="navbar-menu">
          <ul className="navbar-menu-list">
            <li><Link href="#" className="navbar-menu-link" aria-current="page">Início</Link></li>
            <li><Link href="#" className="navbar-menu-link">Sobre</Link></li>
            <li><Link href="#" className="navbar-menu-link">Serviços</Link></li>
            <li><Link href="#" className="navbar-menu-link">Entre em contato</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
