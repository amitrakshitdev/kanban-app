import "./App.css";
import Layout from "./components/Layout/Layout";
import LeftSideMenu from "./components/LeftSideMenu/LeftSideMenu";
import Header from "./components/Header/Header";
import BodyArea from "./components/BodyArea/BodyArea";
import CardColumn from "./components/CardColumn/CardColumn";
import Card from "./components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import { addColumn, changeEditState } from "./features/cardDataSlice";
function App() {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cards);
  useEffect(() => {
    console.log("card data", cardData);
  }, [cardData]);
  function onAddTask() {
    dispatch(changeEditState({ type: "create", column: 0 }));
  }
  function onAddBoard() {
    dispatch(addColumn({ title: "New Board" }));
  }
  return (
    <>
      <Layout>
        <LeftSideMenu />
        <Header>
          <Button onClick={onAddBoard}>+ Add Board</Button>
          <Button onClick={onAddTask}>+ Add Task</Button>
        </Header>
        <BodyArea>
          {cardData.map((colData, colIndex) => (
            <CardColumn
              title={colData.title}
              data={colData}
              colIndex={colIndex}
            >
              {colData?.cards.map((card) => (
                <Card key={card?.cardId} data={card} colIndex={colIndex} />
              ))}
            </CardColumn>
          ))}
        </BodyArea>
      </Layout>
    </>
  );
}

export default App;
