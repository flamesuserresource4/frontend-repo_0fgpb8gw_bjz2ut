import { Star, Clock, Plus } from "lucide-react";

const sampleRestaurants = [
  {
    id: "r1",
    name: "Bella Pizza",
    category: "Pizza",
    rating: 4.7,
    eta: 25,
    price: 12,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r2",
    name: "Burger Hub",
    category: "Burgers",
    rating: 4.5,
    eta: 20,
    price: 10,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r3",
    name: "Sakura Sushi",
    category: "Sushi",
    rating: 4.8,
    eta: 30,
    price: 18,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r4",
    name: "Spice Route",
    category: "Indian",
    rating: 4.6,
    eta: 35,
    price: 14,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r5",
    name: "Sweet Bliss",
    category: "Desserts",
    rating: 4.4,
    eta: 15,
    price: 8,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RestaurantGrid({ selectedCategory = "All", searchQuery = "", onAdd }) {
  const q = searchQuery.trim().toLowerCase();
  const filtered = sampleRestaurants.filter((r) => {
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    const matchesQuery = q === "" || r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 pb-28">
      <div className="flex items-center justify-between mt-6 mb-3">
        <h2 className="text-xl font-semibold">Popular near you</h2>
        <span className="text-sm text-gray-500">{filtered.length} options</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r) => (
          <article key={r.id} className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-sm transition bg-white">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={r.image} alt={r.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                <Star className="h-3.5 w-3.5 text-yellow-500" /> {r.rating}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gray-700" /> {r.eta} min
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold leading-tight">{r.name}</h3>
                  <p className="text-sm text-gray-500">{r.category}</p>
                </div>
                <span className="text-sm font-medium">${r.price.toFixed(2)}</span>
              </div>
              <button
                onClick={() => onAdd?.({ id: r.id, name: r.name + " - Popular", price: r.price })}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 hover:border-gray-300 px-3 py-2 text-sm"
              >
                <Plus className="h-4 w-4" /> Add popular item
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
