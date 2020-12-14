import React, { createContext } from "react";

const LangContext = React.createContext({
  lang: "sv",
  setLanguage: () => {},
});

export default LangContext;
