import { auth } from "@clerk/nextjs";
import { getOrders } from "@/api/orders";

async function OrdersPage() {
  const orders = await getOrders({userId: auth().userId || undefined});

  return (
    <main className="colum-wrapper">
      <div className="mt-10 p-4 bg-white rounded-md">
        <h1 className="text-2xl bold">Your orders:</h1>
        <ul className="mt-5">
          {!orders || orders.length === 0  && <span>No orders yet 🛒</span>}
          {orders?.map(order => 
            <li key={`order-${order.id}`} className="flex items-center justify-between py-3 px-2 border-b-[1px]">
              <div>{order.id}</div>
              <div>Status: <span className="bold">{order.status || 'UNKNOWN'}</span></div>
              <div>Items: {order.items?.length || 0}</div>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}

export default OrdersPage;

