import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "./FoodItem";
import PropTypes from "prop-types";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  

  return (
    <div className="mx-4 mt-3 flex flex-col lg:mx-[120px] lg:mt-8 lg:gap-y-8">
      <p className="mb-5 text-xl font-bold lg:mb-0 lg:text-4xl">
        Top dishes near you
      </p>
      <div className="flex flex-row flex-wrap items-center justify-between gap-3 lg:gap-6">
        {food_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
