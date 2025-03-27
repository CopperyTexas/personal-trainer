import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-12 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg mb-2">
                        Имя:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded"
                        placeholder="Ваше имя"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Ваш email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg mb-2">
                        Сообщение:
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-2 border rounded"
                        rows="4"
                        placeholder="Ваше сообщение"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Отправить
                </button>
            </form>
        </section>
    );
}

export default Contact;