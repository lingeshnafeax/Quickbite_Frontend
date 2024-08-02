import PropTypes from "prop-types";
import OrderBoxIcon from "../ui/Icons/OrderBoxIcon";
import clsx from "clsx";
const OrderItem = ({ order, fetchMyOrders }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-3 rounded-md border border-primary p-3 text-[12px] lg:grid-cols-7 lg:p-5 lg:text-sm">
      <div className="col-span-4 flex items-center gap-x-2 lg:col-span-3">
        <OrderBoxIcon />
        {order.items.map((item) => {
          return (
            <p key={item._id} className="font-bold">
              {`${item.name} - ${item.quantity} x ${item.price}`}
            </p>
          );
        })}
      </div>
      <div>
        Items :{" "}
        {order.items.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)}
      </div>
      <div>₹{order.amount}</div>
      <div
        className={clsx("font-bold", {
          "text-red-500": order.status === "Food Processing",
          "text-primary": order.status === "Out for Delivery",
          "text-green-600": order.status === "Delivered",
        })}
      >
        {order.status}
      </div>
      <div>
        <button
          onClick={fetchMyOrders}
          className="rounded-md bg-primary p-1 text-background lg:p-2"
        >
          Track Order
        </button>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object,
  fetchMyOrders: PropTypes.func,
};

export default OrderItem;
