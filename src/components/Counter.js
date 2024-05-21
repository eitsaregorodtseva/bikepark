import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";


export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{margin: "50px"}}>
      <div style={{ display: "flex", marginBottom: "20px", fontWeight: "600", fontSize: "16px"}}>
        <div>Счетчик: </div>
        <div>{counter}</div>
      </div>
      <Button onClick={() => setCounter(counter + 1)}>Добавить</Button>
      <Button onClick={() => setCounter(counter - 1)}>Вычесть</Button>
      <Button onClick={() => setCounter(0)}>Сброс</Button>
    </div>
  );
}