"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
         <div
  className="h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: "url('/images/slider/slider1.png')" }}
>
            <div className="max-w-3xl px-8 text-white">
              <h1 className="text-5xl font-light leading-tight">
                Zarafet Doğayla <br /> Buluştuğunda
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Lavena, organik formlar ve doğaya saygılı malzemelerle yaşam alanlarınıza sessiz bir estetik taşır.
              </p>
              <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
                Keşfet →
              </button>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-10">
        <button className="swiper-button-prev border border-white px-3 py-2 text-white">←</button>
        <button className="swiper-button-next border border-white px-3 py-2 text-white">→</button>
      </div>
    </div>
  );
}
