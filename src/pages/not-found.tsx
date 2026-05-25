import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 text-center">
      <div className="text-9xl font-serif font-bold text-gradient-main mb-4 select-none">404</div>
      <h1 className="text-3xl font-bold font-serif mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-gradient-main text-white font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
        <Link
          to="/collections"
          className="px-8 py-3 rounded-full border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
        >
          Browse Collections
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
