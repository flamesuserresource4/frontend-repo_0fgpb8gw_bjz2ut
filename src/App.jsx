import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RestaurantGrid from "./components/RestaurantGrid";
import CartSummary from "./components/CartSummary";

export default function App() {
  const categories = useMemo(() => ["All", "Pizza", "Burgers", "Sushi", "Indian", "Desserts", "Vegan"], []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, { ...item, qty: 1 }]);
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, i) => sum + i.price * (i.qty ?? 1), 0);
    alert(`Checkout successful! Total: $${total.toFixed(2)} for ${cart.length} item${cart.length === 1 ? "" : "s"}.`);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/40 text-gray-900">
      <Header cartCount={cart.length} />
      <Hero
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSearch={setSearchQuery}
      />
      <RestaurantGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onAdd={handleAddToCart}
      />
      <CartSummary items={cart} onCheckout={handleCheckout} />
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FoodDrop. Bon appétit!
      </footer>
    </div>
  );
}
