import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LangContext from "../Context/LangContext";

function Layout(props) {
  const [lang, setLanguage] = useState("sv");
  const contextValue = { lang, setLanguage };
  const { children } = props;

  return (
    <div>
      <LangContext.Provider value={contextValue}>
        <Header />
        {children}
        <Footer />
      </LangContext.Provider>
    </div>
  );
}

export default Layout;
