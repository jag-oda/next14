"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "./actions";

export function RemoveButton({ cartId, productId }: { cartId: string, productId: string }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button 
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(cartId,productId);
					router.refresh();
				})
			}
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded w-full"
		>
			Remove
		</button>
	);
}
