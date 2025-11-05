import { ShoppingCart, MapPin } from "lucide-react";

export default function Header({ cartCount }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">FD</div>
          <span className="font-semibold text-lg">FoodDrop</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-orange-500" />
          <span>Deliver to</span>
          <span className="font-medium text-gray-900">Your Location</span>
        </div>
        <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 text-sm">
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold h-5 w-5 rounded-full grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
