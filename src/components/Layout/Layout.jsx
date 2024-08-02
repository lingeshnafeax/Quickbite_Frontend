import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ setShowLogin }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar setShowLogin={setShowLogin} />

      <main className="min-h-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  setShowLogin: PropTypes.func,
};

export default Layout;
