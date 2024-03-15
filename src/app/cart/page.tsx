import { getCartById } from "@/api/cart";
import { CartSingleProduct } from "@/ui/molecules/CartSingleProduct";
import { PaymentSection } from "@/ui/molecules/PaymentSection";
import { formatPrice } from "@/utils/utils";

export default async function CartPage() {
	const cart = await getCartById();

	if (!cart || !cart.items.length) {
		return <p>add some products</p>;
	}
	const total = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

	return (
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
				Your order
			</h1>
			<div className="flex flex-col gap-8 lg:flex-row w-full">
				<article className="flex flex-col w-2/5">
					<ul className="flex flex-col gap-4">
						{cart?.items.map((product) => (
						<CartSingleProduct
						cartId={cart.id}
						quantity={product.quantity}
						product={product.product}
						key={product.product.id}
			/>
		))}
	</ul>
				</article>
				<aside className="flex h-[150px] w-full flex-col rounded-md bg-gray-100 p-8 shadow-md lg:w-2/5">
					<div className="flex items-center justify-between font-semibold">
						<p>Total:</p>
						<span>{formatPrice(total / 100)}</span>
					</div>
					<PaymentSection />
			</aside>
			</div>
			
		</section>
	);
}