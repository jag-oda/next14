import { executeGraphql } from "./graphglApi";
import { 
    ProductsGetListDocument, 
    ProductListItemFragment, 
    ProductGetByIdDocument, 
    ProductsGetByCategorySlugDocument, 
    CategoriesGetListDocument, 
    CollectionsGetListDocument ,
    CollectionGetSlugDocument
} from "@/gql/graphql";

/*type ProductType = {
    id: string
    title: string
    price: number
    description: string
    category: string
    rating:  {
        rate: number
        count: number
    },
    image: string
    longDescription: string
}; */


export const getProductsList = async () => {
    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {})
    //console.log('graphql response', graphqlResponse.products.data.length)
    return graphqlResponse.products.data;
   
 /*   return graphqlResponse?.products?.map((product) => {
        return {
            id: product.id,
            name: product.name,
            category: product.categories[0].name || "",
            price: product.price,
            coverImage: {
                src: product.images[0].url || "",
                alt: product.image.name
            }
        }
    }); */
}

/*export const getProductsByCategorySlug = async(categorySlug: string) => {
    const categories = {} //await executeGraphql(ProductsGetByCategorySlugDocument, {slug: categorySlug})
    const products = categories.categories[0].products;

    return products?.map((product) => {
        return {
            id: product.id,
            name: product.name,
            category: product.categories[0].name || "",
            price: product.price,
            coverImage: {
                src: product.images[0].url || "",
                alt: product.image.name
            }
        }
    });
}; */

export const getProductById =  async (id: ProductListItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id: id})
    return graphqlResponse?.product;
   //const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
   //const product = (await res.json()) as ProductType;
  // return productResponseItemTypeToProductItemType(product);
};
export const getCategoryList = async() => {
    const graphqlResponse = await executeGraphql(CategoriesGetListDocument, {});
   // console.log('graphql response', graphqlResponse.categories.data);
    return graphqlResponse.categories.data;
};

export const getProductsByCategorySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {slug: slug});
    return graphqlResponse.category?.products;
}

export const getCollectionsList = async() => {
    const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {})
    return graphqlResponse.collections.data;
};

export const getCollectionBySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql(CollectionGetSlugDocument, {slug: slug})
    return graphqlResponse.collection;  
}
/*const productResponseItemTypeToProductItemType = (product: ProductType) : ProductItemType => {

    return {
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        coverImage: { 
            src: product.image,
            alt: product.title,
        }
    }
} */