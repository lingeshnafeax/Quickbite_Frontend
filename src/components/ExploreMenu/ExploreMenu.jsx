import clsx from "clsx";
import { menu_list } from "../../assets/assets";
import PropTypes from "prop-types";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className="mx-4 mt-8 flex flex-col gap-y-3 lg:mx-[120px] lg:gap-y-6"
     
    >
      <h1 className="text-xl font-bold lg:text-4xl">Explore our menu</h1>
      <p className="text-sm lg:text-lg">
        Choose from a diverse menu of dishes that will make your taste buds
        happy and delicious.
      </p>
      <div className="flex flex-row space-x-4 overflow-x-auto border-b-2 scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              category === item.menu_name
                ? setCategory("All")
                : setCategory(item.menu_name);
            }}
            className="flex flex-col items-center justify-center gap-3 p-4 lg:p-6"
          >
            <div className="relative h-[70px] w-[70px] cursor-pointer lg:h-[25vh] lg:w-[25vh]">
              <img
                className={clsx(
                  "h-full w-full rounded-full object-cover transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg",
                  category === item.menu_name
                    ? "scale-105 border-4 border-primary p-1"
                    : "",
                )}
                src={item.menu_image}
                alt={`Image of ${item.menu_name}`}
              />
            </div>
            <p className="text-sm lg:text-base">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
ExploreMenu.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default ExploreMenu;
