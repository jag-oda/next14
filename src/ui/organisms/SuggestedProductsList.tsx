import { ProductList } from "@/ui/organisms/ProductList";
import { getSuggestedProductsList } from "@/api/products";

const sleep = (ms: number) =>  new Promise((resolve) => setTimeout(resolve, ms))

export const SuggestedProductList = async () => {
    const suggestedProducts = await getSuggestedProductsList();
    await sleep(5000);
    return (
        <div className="mt-10">
            <h1 className="text-xl font-bold leading-7 py-6">Suggested for you </h1>
            <ProductList products={suggestedProducts} />
        </div>
    ) 
};