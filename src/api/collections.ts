import { CollectionGetSlugDocument, CollectionsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphglApi";


export const getCollectionsList = async() => {
    const graphqlResponse = await executeGraphql({query: CollectionsGetListDocument, variables: {}})
    return graphqlResponse.collections.data;
};

export const getCollectionBySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql({query: CollectionGetSlugDocument, variables: { slug }})
    return graphqlResponse.collection;  
};
