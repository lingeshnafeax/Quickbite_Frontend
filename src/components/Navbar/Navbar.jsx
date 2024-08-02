import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import CartIcon from "../ui/Icons/CartIcon";
import SearchIcon from "../ui/Icons/SearchIcon";

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import ProfileIcon from "../ui/Icons/ProfileIcon";
import OrderIcon from "../ui/Icons/OrderIcon";
import LogoutIcon from "../ui/Icons/LogoutIcon";
import toast from "react-hot-toast";

const Navbar = ({ setShowLogin }) => {
  const { noOfItems, token, setToken, fetchCartOnLoad } =
    useContext(StoreContext);

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged out successfully");
    navigate("/");
    fetchCartOnLoad();
  };

  return (
    <div className="mx-2 flex flex-row justify-between py-2 sm:mx-10">
      <Link to="/">
        <div className="flex items-center justify-center gap-x-1 lg:gap-x-3">
          <img className="h-14" src={assets.quickbite_logo} alt="" />
          <p className="text-2xl font-bold sm:text-3xl">Quickbite</p>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-x-2 sm:gap-x-6">
        <SearchIcon></SearchIcon>
        <div className="relative">
          <Link to="cart">
            <CartIcon></CartIcon>
          </Link>
          {noOfItems > 0 ? (
            <div className="absolute -right-1 -top-4 h-4 w-4 rounded-full bg-primary text-center text-sm text-white">
              {noOfItems}
            </div>
          ) : (
            ""
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="rounded-lg bg-primary p-2 text-white"
          >
            Sign In
          </button>
        ) : (
          <div className="relative">
            <div onClick={() => setShowDropDown((prev) => !prev)}>
              <ProfileIcon />
            </div>
            <div
              className={`absolute right-2 top-10 z-10 flex transform cursor-pointer flex-col gap-y-3 rounded-lg bg-white p-3 text-sm transition-transform duration-300 ease-in-out ${
                showDropDown
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-4 opacity-0"
              }`}
            >
              <div className="flex items-center">
                <OrderIcon />
                <Link to="orders">
                  <p className="ml-2">Orders</p>
                </Link>
              </div>
              <div onClick={logoutUser} className="flex items-center">
                <LogoutIcon />
                <p className="ml-2">Logout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
Navbar.propTypes = { setShowLogin: PropTypes.func };

export default Navbar;
