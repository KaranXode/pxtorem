import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Routing } from "../Routes/Routing";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routing />
      </div>

      <Footer />
    </div>
  );
};
