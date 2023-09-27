import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState(null);
  const [color1, setcolor1] = useState(null);
  const [start, setstart] = useState(false);
  const clickHandler=(i,j)=>{
    setstart(true)
     setcolor(i)
     setcolor1(j)

  }
  const grid = [];
  for (let i = 0; i < 8; i++) {
    const boardColumn = [];
    for (let j = 0; j < 8; j++) {
      const diagonal= start && (i+j===color1+color||i-j===color1-color)
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          boardColumn.push(<div className="card" style={{background:diagonal?"red":"white"}} onClick={()=>clickHandler(i,j)}></div>);
        } else {
          boardColumn.push(<div className="card1" style={{background:diagonal?"red":"black"}} onClick={()=>clickHandler(i,j)}></div>);
        }
      } else {
        if (j % 2 == 0) {
          boardColumn.push(<div className="card1" style={{background:diagonal?"red":"black"}} onClick={()=>clickHandler(i,j)}></div>);
        } else {
          boardColumn.push(<div className="card" style={{background:diagonal?"red":"white"}} onClick={()=>clickHandler(i,j)}></div>);
        }
      }
    }
    grid.push(boardColumn);
  }
  return (
    <>
      <h1>chessboard</h1>
      <div className="board">{grid}</div>
    </>
  );
}

export default App;
