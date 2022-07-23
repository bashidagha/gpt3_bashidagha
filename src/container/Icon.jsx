import React from "react";
import Logo from "../assets/logo.svg";

const Icon = ({ name }) => {
  switch (name) {
    case "logo":
      return <img src={Logo} alt="logo"></img>;

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
