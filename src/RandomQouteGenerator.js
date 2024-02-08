import React from "react";
import "./RandomQouteGenerator.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function RandomQouteGenerator() {
  let colorGenerator, qouteGenerator;
  let twitterShare = "http://twitter.com/intent/tweet";
  let facebookShare =
    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com";
  const colors = [
    "#f1cbff",
    "#f5efb5",
    "#660066",
    "#445455",
    "#0099ff",
    "#ff00cc",
    "#8b4513",
  ];

  const data = [
    {
      qoute: "You can't wait till life isn't hard to be happy.",
      author: "Nightbirde",
    },
    {
      qoute: "If you can make it through the night, there is a brighter day.",
      author: "Tupac Shakur",
    },
    {
      qoute: "I make mistakes but I learn from everyone.",
      author: "Tupac Shakur",
    },
    {
      qoute:
        "If you are not making mistakes then you are not making decisions.",
      author: "Catherin Cook",
    },
    {
      qoute: "Every Strike brings me close to the next home run.",
      author: "Babe Ruth",
    },
    {
      qoute: "Tough time never lasts, but strong people do",
      author: "Eric Raymond",
    },
    {
      qoute: "You are never too old to set another goal, or to dream a dream.",
      author: "C.S Lweis",
    },
  ];

  const [bgColor, setbgColor] = useState(colors[0]);
  const [qouteDisplayed, setQouteDisplayed] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    colorGenerator = Math.floor(Math.random() * 7);
    qouteGenerator = Math.floor(Math.random() * 3);
    setbgColor(colors[colorGenerator]);
    setQouteDisplayed(qouteGenerator);
  };

  return (
    <div className="background" style={{ background: bgColor }}>
      <h1 id="heading">Random Qoute Machine</h1>
      <div className="qouteBox">
        <p id="qoute" style={{ color: bgColor }}>
          <FontAwesomeIcon icon={faQuoteLeft} className="qoutationMarks" />{" "}
          {data[qouteDisplayed].qoute}{" "}
          <FontAwesomeIcon icon={faQuoteRight} className="qoutationMarks" />
        </p>
        <p id="author" style={{ color: bgColor }}>
          ~{data[qouteDisplayed].author}
        </p>

        <a style={{ color: bgColor }} className="socials" href={twitterShare}>
          <FontAwesomeIcon icon={faSquareTwitter} id="twitter" />
        </a>
        <a style={{ color: bgColor }} className="socials" href={facebookShare}>
          <FontAwesomeIcon icon={faSquareFacebook} id="facebook" />
        </a>
        <button
          id="newQoute"
          style={{ background: bgColor, color: "white" }}
          onClick={handleClick}
        >
          New Qoute
        </button>
      </div>
      <p className="signature">By Olefile Mokgadi</p>
    </div>
  );
}

export default RandomQouteGenerator;
