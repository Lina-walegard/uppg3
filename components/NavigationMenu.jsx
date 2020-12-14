import React, { useContext } from "react";
import Link from "next/link";
import LangContext from "../Context/LangContext";

function NavigationMenu(props) {
  const context = useContext(LangContext);

  return (
    <div>
      <div className="menuHeader"></div>
      <ul>
        <li>
          <Link href="/about">
            {context.lang === "sv" ? "OM OSS" : "ABOUT US"}
          </Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">
            {context.lang === "sv" ? "KONTAKT" : "CONTACT"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
