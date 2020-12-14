import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import Image from "next/image";

function SweLangButton() {
  const { lang, setLanguage } = useContext(LangContext);

  return (
    <button
      style={{ background: "none", padding: 0 }}
      onClick={() => setLanguage("sv")}
    >
      <Image
        src="/sweden.png"
        alt="english language"
        width={32}
        height={32}
      ></Image>
    </button>
  );
}

export default SweLangButton;
