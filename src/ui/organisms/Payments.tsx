import { Order } from "@/gql/graphql";
import { formatMoney } from "@/utils/money";

function Payments({ cart }: { cart?: Order | null }) {
	if (!cart?.items) {
		return null;
	}

	const totals = cart.items.reduce(
		(aggr, item) => (aggr += Number(item?.product?.price) * Number(item?.quantity)),
		0,
	);

	return (
		<div className="flex items-center gap-2 bg-white mt-5">
			<span className="font-bold text-xl">Total:</span>
			<span className="font-bold text-red-700">{formatMoney(totals)}</span>
		</div>
	);
}

export default Payments;
