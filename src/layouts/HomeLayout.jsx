import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
