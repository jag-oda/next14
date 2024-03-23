'use client';
import { useFormStatus } from "react-dom";


export const AddToCartButton = () => {
    const { pending } = useFormStatus();
    return  <button 
                type="submit"
                data-testid="add-to-cart-button"
                disabled={pending}
                className="py-2 px-6 border rounded-sm shadow-sm bg-slate-100 disabled:bg-slate-300"
            >
                Add to cart
            </button>

}