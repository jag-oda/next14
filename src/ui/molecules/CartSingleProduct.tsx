import Image from "next/image";
import { CartFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils/utils";
import { QuantitySection } from "./QuantitySection";

type CartSingleProductProps= {
	product: CartFragment["items"][number]["product"];
	cartId: string;
	quantity: number;
};

export const CartSingleProduct = ({ cartId, quantity, product }: CartSingleProductProps) => {
    return <div className="relative w-full rounded-xl bg-gray-100 p-4 shadow-md">
    <div className="flex gap-4">
        <div className="max-h-full max-w-full">
            <Image
                src={product.images[0]?.url || ""}
                alt={product.name}
                width={150}
                height={150}
                className="h-full w-full rounded-md object-cover"
            />
        </div>
        </div>
        <div className="mt-2 flex justify-end">
					<p className="text-lg font-bold">{formatPrice((product.price / 100) * quantity)}</p>
		</div>
        <QuantitySection quantity={quantity} cartId={cartId} productId={product.id}/>
        <div className="flex-start">

		</div>
        </div>
}
