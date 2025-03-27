import React from 'react';

function Services() {
    return (
        <section id="services" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Услуги</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Персональные тренировки</h3>
                        <p>Индивидуальный подход и составление персональной программы.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Групповые занятия</h3>
                        <p>Эффективные тренировки в компании единомышленников.</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Онлайн консультации</h3>
                        <p>Советы и рекомендации, где бы ты ни находился.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;