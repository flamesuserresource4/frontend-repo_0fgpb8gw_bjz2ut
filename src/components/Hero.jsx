import { Search } from "lucide-react";

const defaultCategories = [
  "All",
  "Pizza",
  "Burgers",
  "Sushi",
  "Indian",
  "Desserts",
  "Vegan",
];

export default function Hero({ categories = defaultCategories, selectedCategory, onSelectCategory, onSearch }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Crave. Tap. Enjoy.
            </h1>
            <p className="mt-3 text-gray-600">
              Discover nearby favorites and get them delivered fast.
            </p>
            <div className="mt-5 flex items-stretch gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for restaurants or dishes"
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                />
              </div>
              <button className="px-4 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white font-medium shadow-sm hover:opacity-95">
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory?.(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    selectedCategory === cat
                      ? "bg-orange-50 text-orange-600 border-orange-200"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-100 via-amber-50 to-red-100 border border-orange-200/50 p-6">
              <div className="h-full w-full rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 grid place-items-center">
                <div className="text-center">
                  <div className="text-7xl">🍕</div>
                  <p className="mt-2 font-medium text-gray-700">Hot & fresh to your door</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
