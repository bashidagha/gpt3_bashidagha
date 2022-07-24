import React from "react";
import Logo from "../assets/logo.svg";
import ai from "../assets/ai.png";
import people from "../assets/people.png";
import google from "../assets/google.png";
import dropbox from "../assets/dropbox.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import atlassian from "../assets/atlassian.png";

const Icon = ({ name }) => {
  switch (name) {
    case "logo":
      return <img src={Logo} alt="logo"></img>;
      
    case "ai":
      return <img src={ai} alt="ai"></img>;
      
    case "people":
      return <img src={people} alt="people"></img>;

    case "google":
      return <img src={google} alt="google"></img>;


    case "atlassian":
      return <img src={atlassian} alt="atlassian"></img>;


    case "shopify":
      return <img src={shopify} alt="shopify"></img>;


    case "dropbox":
      return <img src={dropbox} alt="dropbox"></img>;


    case "slack":
      return <img src={slack} alt="slack"></img>;

    case "list":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          color="#fff"
          height="27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
          </g>
        </svg>
      );
    default:
      return <></>;
  }
};

export default Icon;
