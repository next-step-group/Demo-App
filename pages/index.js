import { useState } from "react";
import Anime from "./anime";
import Movies from "./movies";

export default function Recipes() {
  const [userName, setUserName] = useState("");
  return (
    <div className="recipe-list">
      Name
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button
        className="submitBtn"
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Submit
      </button>
      <Anime />
      <Movies />
    </div>
  );
}
