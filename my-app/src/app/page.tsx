import Hero from "@/components/herobanner";
import BigBanner from "@/components/bigbanner";
import DetailBanner from "@/components/detailbanner";

const productsData = [
  { id: 1, name: "Coral Coffee Table", price: "₺ 46.500,00", image: "/images/detail/detailbanner1.png" },
  { id: 2, name: "Modern Sofa", price: "₺ 12.000,00", image: "/images/detail/detailbanner2.png" },
  { id: 3, name: "Wooden Chair", price: "₺ 3.500,00", image: "/images/detail/detailbanner3.png" },
  { id: 4, name: "Dining Table", price: "₺ 22.000,00", image: "/images/detail/detailbanner4.png" },
];
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <BigBanner/>
      <DetailBanner products={productsData} />
    </main>
  );
}
