import { CategoriesGetListDocument, ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphglApi";

export const getCategoryList = async() => {
    const graphqlResponse = await executeGraphql({ query: CategoriesGetListDocument, variables: {}});
    return graphqlResponse.categories.data;
};

export const getProductsByCategorySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql({query: ProductsGetByCategorySlugDocument, variables: {slug}});
    return graphqlResponse.category?.products;
}
