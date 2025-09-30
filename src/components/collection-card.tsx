import React from "react";
import type { Collection } from "../types/type";
import { Link } from "react-router-dom";

interface CollectionCardProps {
  collection: Collection;
  onSelect?: (collection: Collection) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <img
        src={collection.image}
        alt={collection.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
        <p className="text-gray-600 mb-4">{collection.description}</p>
        <Link
          to={`/collections/${collection.id}`}
          className="mt-4 inline-block px-6 py-2 rounded-full bg-red-500 text-white font-semibold transform hover:scale-105 hover:bg-red-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
