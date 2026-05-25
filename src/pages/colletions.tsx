import CollectionCard from "../components/collection-card";
import { collections } from "../data/collections";

const CollectionsPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero */}
      <header className="bg-gradient-main pt-32 pb-20 text-white text-center px-6">
        <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium tracking-widest uppercase border border-white/20 mb-4">
          Discover
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Our Collections</h1>
        <p className="mt-4 text-base text-white/85 max-w-xl mx-auto leading-relaxed">
          Explore our carefully curated collections — each one a unique expression of style and craftsmanship.
        </p>
      </header>

      <main className="py-20 container mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((col) => (
            <CollectionCard key={col.id} collection={col} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollectionsPage;
