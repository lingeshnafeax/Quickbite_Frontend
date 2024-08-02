import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../Context/StoreContext";
import toast from "react-hot-toast";
import OrderItem from "../components/Orders/OrderItem";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const fetchMyOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/order/myOrders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error(response.data.message || "Error fetching the orders");
      }
    } catch (err) {
      toast.error("Error fetching the orders");
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchMyOrders();
    }
  }, [token]);

  return (
    <div className="mx-4 flex min-h-screen flex-col lg:mx-[120px] lg:mt-6">
      <h1 className="text-xl font-bold lg:text-3xl">My Orders</h1>
      <div className="mt-4 flex flex-grow flex-col gap-y-4 lg:mt-8 lg:gap-y-8">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderItem
              key={order._id}
              order={order}
              fetchMyOrders={fetchMyOrders}
            />
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
