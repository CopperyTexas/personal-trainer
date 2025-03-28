import React from 'react';
import { FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa';

export default function Contacts() {
  return (
    <section className="py-16 " id="contacts">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 border-b-4 inline-block border-red-500">
            Готов изменить свою жизнь?
          </h2>
        </div>
        <p className="text-center text-white text-xl mb-8 max-w-2xl mx-auto">
          Напиши мне прямо сейчас, и вместе мы начнём путь к телу твоей мечты! Я
          всегда открыт к общению и с радостью отвечу на все твои вопросы.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="https://t.me/imshirovich_fit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-500 transition"
          >
            <FaTelegramPlane size={30} />
            <span className="text-lg">Telegram</span>
          </a>

          <a
            href="https://instagram.com/imshirovich_fit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-pink-500 transition"
          >
            <FaInstagram size={30} />
            <span className="text-lg">Instagram</span>
          </a>

          <a
            href="https://vk.com/Imshirovich_fit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-700 transition"
          >
            <FaVk size={30} />
            <span className="text-lg">ВКонтакте</span>
          </a>
        </div>
      </div>
    </section>
  );
}
