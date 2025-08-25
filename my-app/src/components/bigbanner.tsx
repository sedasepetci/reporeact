"use client";

import PlusIcon from '../icons/plusicon';
import React from 'react';
import LinkRightIcon from '../icons/linkrighticon';

const BigBanner = () => {
  return (
    <div className="w-full bg-white py-10 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto md:mr-50">
        
        {/* Sol Taraf: Görsel ve Ürün Bilgisi */}
        <div className=" flex flex-col items-center md:items-start p-6  ">
       <img
  src="/images/detail/carolsehpa.png"
  alt="Coral Coffee Table"
  className="w-full max-w-2xl h-auto object-contain mb-6 self-start"
/>

         <div className="flex items-center justify-start w-full  ">
  {/* Sol taraf: yazılar */}
  <div>
    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black md:mr-30">
      Coral Coffee Table
    </h2>
    <p className="text-lg md:text-xl font-bold text-black ">
      ₺ 46.500,00
    </p>
  </div>

  {/* Sağ taraf: buton */}
  <button className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-700 transition-colors duration-200 rounded-none">
    <PlusIcon />
  </button>
</div>
</div>

        {/* Sağ Taraf: Başlık, Açıklama ve Link */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl mb-4 text-black">
            Doğanın Ritmini
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            Hissedin
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Mobilyalarımızda, aksesuarlarımızda ve tasarımlarımızda, doğanın ritmini ve insanın yaratıcılığını bir araya getiriyoruz. Geçmişten gelen malzemeleri geleceğe taşıyan bir damar gibi, sürekli akan ve yenilenen bir yaşam anlayışı sunuyoruz.
          </p>
          <div className="flex items-center space-x-2 cursor-pointer text-black hover:text-gray-600">
            <span className="font-semibold">Detaylı Gör</span>
            <LinkRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
