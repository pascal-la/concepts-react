import { useState } from "react";

import { letters } from "../utils/gridLetters";

const TOTAL_ROWS = 7;
const TOTAL_COLUMNS = ["A", "B", "C", "D", "E", "F"];
const GRID_ROWS = [...new Array(TOTAL_ROWS)];

const Grid = () => {
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [word, setWord] = useState<string>("HELLO");

  const handleCellClick = (cellId: string) => {
    if (selectedCells.includes(cellId)) {
      const updatedCells = selectedCells.filter((cell) => cell !== cellId);
      setSelectedCells(updatedCells);
    } else {
      setSelectedCells((prev) => [...prev, cellId]);
    }
  };

  return (
    <div className="size-full bg-white">
      <input
        type="text"
        onChange={(e) => setWord(e.target.value.toUpperCase())}
        value={word}
      />
      <div className="flex">
        {word.split("").map((letter, i) => (
          <div key={i} className="flex">
            {TOTAL_COLUMNS.map((column) => (
              <div key={column}>
                {GRID_ROWS.map((_, rowIndex) => {
                  const cellId = column + (rowIndex + 1);

                  return (
                    <div
                      key={rowIndex}
                      className="border border-blue-400/50 size-1"
                      style={{
                        backgroundColor: letters[letter].includes(cellId)
                          ? "green"
                          : "",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex">
        {TOTAL_COLUMNS.map((column) => (
          <div key={column}>
            {GRID_ROWS.map((_, rowIndex) => {
              const cellId = column + (rowIndex + 1);

              return (
                <div
                  key={rowIndex}
                  className="border border-blue-400/50 size-8"
                  onClick={() => handleCellClick(cellId)}
                  style={{
                    backgroundColor: selectedCells.includes(cellId)
                      ? "green"
                      : "",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div>"{selectedCells.join('", "')}"</div>
    </div>
  );
};

export default Grid;
