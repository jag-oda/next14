import { executeGraphql } from "./graphglApi";
import { ProductsGetListDocument, ProductListItemFragment, ProductGetByIdDocument } from "@/gql/graphql";

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