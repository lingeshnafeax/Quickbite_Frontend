import { Route, Routes } from "react-router-dom";
import ThemeProvider from "./lib/ThemeProvider";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <ThemeProvider theme="light">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Layout setShowLogin={setShowLogin} />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<PlaceOrder />} />
          <Route path="verify" element={<Verify />} />
          <Route path="orders" element={<MyOrders />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
