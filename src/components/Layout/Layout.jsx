import React from "react";

function Layout({ children }) {
  return (
    <div
      className="layout w-full h-full bg-green-500"
      style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        gridTemplateRows: "100px 1fr",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
