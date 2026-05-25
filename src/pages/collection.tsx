import { useParams, Link } from "react-router-dom";
import { collections } from "../data/collections";
import ProductCard from "../components/product-card";

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find((col) => col.id === id);

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 text-center">
        <div className="text-8xl font-serif font-bold text-gradient-main mb-4">404</div>
        <h2 className="text-3xl font-bold font-serif mb-3">Collection Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-sm">This collection doesn't exist or may have been removed.</p>
        <Link
          to="/collections"
          className="px-8 py-3 rounded-full bg-gradient-main text-white font-semibold hover:opacity-90 transition cursor-pointer"
        >
          View All Collections
        </Link>
      </div>
    );
  }

  const productCount = collection.products?.length ?? 0;

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero — bg-gradient-main is the fallback if the image fails to load */}
      <header className="relative min-h-[55vh] flex flex-col justify-start pt-28 pb-10 px-6 text-white overflow-hidden bg-gradient-main">
        {/* CSS background image sits on top of the gradient fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${collection.image})` }}
          aria-hidden="true"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10" />

        <div className="relative z-10 container mx-auto">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Collections
          </Link>

          <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">{collection.name}</h1>
          <p className="mt-3 text-base text-white/80 max-w-xl leading-relaxed">{collection.description}</p>
          <p className="mt-2 text-white/50 text-sm">
            {productCount} {productCount === 1 ? "product" : "products"}
          </p>
        </div>
      </header>

      {/* Products grid */}
      <main className="py-20 container mx-auto px-6">
        {collection.products?.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products in this collection yet.</p>
            <Link to="/collections" className="mt-4 inline-block text-red-500 hover:underline text-sm cursor-pointer">
              Explore other collections
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default CollectionPage;
