import { useForm } from "react-hook-form";
import CartTotal from "../components/Cart/CartTotal";
import CustomButton from "../components/ui/Icons/CustomButton";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { token, food_list, cartItems, getTotalCartAmount, deliveryFees } =
    useContext(StoreContext);

  const onSubmit = async (data) => {
    console.log(data);
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryFees,
    };

    let response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/order/placeOrder`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.data.success) {
      const { sessionUrl } = response.data;
      window.location.replace(sessionUrl);
    }
  };
  return (
    <div className="mx-[20px] flex flex-wrap gap-x-5 gap-y-10 lg:mx-[120px] lg:mt-[30px] lg:gap-x-10">
      <div className="flex flex-grow flex-col gap-y-5">
        <h1 className="text-2xl font-bold lg:text-3xl">Delivery Information</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-wrap gap-y-3 text-sm lg:text-lg"
        >
          <div className="flex w-full gap-x-3">
            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="First name"
              {...register("firstName", { required: true })}
            />
            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true })}
            />
          </div>
          <div>
            <input
              className="w-full rounded-xl border border-primary/75 p-2"
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
          </div>
          <input
            className="rounded-xl border border-primary/75 p-2"
            type="text"
            placeholder="Street"
            {...register("street", { required: true })}
          />
          <div className="flex w-full gap-x-3">
            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="City"
              {...register("city", { required: true })}
            />

            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="State"
              {...register("state", { required: true })}
            />
          </div>
          <div className="flex w-full gap-x-3">
            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="Zip code"
              {...register("zipCode", { required: true })}
            />
            <input
              className="w-1/2 rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="Country"
              {...register("country", { required: true })}
            />
          </div>
          <div>
            <input
              className="w-full rounded-xl border border-primary/75 p-2"
              type="text"
              placeholder="Phone"
              {...register("phone", { required: true, minLength: 10 })}
            />
            {errors.phone && errors.phone.type === "minLength" ? (
              <p>Phone number is required</p>
            ) : null}
          </div>
          <CustomButton type="submit">Proceed to Checkout</CustomButton>
        </form>
      </div>
      <CartTotal showProceed={false} />
    </div>
  );
};

export default PlaceOrder;
