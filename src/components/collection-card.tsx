import { Link } from "react-router-dom";
import type { Collection } from "../types/type";

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Link
      to={`/collections/${collection.id}`}
      className="group relative block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors duration-300 cursor-pointer"
    >
      <img
        src={collection.image}
        alt={collection.name}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold font-serif mb-1">{collection.name}</h3>
        <p className="text-sm text-white/75 mb-4 line-clamp-2">{collection.description}</p>
        <span className="inline-block px-5 py-2 rounded-full border border-white/70 text-white text-sm font-semibold group-hover:bg-white group-hover:text-red-500 transition-colors duration-200">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

export default CollectionCard;
