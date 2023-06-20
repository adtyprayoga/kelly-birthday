import React, { useState, useRef } from "react";
import Confetti from "react-dom-confetti";
import { css, injectGlobal } from "@emotion/css";

const Birthday = (props) => {
  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [state, setState] = useState({
    item: "🎁",
    confetti: false,
    hint: "(don't forget to open your present!)"
  });

  const style = {
    fontFamily: "Fredoka One",
  };
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    decay: 0.9,
  };

  const audio = useRef(null);

  const togglePlay = (e) => {
    const song = window.location.href + "audio/happy-birthday.mp3";
    if (currentSong === song) {
        if (!isPlaying) {
            audio.current.play()
        }
      setPlaying(!isPlaying);
    } else {
      if (audio.current) {
        audio.current.pause();
      }

      setCurrentSong(song);
      setPlaying(true);
      audio.current = new Audio(song);
      audio.current.play();
    }
  };

  const openPresent = () => {

    let presents = [
      "😺",
      "💐",
      "🎊",
      "🎈",
      "🎉",
      "✨",
      "🎇",
      "🎆",
      "🐇",
      "🦆",
      "🍂",
      "🎂",
    ];

    setState({
      item: presents[Math.floor(Math.random() * Math.floor(presents.length))],
      confetti: true,
      hint: "",
    });
  };

  const handleClick = () => {
    togglePlay();
    openPresent();
  }

  return (
    <div>
      <div className={titleContainer}>
        <div style={style} className={hint}>
          {state.hint}
        </div>
      </div>
      <div className={presentContainer}>
        <Confetti active={state.confetti} config={config} />
        <button className={presentButton} onClick={handleClick}>
          {state.item}
        </button>
      </div>
    </div>
  );
};

export default Birthday;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
  body {}
  body { color: black; }
`;
const titleContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
  }
`;
const presentContainer = css`
  display: flex;
  justify-content: center;
`;
const presentButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
  &:hover {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
`;

const hint = css`
  font-size: 10px;
`;
