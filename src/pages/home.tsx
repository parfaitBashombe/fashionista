import { Link } from "react-router-dom";
import CollectionsGrid from "../components/collection-grid";
import ProductCard from "../components/product-card";
import { collections } from "../data/collections";

const stats = [
  { value: "4+", label: "Collections" },
  { value: "16+", label: "Products" },
  { value: "10K+", label: "Customers" },
  { value: "Free", label: "Shipping" },
];

const features = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Quality Guaranteed",
    desc: "Premium materials and meticulous craftsmanship in every single piece.",
  },
  {
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    title: "Free Shipping",
    desc: "Complimentary delivery on all orders, no minimum spend required.",
  },
  {
    icon: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 2 2 4-2 4 2z",
    title: "Easy Returns",
    desc: "Not happy? Return within 30 days, no questions asked.",
  },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    title: "24/7 Support",
    desc: "Our team is always here to help with any questions or concerns.",
  },
];

const Home = () => {
  const featuredProducts = collections
    .flatMap((col) => col.products ?? [])
    .filter((p) => p.featured)
    .slice(0, 4);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero — exactly one viewport tall, no scrolling needed */}
      <header className="relative h-screen flex flex-col text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />

        {/* Main content — centered in the space above the stats bar */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6 pt-20 pb-4 space-y-5 animate-fade-in">
          <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium tracking-widest uppercase border border-white/20">
            New Season 2025
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold drop-shadow-lg leading-tight">
            Redefine<br />Your Style
          </h1>
          <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
            Discover exclusive collections crafted with elegance, creativity, and a passion for modern fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collections"
              className="px-8 py-3.5 rounded-full bg-white text-red-500 font-bold hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-full border-2 border-white/70 text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Stats bar — pinned to the bottom of the hero, always visible */}
        <div className="relative z-20 flex-shrink-0 bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold font-serif">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Collections */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">Explore</span>
            <h2 className="text-4xl font-bold font-serif mt-2">Our Collections</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              From breezy summer looks to cozy winter essentials — find your perfect style.
            </p>
          </div>
          <CollectionsGrid />
          <div className="text-center mt-10">
            <Link
              to="/collections"
              className="inline-block px-8 py-3 rounded-full border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">Why Us</span>
            <h2 className="text-4xl font-bold font-serif mt-2">The Fashionista Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-red-100 transition duration-300"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">Handpicked</span>
            <h2 className="text-4xl font-bold font-serif mt-2">Featured Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/collections"
              className="inline-block px-8 py-3 rounded-full bg-gradient-main text-white font-semibold hover:opacity-90 transition"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">Our Story</span>
            <h2 className="text-4xl font-bold font-serif leading-tight">
              Fashion Is More<br />Than Clothes
            </h2>
            <p className="text-gray-500 leading-relaxed">
              At Fashionista, we believe fashion is a lifestyle. Every piece in our collection is crafted with intention — to make you feel confident, elegant, and uniquely yourself.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 rounded-full bg-gradient-main text-white font-semibold hover:opacity-90 transition"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {collections.slice(0, 4).map((col, i) => (
              <img
                key={col.id}
                src={col.image}
                alt={col.name}
                className={`w-full h-48 object-cover rounded-2xl border border-gray-100 ${i % 2 === 1 ? "mt-6" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-main py-24 text-white text-center px-6">
        <h2 className="text-4xl font-bold font-serif mb-3">Stay in the Loop</h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Subscribe for exclusive drops, style guides, and special offers delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 w-full sm:flex-1 focus:outline-none bg-white text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
