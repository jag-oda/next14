import { ProductItemType } from "@/ui/types";

type ProductType = {
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
};

export const getProductsList = async () => {
    const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductType[];
    const products = productsResponse.map((product) : ProductItemType => productResponseItemTypeToProductItemType(product));

  return products;
}

export const getProductById =  async (id: ProductType["id"]) => {
   const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
   const product = (await res.json()) as ProductType;
   return productResponseItemTypeToProductItemType(product);
};

const productResponseItemTypeToProductItemType = (product: ProductType) : ProductItemType => {
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
}