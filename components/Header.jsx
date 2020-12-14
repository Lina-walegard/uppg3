import React from "react";
import Navigation from "./Navigation";
import EngLangButton from "../Components/EngLangButton";
import SweLangButton from "../Components/SweLangButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className="App-header">
      <a href="/">
        <Image src="/Home.png" alt="Home" width={40} height={40}></Image>
      </a>
      <EngLangButton />
      <SweLangButton />
      <Navigation />
    </header>
  );
}
