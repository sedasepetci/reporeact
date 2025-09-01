"use client"
import React from "react"

const Description = () => {
  return (
    <div className="relative h-[220px] md:h-[280px] bg-[#D3CCC1] flex items-center justify-center px-4">
      <img
        src="/images/description/vectorleft.png"
        alt="Left vector"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[180px] md:h-[220px]"
      />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 max-w-4xl text-gray-800">
        <h1 className="text-xl md:text-2xl font-bold md:w-1/3">Biz Lavena’yız.</h1>
        <p className="text-base md:text-lg md:w-2/3">
          Tasarımı bir ifadeye, malzemeyi bir hisse dönüştürüyoruz. Doğaya saygıyı, zamansızlığı ve organik formları benimsiyoruz. Her ürünümüz, yaşam alanlarınıza sessiz ama kalıcı bir estetik taşıyor. Çünkü estetik, hem göze hem dünyaya iyi gelmelidir.
        </p>
<img
        src="/images/description/vectorright.png"
        alt="Left vector"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[180px] md:h-[220px]"
      />
      </div>
      
    </div>
    
  )
}

// ✅ Tek default export ekle
export default Description
