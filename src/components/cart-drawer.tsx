import { useCart } from "../context/cart-context";
import { useToast } from "../context/toast-context";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, clearCart, total, itemCount } = useCart();
  const { addToast } = useToast();

  const handleCheckout = () => {
    clearCart();
    onClose();
    addToast("Order placed! Thank you for shopping with Fashionista.", "success");
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] transform transition-transform duration-300 flex flex-col border-l border-gray-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-xl font-bold font-serif">
            Your Cart{" "}
            {itemCount > 0 && <span className="text-red-500">({itemCount})</span>}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg font-semibold text-gray-500">Your cart is empty</p>
              <p className="text-sm mt-1">Add some items to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">{item.product.name}</h4>
                  <p className="text-red-500 font-bold text-sm mt-0.5">${item.product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        item.quantity === 1
                          ? removeFromCart(item.product.id)
                          : updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-sm font-bold cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-semibold w-5 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-auto text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 space-y-4 flex-shrink-0">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-xl font-bold text-red-500">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout</p>
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-gradient-main text-white font-semibold rounded-full hover:opacity-90 transition cursor-pointer"
            >
              Checkout — ${total.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
