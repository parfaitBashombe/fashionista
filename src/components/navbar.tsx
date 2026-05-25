import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart-context";

interface NavbarProps {
  onCartOpen: () => void;
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ onCartOpen }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? "text-red-500" : "text-gray-600 hover:text-red-500"
    }`;

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 py-3" : "border-b border-gray-100 py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold font-serif text-gradient-main tracking-wide cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Fashionista
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCartOpen}
            className="relative p-2 text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
            aria-label="Open cart"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold leading-none">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden p-2 text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 animate-slide-down">
          <ul className="flex flex-col py-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `block px-8 py-4 text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "text-red-500 bg-red-50 border-l-4 border-red-500"
                        : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
