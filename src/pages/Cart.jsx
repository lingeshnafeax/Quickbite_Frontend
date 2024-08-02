import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

import CartTotal from "../components/Cart/CartTotal";

const Cart = () => {
  const { food_list, cartItems, addItem, deleteItem, noOfItems } =
    useContext(StoreContext);

  return (
    <div className="flex flex-col lg:mx-[120px]">
      {noOfItems !== 0 ? (
        <div className="flex border-separate border-spacing-0 flex-col">
          <div className="flex border-b text-primary">
            <div className="w-1/5 flex-1 py-4 text-center font-semibold lg:text-left lg:text-xl">
              Item
            </div>
            <div className="w-1/5 flex-1 py-4 text-center font-semibold lg:text-left lg:text-xl">
              Name
            </div>
            <div className="w-1/5 flex-1 py-4 text-center font-semibold lg:text-left lg:text-xl">
              Price
            </div>
            <div className="w-1/5 flex-1 py-4 text-center font-semibold lg:text-left lg:text-xl">
              Quantity
            </div>
            <div className="w-1/5 flex-1 py-4 text-center font-semibold lg:text-left lg:text-xl">
              Total
            </div>
          </div>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="flex items-center border-b py-2">
                  <div className="w-1/5 px-4 py-2 lg:flex-1 lg:px-0">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/${item.image}`}
                      alt={item.name}
                      className="h-10 w-10 rounded-lg object-cover lg:h-14 lg:w-14"
                    />
                  </div>
                  <div className="w-1/5 px-4 py-2 lg:flex-1 lg:text-left">
                    {item.name}
                  </div>
                  <div className="w-1/5 px-4 py-2 lg:flex-1 lg:text-left">
                    ₹{item.price}
                  </div>
                  <div className="w-1/5 lg:flex-1 lg:text-left">
                    <div className="flex flex-row items-center gap-x-3">
                      <button
                        className="w-5 rounded-3xl bg-primary text-sm text-white lg:h-7 lg:w-10"
                        onClick={() => addItem(item._id)}
                      >
                        +
                      </button>
                      {cartItems[item._id]}
                      <button
                        className="w-5 rounded-3xl bg-primary text-sm text-white lg:h-7 lg:w-10"
                        onClick={() => deleteItem(item._id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="w-1/5 px-4 py-2 text-left lg:flex-1">
                    ₹{cartItems[item._id] * item.price}
                  </div>
                </div>
              );
            }
            return null; // Return null to ensure no extra rows are added
          })}
        </div>
      ) : (
        <div className="mt-16 flex flex-grow items-center justify-center lg:mt-48">
          <p className="text-5xl">Empty cart :(</p>
        </div>
      )}
      {noOfItems !== 0 && (
        <div className="mx-3 mt-7 flex flex-col gap-y-6 lg:mx-0 lg:mt-14 lg:flex-row lg:gap-x-6">
          <CartTotal />
          <div className="flex flex-grow flex-col lg:mx-0 lg:gap-y-3">
            <p>Have any promocode?</p>
            <div className="flex flex-row gap-x-2">
              <input
                type="text"
                className="w-4/6 rounded-lg border p-1 lg:w-1/2"
              />
              <button className="rounded-lg bg-primary px-1 py-1 text-background lg:px-4 lg:py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
