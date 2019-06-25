import React from "react";

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
  <div style={{ fontSize: "2.5rem" }}>
    {arrayOfLength(numberOfPins).map((value, index) => (
      <Dot key={index} highlight={numberHighlighted > index} />
    ))}
  </div>
);

export default PinPad;
