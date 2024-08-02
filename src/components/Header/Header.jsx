import { assets } from "../../assets/assets";
const Header = () => {
  return (
    <div className="relative mx-3 mt-5 flex items-center justify-center lg:mt-10">
      <img
        src={assets.header_img}
        alt="Dish image"
        className="relative h-[200px] w-[400px] rounded-2xl lg:h-[550px] lg:w-[1300px]"
      />
      <div className="absolute left-[20px] top-[40px] flex flex-col items-start gap-y-3 text-white lg:left-[200px] lg:top-[230px] lg:w-[750px]">
        <h2 className="text-2xl font-bold lg:text-8xl">
          Order your favourite food
        </h2>
        <p className="text-sm lg:text-lg lg:font-semibold">
          Choose from a wide variety of dishes and enjoy delicious food at home
        </p>
        <button className="lg:text-md rounded-lg bg-primary p-2 text-sm">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
