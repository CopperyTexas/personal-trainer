import React from 'react';

function Header() {
  return (
    <header className="text-2xl">
      <div className="container mx-auto flex justify-between items-center p-2">
        <h1>Персональный тренер Эльдар </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-red-500">
                Обо мне
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-500">
                Услуги
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-red-500">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
