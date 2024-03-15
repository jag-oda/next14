import { redirect } from "next/navigation";
import Stripe from "stripe";

type CartSuccessPageProps = {
	searchParams: {
		sessionId?: string;
	};
};

export default async function CartSuccessPage({ searchParams }: CartSuccessPageProps) {
	if (!searchParams.sessionId) {
		redirect("/");
	} 

	return (
		<div>
			<h1>Thank you for your purchase!</h1>
		</div>
	);
}