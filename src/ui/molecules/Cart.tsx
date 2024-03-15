import { ShoppingBag } from "lucide-react";
import { Suspense } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";
import { getCartById } from "@/api/cart";

export const Cart = async () => {
	const cart = await getCartById();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink href="/cart" exact={false}>
			<ShoppingBag size={24} color="black" />
			<Suspense key="headerQuantity">
				<div className="mt-5">
					<Badge value={quantity} />
				</div>
			</Suspense>
		</ActiveLink>
	);
};