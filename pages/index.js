import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import CoinCalculator from "../Components/CoinCalculator";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const context = useContext(LangContext);

  const { data: sek, error: sekError } = useSwr(
    "https://api.exchangeratesapi.io/latest?base=EUR",
    fetcher
  );

  if (sekError) {
    return <div>Could not get data...</div>;
  }
  if (!sek) return <div>Loading...</div>;

  return (
    <div>
      <div className="wrap">
        {context.lang === "sv" ? (
          <h1>Aktuella myntpriser!</h1>
        ) : (
          <h1>Current coin prices!</h1>
        )}

        <CoinCalculator metal={20} sek={sek.rates.SEK} />
      </div>
    </div>
  );
}
