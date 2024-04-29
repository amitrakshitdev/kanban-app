import React from "react";
import clsx from "clsx";
import CardColumn from "../CardColumn/CardColumn";
function BodyArea({ children }) {
  return (
    <div
      style={{ gridColumn: "2/3", gridRow: "2/3" }}
      className={clsx(["bg-[#21212D]"], ["flex justify-start"])}
    >
      {children}
    </div>
  );
}

export default BodyArea;
