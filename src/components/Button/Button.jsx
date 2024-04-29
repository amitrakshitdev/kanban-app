import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...{ ...props }}
      className="bg-violet-600 px-4 py-2 rounded-full mx-2"
    >
      {children}
    </button>
  );
}

export default Button;
