import React from "react";
import styled from "@emotion/styled";

const Dot = ({ highlight = false }) =>
  highlight ? (
    <span role="img" aria-label="completed">
      🌟
    </span>
  ) : (
    <span role="img" aria-label="incomplete">
      ⭐️
    </span>
  );

const arrayOfLength = length => Array.apply(1, Array(length));

export const PinPad = ({ numberOfPins, numberHighlighted }) => (
  <PinWrapper style={{ fontSize: "2.5rem" }}>
    {arrayOfLength(numberOfPins).map((value, index) => (
      <Dot key={index} highlight={numberHighlighted > index} />
    ))}
  </PinWrapper>
);

export default PinPad;

const PinWrapper = styled.div`
  font-size: 3rem;
  width: 100%;
  text-align: center;
`;
