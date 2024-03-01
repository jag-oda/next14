import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) =>  new Promise((resolve) => setTimeout(resolve, ms))

export const SuggestedProductList = async () => {
    const products = await getProductsList();
    await sleep(5000);
    return (
        <div className="mt-10">
            <h1 className="text-xl font-bold text-center mb-20">Wybrane dla Ciebie</h1>
            <ProductList products={products.slice(-4)} />
        </div>
    ) 
};