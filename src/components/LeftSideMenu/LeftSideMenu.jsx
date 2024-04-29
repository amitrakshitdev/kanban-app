import clsx from "clsx";
import React from "react";

export default function LeftSideMenu() {
  return (
    <div
      style={{
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
      className={clsx("bg-[#2C2C38]", ["border-r border-gray-500"])}
    >
      LeftSideMenu
    </div>
  );
}
