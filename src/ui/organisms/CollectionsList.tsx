import { CollectionListItemFragment } from "@/gql/graphql";
import { CollectionItem } from "../molecules/CollectionItem";

type CollectionListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionsList = ( {collections} : CollectionListProps) => {
    return (
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 md:grid-cols-3">
            {collections.map((collection) => {
                return <CollectionItem collection={collection} key={collection.id} />
            })} 
        </div>
          
    );
};