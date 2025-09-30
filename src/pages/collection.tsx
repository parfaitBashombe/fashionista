import { useParams, Link } from "react-router-dom";
import { collections } from "../data/collections";
import ProductCard from "../components/product-card";

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find((col) => col.id === id);

  if (!collection) {
    return (
      <div className="font-sans text-gray-800 p-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Collection Not Found</h2>
        <Link
          to="/collections"
          className="px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Back to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-[40vh] flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-main">
        <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
          {collection.name}
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
          {collection.description}
        </p>
      </header>

      {/* Products Grid */}
      <main className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold font-serif mb-12 text-center">
          Products
        </h2>
        {collection.products?.length ? (
          <div className="grid md:grid-cols-3 gap-8">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No products found in this collection.
          </p>
        )}
      </main>
    </div>
  );
};

export default CollectionPage;
