import { React, useState } from "react";
import FanList from "./FanList";

function Homepage() {
  const [text, setText] = useState(1);

  const sam = {
    name: "Sam Gubernikoff",
    favoritePlayer: "Jose Reyes",
    funFact: "Can jinx any Mets win at any moment",
  };
  const alex = {
    name: "Alexander Gubernikoff",
    favoritePlayer: "Jacob Degrom",
    funFact: "100% chance of win when not watching Mets games",
  };
  const dan = {
    name: "Dan Gold",
    favoritePlayer: "Cliff Floyd",
    funFact: "Loves soup. Hates west coast baseballs games.",
  };
  const brandon = {
    name: "Brandon Friedman",
    favoritePlayer: "David Wright",
    funFact:
      "Despite years of attrocity, still puts Mets ahead of Spurs in fandom",
  };
  const fish = {
    name: "Jordan Fishbach",
    favoritePlayer: "Mike Piazza",
    funFact:
      "Keeping his eye on childhood bestie, Jared Faust, in hopes of one day owning the team.",
  };
  const jared = {
    name: "Jared Fried",
    favoritePlayer: "Johan Santana",
    funFact:
      "Wears a youth medium David Wright jersey to every game he attends",
  };
  const herman = {
    name: "Josh Herman",
    favoritePlayer: "Pedro Martinez",
    funFact: "Newly added LGBTQ+ Mets chat member, but recognized Met-lifer.",
  };

  const fans = [sam, alex, dan, brandon, fish, jared, herman];

  function resetText() {
    setText(1);
  }

  function changeText() {
    setText(2);
  }

  function changeGub() {
    setText(3);
  }

  //   const championships = [1969, 1986];

  //   const display = championships.map((item) => (
  //     <div key={item}>
  //       <p>{item}</p>
  //     </div>
  //   ));

  return (
    <div id="mets">
      <br></br>
      <br></br>
      <br></br>
      <FanList fans={fans} />
    </div>
  );
}

export default Homepage;
