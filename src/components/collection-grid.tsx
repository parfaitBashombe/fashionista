import React from "react";
import CollectionCard from "./collection-card";
import type { Collection } from "../types/type";
import { collections } from "../data/collections";

interface CollectionsGridProps {
  onSelect?: (collection: Collection) => void;
}

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ onSelect }) => {
  const collectionsToRender = collections.slice(0, 3);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {collectionsToRender.map((col) => (
        <CollectionCard key={col.id} collection={col} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default CollectionsGrid;
