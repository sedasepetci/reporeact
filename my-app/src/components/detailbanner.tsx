'use client'
import React from 'react'
import PlusIcon from '../icons/plusicon';

// Ürün tipi
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

// Tek bir ürün bileşeni
type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <div className="flex flex-col items-start gap-3 w-60 md:w-72 border-b pb-4">
    {/* Görsel */}
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-64 md:h-72 object-cover rounded-md"
    />
    {/* Yazı ve buton aynı satırda */}
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-col">
        <h6 className="text-base font-semibold text-black">{product.name}</h6>
        <p className="text-base font-bold text-black">{product.price}</p>
      </div>
      <button className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center text-2xl hover:bg-gray-700 transition-colors rounded-none">
        <PlusIcon />
      </button>
    </div>
  </div>
);

// DetailBanner bileşeni
type DetailBannerProps = {
  products: Product[];
};

const DetailBanner: React.FC<DetailBannerProps> = ({ products }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-6">
      {/* Ortalanmış maksimum genişlik */}
      <div className="max-w-8xl mx-auto " >
        <h1 className="text-3xl md:text-4xl mb-2 text-black font-bold text-center md:text-left">
          Lavena Hub
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-4 text-center md:text-left">
          Sizin için
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left">
          Doğa nasıl vazgeçmeden yenileniyorsa, biz de her formda yeniden başlıyoruz.
        </p>

        {/* Ürünleri yatay flex ile sırala */}
        <div className="flex flex-row gap-8 overflow-x-auto px-2 justify-center">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
