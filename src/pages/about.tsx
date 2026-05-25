import { Link } from "react-router-dom";
import { collections } from "../data/collections";

const team = [
  {
    name: "Alice Johnson",
    role: "Founder & Designer",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400",
    bio: "With 15 years in haute couture, Alice founded Fashionista to make elegant fashion accessible to all.",
  },
  {
    name: "Michael Lee",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Michael's avant-garde vision shapes every collection, blending contemporary trends with timeless elegance.",
  },
  {
    name: "Sophia Kim",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    bio: "Sophia brings our story to life, connecting with fashion lovers worldwide through authentic storytelling.",
  },
];

const values = [
  {
    title: "Sustainability",
    desc: "Committed to ethical sourcing and eco-friendly practices in every collection.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Creativity",
    desc: "Every piece is a canvas for artistic expression, pushing the boundaries of contemporary fashion.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Inclusivity",
    desc: "Fashion is for everyone. We design for all body types, styles, and personalities.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="bg-gradient-main pt-32 pb-20 text-white text-center px-6">
        <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium tracking-widest uppercase border border-white/20 mb-4">
          Our Journey
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">About Us</h1>
        <p className="mt-4 text-base text-white/85 max-w-xl mx-auto leading-relaxed">
          Discover the story, mission, and people behind Fashionista.
        </p>
      </header>

      {/* Our Story */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-5">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">Our Story</span>
            <h2 className="text-4xl font-bold font-serif leading-tight">A Small Boutique With A Big Dream</h2>
            <p className="text-gray-500 leading-relaxed">
              Fashionista started as a small boutique with one big dream: to redefine modern fashion by blending creativity, elegance, and comfort. We believe fashion is more than clothing — it's an expression of personality, confidence, and style.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From our humble beginnings in a small studio, we've grown into a brand that serves thousands of fashion-forward individuals around the world. Every piece we create carries a piece of our story.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600"
              alt="Our atelier"
              className="rounded-2xl w-full h-96 object-cover border border-gray-100"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-gray-100 p-5">
              <div className="text-3xl font-bold font-serif text-gradient-main">5+</div>
              <div className="text-gray-500 text-xs mt-0.5">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">What We Stand For</span>
            <h2 className="text-4xl font-bold font-serif mt-2">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-gray-200 transition duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="bg-gradient-main py-24 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 text-xs font-medium tracking-widest uppercase border border-white/20 mb-4">
            Our Mission
          </span>
          <h2 className="text-4xl font-bold font-serif mb-6">Empowering Confidence Through Style</h2>
          <p className="text-lg text-white/85 leading-relaxed">
            Our mission is to create unique, timeless pieces that empower individuals to feel confident and stylish in any setting. From seasonal collections to everyday essentials, every piece is crafted with care and attention to detail.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold tracking-widest uppercase text-xs">The People</span>
          <h2 className="text-4xl font-bold font-serif mt-2">Meet the Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl">{member.name}</h4>
                <p className="text-red-500 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collection mosaic */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">Explore Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col) => (
              <Link
                key={col.id}
                to={`/collections/${col.id}`}
                className="group relative block rounded-xl overflow-hidden h-40"
              >
                <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{col.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 py-20 text-white text-center px-6">
        <h3 className="text-3xl font-bold font-serif mb-3">Stay in the Loop</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">Subscribe for exclusive updates and style inspiration.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 w-full sm:flex-1 focus:outline-none focus:border-red-500 transition-colors text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-main text-white font-semibold text-sm hover:opacity-90 transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default AboutPage;
