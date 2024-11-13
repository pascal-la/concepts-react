import { useState } from "react";
import { twMerge } from "tailwind-merge";

type CardStatus = "todo" | "done";

type CardType = {
  id: number;
  title: string;
  status: CardStatus;
};

const cardList: CardType[] = [
  { id: 1, title: "Card 1", status: "todo" },
  { id: 2, title: "Card 2", status: "todo" },
  { id: 3, title: "Card 3", status: "todo" },
  { id: 4, title: "Card 4", status: "todo" },
  { id: 5, title: "Card 5", status: "todo" },
  { id: 6, title: "Card 6", status: "todo" },
  { id: 7, title: "Card 7", status: "todo" },
  { id: 8, title: "Card 8", status: "done" },
];

const Drag = () => {
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [cards, setCards] = useState<CardType[]>(cardList);
  const [test, setTest] = useState("");

  const onDragStart = (item: CardType) => {
    setSelectedItem(item);
  };

  const onDrop = (status: CardStatus) => {
    if (selectedItem) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === selectedItem.id ? { ...card, status } : card
        )
      );
      setSelectedItem(null);
    }
  };

  const containers = ["todo", "done"];

  return (
    <div className="container m-auto">
      <div className="grid gap-5 mt-24 mb-12">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-300 to-emerald-800 bg-clip-text text-transparent">
          Drag
        </h1>
      </div>

      <div className="flex">
        {containers.map((status) => (
          <div
            className={twMerge(
              "p-5 w-full",
              status === "todo" && "bg-red-300",
              status === "done" && "bg-emerald-300",
              test === status && "opacity-70"
            )}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setTest(status)}
            onDrop={() => onDrop(status as CardStatus)}
          >
            {cards.map((card) => {
              if (card.status !== status) return null;
              return (
                <div
                  key={card.id}
                  style={{
                    backgroundColor: "lightblue",
                    margin: "20px 25%",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                  draggable
                  onDragStart={() => onDragStart(card)}
                >
                  {card.title}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drag;
