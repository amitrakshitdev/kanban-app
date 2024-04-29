import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard, editCard } from "../../features/cardDataSlice";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";

function Card({ data, isCreating = false, colIndex }) {
  const cardsData = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  function onSaveHandle() {
    const textVal = inputRef.current.value;
    if (isCreating) {
      dispatch(addCard({ text: textVal, colIndex: colIndex }));
    } else if (isEditing) {
      dispatch(
        editCard({ text: textVal, colIndex: colIndex, cardId: data.cardId })
      );
    }
    setIsEditing(false);
  }
  function onEditHandle() {
    setIsEditing(true);
  }
  function onDeleteHandle() {
    dispatch(deleteCard({ colIndex: colIndex, cardId: data.cardId }));
  }
  useEffect(() => {
    if (isEditing) {
      inputRef.current.value = data?.text || "";
    }
  }, [isEditing]);
  useEffect(() => {
    let jsonData = JSON.stringify(cardsData);
    localStorage.setItem("cardsData", jsonData);
  }, [cardsData]);
  return (
    <div
      className={clsx([
        "bg-[#2B2C38]",
        "my-2",
        "h-[60px] w-[100%]",
        "rounded-md",
        "p-2",
      ])}
    >
      {isCreating || isEditing ? (
        <>
          <input type="text" ref={inputRef} />
          <button
            className="bg-blue-500 px-3 m-2 rounded-sm"
            onClick={onSaveHandle}
          >
            Save
          </button>
        </>
      ) : (
        <div className="flex justify-between">
          <p className="text-sm">{data?.text || ""}</p>
          <div className="flex">
            <img
              src={editIcon}
              className="w-5 h-5 mr-2"
              onClick={onEditHandle}
            />
            <img
              src={deleteIcon}
              className="w-5 h-5"
              onClick={onDeleteHandle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
