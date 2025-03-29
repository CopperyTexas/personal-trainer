import React from 'react';

function Header() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-2">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Персональный тренер Эльдар
        </h1>
        <nav className="hidden sm:inline lg:inline">
          <ul className="flex space-x-4 text-sm sm:text-base md:text-lg">
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
