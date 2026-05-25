import CollectionCard from "./collection-card";
import { collections } from "../data/collections";

// Shows the first 4 collections as a home-page preview.
// The full list is on /collections.
const CollectionsGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {collections.slice(0, 4).map((col) => (
        <CollectionCard key={col.id} collection={col} />
      ))}
    </div>
  );
};

export default CollectionsGrid;
