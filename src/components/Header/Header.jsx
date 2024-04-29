import React from "react";

function Header({ children }) {
  return (
    <div
      style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
      className="bg-[#2C2C38] flex items-center justify-end"
    >
      {children}
    </div>
  );
}

export default Header;
