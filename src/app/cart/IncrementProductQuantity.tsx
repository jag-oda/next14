"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "./actions";


export const IncrementProductQuantity = ({quantity, cartId, productId}: {quantity: number, cartId: string, productId: string}) => {
    const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

    return (
        <form>
            {optimisticQuantity}
            <button 
                className="ml-2 w-8 h-8 border bg-slate-50"
                type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
				}}
            > 
                + 
            </button>
        </form>
    )
}