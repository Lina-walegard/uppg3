import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import Coin from "./Coin";
import LangContext from "../Context/LangContext";
import ClearBtn from "../Components/ClearBtn";

function CoinCalculator(props) {
  const [data, setData] = useState([
    { name: "10ore1874-1961", values: [0, 0] },
    { name: "25ore1874-1961", values: [0, 0] },
    { name: "25ore1943-1961", values: [0, 0] },
    { name: "50ore1875-1939", values: [0, 0] },
    { name: "50ore1943-1961", values: [0, 0] },
    { name: "1kr1875-1941", values: [0, 0] },
    { name: "1kr1942-1967", values: [0, 0] },
    { name: "2kr1876-1940", values: [0, 0] },
    { name: "2kr1942-1966", values: [0, 0] },
    { name: "5kr1935", values: [0, 0] },
    { name: "5kr1952-1971", values: [0, 0] },
    { name: "10kr1972", values: [0, 0] },
    { name: "50kr1975/76", values: [0, 0] },
  ]);

  const context = useContext(LangContext);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const getTotal = useMemo(() => {
    let res = 0;
    data.forEach(function sum(item, index) {
      res += item.values[0] * item.values[1];
    });
    return res;
  }, [data]);

  const getPrice = useMemo(() => {
    let price = (props.metal / 31.14) * props.sek;
    return price;
  }, [props.metal, props.sek]);

  useEffect(() => {
    setPrice(getPrice);
    setTotal(getTotal);
  }, [props.sek, props.metal, getPrice, getTotal]);

  const ClearData = useCallback(() => {
    const newArr = [...data];
    newArr.map((x) => (x.values[0] = 0));
    setData(newArr);
  }, [data]);

  const updateInput = useCallback(
    (e) => {
      let newArr = [...data];
      const name = e.target.name;
      const index = newArr.findIndex((item) => item.name === name);
      newArr[index].values[0] = e.target.value;

      setData(newArr);
    },
    [data]
  );

  function roundUp(from, to) {
    return Math.ceil(from / to) * to;
  }

  function handleSubmitted(e) {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmitted} className="formStyle">
        <Coin
          title="10 öre* 1874 - 1961:"
          price={(data[0].values[1] = roundUp(price * 0.4, 0.25))}
          name="10ore1874-1961"
          sum={data[0].values[0] * roundUp(price * 0.4, 0.25)}
          updateInput={updateInput}
          amount={data[0].values[0]}
        />
        <Coin
          title="25 öre* 1874 - 1941:"
          price={(data[1].values[1] = roundUp(price * 0.65, 0.25))}
          name="25ore1874-1961"
          sum={data[1].values[0] * roundUp(price * 0.65, 0.25)}
          updateInput={updateInput}
          amount={data[1].values[0]}
        />
        <Coin
          title="25 öre* 1943 - 1961:"
          price={(data[2].values[1] = roundUp(price * 1.01, 0.25))}
          name="25ore1943-1961"
          sum={data[2].values[0] * roundUp(price * 1.01, 0.25)}
          updateInput={updateInput}
          amount={data[2].values[0]}
        />
        <Coin
          title="50 öre* 1875 - 1939:"
          price={(data[3].values[1] = roundUp(price * 1.24, 0.25))}
          name="50ore1875-1939"
          sum={data[3].values[0] * roundUp(price * 1.24, 0.25)}
          updateInput={updateInput}
          amount={data[3].values[0]}
        />
        <Coin
          title="50 öre* 1943 - 1961:"
          price={(data[4].values[1] = roundUp(price * 2.03, 0.25))}
          name="50ore1943-1961"
          sum={data[4].values[0] * roundUp(price * 2.03, 0.25)}
          updateInput={updateInput}
          amount={data[4].values[0]}
        />
        <Coin
          title="1kr 1875 - 1941:"
          price={(data[5].values[1] = roundUp(price * 2, 0.5))}
          name="1kr1875-1941"
          sum={data[5].values[0] * roundUp(price * 2, 0.5)}
          updateInput={updateInput}
          amount={data[5].values[0]}
        />
        <Coin
          title="1kr 1942 - 1967(68**):"
          price={(data[6].values[1] = roundUp(price * 4.2, 0.5))}
          name="1kr1942-1967"
          sum={data[6].values[0] * roundUp(price * 4.2, 0.5)}
          updateInput={updateInput}
          amount={data[6].values[0]}
        />
        <Coin
          title="2kr 1876 - 1940:"
          price={(data[7].values[1] = roundUp(price * 4, 0.5))}
          name="2kr1876-1940"
          sum={data[7].values[0] * roundUp(price * 4, 0.5)}
          updateInput={updateInput}
          amount={data[7].values[0]}
        />
        <Coin
          title="2kr 1942 - 1966:"
          price={(data[8].values[1] = roundUp(price * 8.4, 0.5))}
          name="2kr1942-1966"
          sum={data[8].values[0] * roundUp(price * 8.4, 0.5)}
          updateInput={updateInput}
          amount={data[8].values[0]}
        />
        <Coin
          title="5kr 1935:"
          price={(data[9].values[1] = roundUp(price * 5.05, 0.5))}
          name="5kr1935"
          sum={data[9].values[0] * roundUp(price * 5.05, 0.5)}
          updateInput={updateInput}
          amount={data[9].values[0]}
        />
        <Coin
          title="5kr 1952 - 1971:"
          price={(data[10].values[1] = roundUp(price * 16.2, 0.5))}
          name="5kr1952-1971"
          sum={data[10].values[0] * roundUp(price * 16.2, 0.5)}
          updateInput={updateInput}
          amount={data[10].values[0]}
        />
        <Coin
          title="10kr 1972:"
          price={(data[11].values[1] = roundUp(price * 10.5, 1))}
          name="10kr1972"
          sum={data[11].values[0] * roundUp(price * 10.5, 1)}
          updateInput={updateInput}
          amount={data[11].values[0]}
        />
        <Coin
          title="50kr 1975/1976:"
          price={(data[12].values[1] = roundUp(price * 17.5, 1))}
          name="50kr1975/76"
          sum={data[12].values[0] * roundUp(price * 17.5, 1)}
          updateInput={updateInput}
          amount={data[12].values[0]}
        />

        <label className="labelItemTotal">
          {context.lang === "sv" ? "Totalt: " : "Total: "}
          {total} :-
        </label>
        <ClearBtn handleClick={ClearData}></ClearBtn>
      </form>
    </div>
  );
}

export default CoinCalculator;
