export default function CartSummary({ items = [], onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0);
  if (items.length === 0) return null;
  return (
    <div className="fixed bottom-4 left-0 right-0 z-30">
      <div className="max-w-2xl mx-auto px-4">
        <div className="rounded-2xl shadow-lg border border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">{items.length} item{items.length > 1 ? "s" : ""} in cart</div>
            <div className="text-xs text-gray-500">Total ${total.toFixed(2)}</div>
          </div>
          <button
            onClick={onCheckout}
            className="px-4 py-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white font-medium"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
