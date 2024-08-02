import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartTotal = ({ showProceed = true }) => {
  const { deliveryFees, getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="flex-start flex flex-grow flex-col gap-y-2 lg:gap-y-3">
      <h1 className="text-2xl font-bold lg:text-3xl">Cart Totals</h1>
      <div className="flex w-11/12 justify-between border-b py-1 lg:w-4/5">
        <p>Subtotal</p>
        <p>₹{getTotalCartAmount()}</p>
      </div>
      <div className="flex w-11/12 justify-between border-b py-1 lg:w-4/5">
        <p>Delivery Fee</p>
        <p>₹{deliveryFees}</p>
      </div>
      <div className="flex w-11/12 justify-between border-b py-1 font-bold lg:w-4/5">
        <p>Total</p>
        <p>₹{getTotalCartAmount() + deliveryFees}</p>
      </div>
      {showProceed && (
        <Link
          to="/order"
          className="w-1/2 rounded-lg bg-primary px-2 py-1 text-background lg:w-fit lg:px-4 lg:py-2"
        >
          Proceed to checkout
        </Link>
      )}
    </div>
  );
};
CartTotal.propTypes = {
  showProceed: PropTypes.bool,
};

export default CartTotal;
