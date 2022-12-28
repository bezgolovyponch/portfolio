import React from "react";
import Typewriter from "typewriter-effect";



export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="title">
          Frontend developer, designer & manager.
        </h1>
        <h2 className="subtitle">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I design and code beautifully simple things that work.")
                .start();
            }}
          />
        </h2>
        <img className="avatar" alt="avatar" src="https://static.thenounproject.com/png/59740-200.png"></img>
        <div className="container">
          <img className="web-dev" alt="web dev" src="https://www.svgrepo.com/show/201014/computer-monitor.svg"></img>
        </div>
      </div>
      <div className="about-story-back">
        <div className="story-contain">
        <h1 className="text-story">
            Hi, I am Max, nice to meet you,
          </h1>
          <h2 className="text-story"> 
          This page was created to stand out from the other applicants, as well as to show a piece of my work. Whether it came out or not is up to you to decide.
          </h2>
        </div>
      </div>
    </div>
  )
}