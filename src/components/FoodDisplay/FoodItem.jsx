import PropTypes from "prop-types";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addItem, deleteItem } = useContext(StoreContext);

  return (
    <div className="flex max-h-[450px] min-h-[350px] w-[165px] flex-grow cursor-pointer flex-col items-center gap-y-3 overflow-hidden rounded-lg shadow-md transition duration-500 ease-in-out hover:shadow-lg lg:h-[400px] lg:min-h-[250px] lg:w-[300px] lg:gap-y-6">
      <div className="min-w-full lg:h-[230px] lg:w-[300px]">
        <img
          className="h-full w-full object-cover"
          src={`${import.meta.env.VITE_BACKEND_URL}/images/${image}`}
          alt=""
        />
      </div>
      <div className="mx-2 flex h-full min-h-[180px] flex-col items-center justify-between p-2 lg:mx-3 lg:min-h-[100px]">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold lg:text-lg">{name}</p>
            <img
              className="h-[10px] lg:h-[15px]"
              src={assets.rating_starts}
              alt=""
            />
          </div>
          <div className="lg:h-18 overflow-y-auto">
            <p className="text-sm lg:text-sm">{description}</p>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <p className="font-semibold text-primary">${price}</p>
          {!cartItems[id] ? (
            <button
              onClick={() => addItem(id)}
              className="rounded-lg bg-primary p-1 text-sm text-white"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center">
              <button
                className="min-w-7 max-w-10 rounded-lg bg-primary text-white lg:px-1 lg:py-0.5"
                onClick={() => deleteItem(id)}
              >
                -
              </button>
              <p className="min-w-7 max-w-8 text-center">{cartItems[id]}</p>
              <button
                className="min-w-[30px] rounded-lg bg-primary text-white lg:px-1 lg:py-0.5"
                onClick={() => addItem(id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default FoodItem;
