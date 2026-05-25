import { useCart } from "../context/cart-context";
import { useToast } from "../context/toast-context";
import type { Product } from "../types/type";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items, updateQuantity, removeFromCart } = useCart();
  const { addToast } = useToast();

  const cartItem = items.find((i) => i.product.id === product.id);
  const quantity = cartItem?.quantity ?? 0;
  const inCart = quantity > 0;

  const handleAdd = () => {
    addToCart(product);
    addToast(`${product.name} added to cart!`);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gradient-main text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        {inCart && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            In Cart
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="p-5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-800 truncate">{product.name}</h4>
          <p className="text-red-500 font-bold mt-0.5">${product.price}</p>
        </div>

        {inCart ? (
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 font-bold hover:border-red-400 hover:text-red-500 transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-6 text-center font-bold text-gray-800 text-sm tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-full bg-gradient-main text-white text-xs font-semibold hover:opacity-90 transition flex-shrink-0 whitespace-nowrap cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
