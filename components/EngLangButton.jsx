import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import Image from "next/image";

function EngLangButton() {
  const { lang, setLanguage } = useContext(LangContext);

  return (
    <button
      style={{ background: "none", padding: "0px 0px 0px 10px" }}
      onClick={() => setLanguage("en")}
    >
      <Image
        src="/en.jpg"
        alt="english language"
        width={30}
        height={30}
      ></Image>
    </button>
  );
}

export default EngLangButton;
