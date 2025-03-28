import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Здесь добавь пути к фотографиям клиентов
const clientsPhotos = [
  '/clients/client_1.jpg',
  '/clients/client_2.jpg',
  '/clients/client_3.jpg',
  '/clients/client_4.jpg',
  '/clients/client_5.jpg',
  '/clients/client_6.jpg',
  '/clients/client_7.jpg',
  '/clients/client_8.jpg',
];

function Clients() {
  return (
    <section className="py-12 " id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 border-b-4 inline-block border-red-500">
            Мои клиенты
          </h2>
        </div>
        <div>
          <p className="text-center text-white text-xl mb-8 max-w-3xl mx-auto">
            Более{' '}
            <span className="font-semibold text-red-500">
              170 моих клиентов
            </span>{' '}
            уже осуществили свои мечты, обрели уверенность и стали счастливыми
            обладателями красивого и здорового тела.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full custom-swiper"
        >
          {clientsPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={photo}
                alt={`Клиент ${index + 1}`}
                className="rounded-xl shadow-md object-cover h-[400px] w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Clients;
