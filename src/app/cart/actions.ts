"use server";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphglApi";
import { CartRemoveProductDocument, CartChangeQuantityBySingleProductDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";
import { getCartById } from "@/api/cart";


export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphql({
		query: CartChangeQuantityBySingleProductDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};
export const removeItem = async (cartId: string, productId: string) => {
	await executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			cartId,
			productId,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};


export async function handlePaymentAction() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe publishable key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const cart = await getCartById();

	if (!cart) {
		throw new Error("Cart not found");
	}

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
					images: item.product.images.map((image) => image.url),
					description: item.product.description,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong with the payment session creation.");
	}

	redirect(checkoutSession.url);
}