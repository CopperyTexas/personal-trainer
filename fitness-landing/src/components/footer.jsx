import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} Фитнес-тренер. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;