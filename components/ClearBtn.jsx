import React, { useContext } from "react";
import styled from "styled-components";
import LangContext from "../Context/LangContext";

const Button = styled.button`
  background: #292929;
  border-radius: 5px;
  border: none;
  color: rgb(113, 180, 177);
  padding: 0.8em 1em;
  font-size: 0.8em;
  width: 150px;
  justify-self: center;
  grid-column-start: 1;
  grid-column-end: 5;

  &:hover {
    background: rgb(113, 180, 177);
    color: white;
  }
`;

function ClearBtn({ handleClick }) {
  const context = useContext(LangContext);

  return (
    <Button onClick={handleClick}>
      {" "}
      {context.lang === "sv" ? "Rensa" : "Clear"}{" "}
    </Button>
  );
}

export default React.memo(ClearBtn);
