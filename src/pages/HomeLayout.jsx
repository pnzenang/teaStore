import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
// import { styled } from "styled-components";
import { Navbar, Footer, Navigation } from "../components";

const HomeContext = createContext();

const HomeLayout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <HomeContext.Provider value={{ showNavbar, toggleNavbar }}>
        <Navigation />
        <Navbar />
        <Outlet />
        <Footer />
      </HomeContext.Provider>
    </>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
