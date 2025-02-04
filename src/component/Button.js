import React from "react";

export default function Button({ name, toggleClick }) {
  return (
    <button className="button" onClick={() => toggleClick()}>
      {name}
    </button>
  );
}
