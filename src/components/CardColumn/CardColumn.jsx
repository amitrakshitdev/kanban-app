import clsx from "clsx";
import React from "react";
import Card from "../Card/Card";
function CardColumn({ title = "TODO", data, children, colIndex }) {
  return (
    <div
      className={clsx("card-column", "min-w-80", "mx-4 my-2", [
        "flex flex-col items-center",
      ])}
    >
      <h3>{title}</h3>
      <div className="card-column-card-wrapper w-full">
        {children}
        {data?.editState == "creating" && (
          <Card isCreating={true} colIndex={colIndex} />
        )}
      </div>
    </div>
  );
}

export default CardColumn;
