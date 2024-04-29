import { createSlice, nanoid } from "@reduxjs/toolkit";

let storedDataJsonString = localStorage.getItem("cardsData");
let prevData = JSON.parse(storedDataJsonString);

export const cardDataSlice = createSlice({
  name: "cards",
  initialState: prevData,
  reducers: {
    changeEditState: (state, action) => {
      switch (action.payload.type) {
        case "create": {
          state[0].editState = "creating";
          break;
        }
        case "update": {
          state[0].editState = "updating";
          break;
        }

        default:
          break;
      }
    },
    addCard: (state, action) => {
      let payload = action.payload;
      const colIndex = payload.colIndex;

      state[colIndex].cards = [
        ...state[colIndex].cards,
        { text: payload.text, cardId: nanoid() },
      ];
      state[colIndex].editState = "none";
    },
    editCard: (state, action) => {
      let payload = action.payload;
      const { colIndex, cardId } = payload;

      state[colIndex].cards.forEach((card) => {
        if (cardId === card.cardId) {
          card.text = payload.text;
        }
      });
      state[colIndex].editState = "none";
    },
    deleteCard: (state, action) => {
      let payload = action.payload;
      const { colIndex, cardId } = payload;

      state[colIndex].cards = state[colIndex].cards.filter(
        (card) => card.cardId !== cardId
      );
      state[colIndex].editState = "none";
    },
    addColumn: (state, action) => {
      state = [
        ...state,
        { title: action.payload.title, editState: "none", cards: [] },
      ];
    },
  },
});

export const { addCard, editCard, deleteCard, changeEditState, addColumn } =
  cardDataSlice.actions;
export default cardDataSlice.reducer;
