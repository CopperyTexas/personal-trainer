import React from 'react';
import { FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 rounded-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Эльдар Имширович. Все права защищены.
        </p>

        <nav className="flex gap-4 text-white">
          <a href="#hero" className="hover:text-white transition">
            Главная
          </a>
          <a href="#services" className="hover:text-white transition">
            Услуги
          </a>
          <a href="#about" className="hover:text-white transition">
            Обо мне
          </a>
          <a href="#clients" className="hover:text-white transition">
            Клиенты
          </a>
          <a href="#contacts" className="hover:text-white transition">
            Контакты
          </a>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://t.me/imshirovich_fit"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={22} />
          </a>
          <a
            href="https://instagram.com/imshirovich_fit"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://vk.com/Imshirovich_fit"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVk size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
