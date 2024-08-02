import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import toast from "react-hot-toast";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(null);
  const [foodList, setFoodList] = useState([]);

  // The elements in frontend are rendered based on state variables but the same changes are also made to backend
  // When reloaded these states will be updated by the backend values

  const addItem = async (itemId) => {
    if (!token) {
      toast.error("Please login to add items to cart");
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 })); // making changes on both frontend and backend
      setNoOfItems((prev) => prev + 1);
      toast.success("Item added to cart");
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/add/${itemId}`,
          {}, // Axios needs empty body for post
          {
            headers: {
              Authorization: `Bearer ${token}`, // passing the token
            },
          },
        );
        if (!response.data.success) {
          console.log("Failed to add cart item to database");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // To calculated total cart amount

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = foodList.find((food) => {
        return food._id === item;
      });
      totalAmount += itemInfo.price * cartItems[item];
    }
    return totalAmount;
  };

  const deleteItem = async (itemId) => {
    if (!token) {
      toast.error("Please login to remove items from cart");
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Deleting on both frontend and backend
      setNoOfItems((prev) => prev - 1);
      toast.success("Item removed from cart");
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/remove/${itemId}`, // Empty body not needed for delete

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.data.success) {
          console.log("Failed to delete cart item from database");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const deliveryFees =
    Object.values(cartItems).reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0) * 15; // 5rs for each product

  const getFoodListOnLoad = async () => {
    // To load all the food data from backend
    // This will be executed only one time ie when loading the website
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/food/list`,
      );
      if (!response.data) {
        return toast.error(response.data.message || "Something went wrong");
      }
      setFoodList(response.data.data);
    } catch (err) {
      toast.error("Cannot get food list");
    }
  };
  const fetchCartOnLoad = async () => {
    // To load cart data from backend only if the user is logged in
    // This will also be called manually when the user logs in <LoginPopup/>

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const cartData = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart/getCart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (cartData.data.success) {
          setCartItems(cartData.data.data);
          const CartItemCount = Object.values(cartData.data.data).reduce(
            (acc, currentValue) => {
              return acc + currentValue;
            },
            0,
          );
          setNoOfItems(CartItemCount);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      // This is used by the <LoginPopup/> to empty the cart and no of items when the user logs out
      setCartItems({});
      setNoOfItems(0);
    }
  };

  useEffect(() => {
    getFoodListOnLoad();

    if (localStorage.getItem("token")) {
      // Only load the cart if the user logs in
      setToken(localStorage.getItem("token"));
      fetchCartOnLoad();
    }
  }, []);
  const contextValue = {
    food_list: foodList,
    cartItems,
    addItem,
    deleteItem,
    noOfItems,
    getTotalCartAmount,
    deliveryFees,
    token,
    setToken,
    fetchCartOnLoad,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StoreContextProvider;
