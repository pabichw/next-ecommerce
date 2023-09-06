export const formatMoney = (money: Money) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(money.value);
};
