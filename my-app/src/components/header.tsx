import { ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">CoffeeHolic</div>

      {/* Search bar */}
      <div className="hidden md:flex items-center border rounded-lg px-2 py-1">
        <input
          type="text"
          placeholder="Ara..."
          className="outline-none px-2 py-1"
        />
        <Search className="w-5 h-5 text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
        <User className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>

    </header>
  );
}
