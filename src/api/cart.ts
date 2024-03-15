import { CartAddProductDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphglApi";
import { cookies } from "next/headers";

export const getCartById = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart.cart) {
			return cart.cart;
		}
	}
};

export const createCart = (cartId?: string) => {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {
			id: cartId,
		},
		cache: "no-store",
	});
};

export const getOrCreateCart = async () => {
	const existingCart = await getCartById();
	if (existingCart) {
		return existingCart;
	}
	const cartId = cookies().get("cartId")?.value;
	const cart = await createCart(cartId);
	if (!cart.cartFindOrCreate) {
		throw new Error("Cart not found or created");
	}

	cookies().set("cartId", cart.cartFindOrCreate.id, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
	});

	return cart.cartFindOrCreate;
};

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
};