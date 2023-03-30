import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: "100%",
};
const DragAndDrop = ({ tags, setTags, priorityUpdate, setPriorityUpdate }) => {
  const [cards, setCards] = useState(tags);
  useEffect(() => {
    setCards(tags);
  }, [tags]);

  useEffect(() => {
    setPriorityUpdate(priorityUpdate + 1);
  }, [cards]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    card.priority = index + 1;

    return (
      <Card
        key={card.priority}
        index={index}
        id={card.priority}
        text={card.title}
        moveCard={moveCard}
      />
    );
  }, []);
  return (
    <>
      <div style={style}>
        {cards.sort().map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};

export default DragAndDrop;
