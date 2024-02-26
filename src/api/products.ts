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
    const res = await fetch("https://graphql.hyperfunctor.com/graphql", {
        method: "POST",
        body: JSON.stringify({
            query: /* GraphQL */ `
                query GetProductsList {
                    products(first: 10) {
                        id
                        name
                        description
                        images {
                            url
                        }
                        price
                    }
                }
                `
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const graphqlResponse = await res.json()
  //  const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	//const productsResponse = (await res.json()) as ProductType[];
  //  const products = productsResponse.map((product) : ProductItemType => productResponseItemTypeToProductItemType(product));
  if(graphqlResponse.errors){
    throw TypeError(graphqlResponse.errors[0].message)
  };
  console.log('graph ql response', graphqlResponse.data.products)
  return  graphqlResponse.data.products.map(p => {
    return {
        id: p.id,
        title: p.name,
        price: p.price,
        description: p.descriptions,
        category: "",
        coverImage: {
            src: p.image[0].url,
            alt: p.name
        }
    };
  })    
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