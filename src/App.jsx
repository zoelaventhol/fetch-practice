import { useState } from "react";
import Dog_app from "./Dog_app";
import Food_app from "./Food_app";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("dogs");
  return (
    <>
      <nav>
        {/* click "dogs" for Dog_app */}
        <p
          className={page === "dogs" ? "active" : null}
          onClick={() => setPage("dogs")}
        >
          Dogs 🐕
        </p>

        {/* click "food" for Food_app */}
        <p
          className={page === "food" ? "active" : null}
          onClick={() => setPage("food")}
        >
          Food 🍲
        </p>
      </nav>

      {/* conditionally render Dog or Food app */}
      {page === "dogs" ? <Dog_app /> : <Food_app />}
    </>
  );
}
