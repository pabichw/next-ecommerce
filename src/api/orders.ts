import {
	Order,
	OrderGetListDocument,
	UpdateOrderOwnershipDocument,
	UpdateOrderStatusDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getOrders({
	userId,
	userEmail,
}: {
	userId?: string;
	userEmail?: string;
}): Promise<Order[] | null> {
	const { order: orders } = await executeGraphql(OrderGetListDocument, {
		userId,
		userEmail,
	});

	if (!orders) {
		return null;
	}

	return orders as Order[];
}

export async function updateOrderStatus({
	orderId,
	status,
}: {
	orderId: string;
	status: "draft" | "paid";
}): Promise<Order | null> {
	const order = await executeGraphql(UpdateOrderStatusDocument, {
		orderId,
		status,
	});

	if (!order) {
		return null;
	}

	return order as Order;
}

export async function updateOrderOwnership({
	orderId,
	userId,
	userEmail,
}: {
	orderId: string;
	userId?: string;
	userEmail?: string;
}): Promise<Order | null> {
	const order = await executeGraphql(UpdateOrderOwnershipDocument, {
		orderId,
		userId,
		userEmail,
	});

	if (!order) {
		return null;
	}

	return order as Order;
}
