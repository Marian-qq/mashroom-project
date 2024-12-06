import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import tapIcon from "../../Images/tap-icon.png";
import tasksIcon from "../../Images/tasks-icon.png";
import friendsIcon from "../../Images/friends-icon.png";
import addonsIcon from "../../Images/addons-icon.png";
import airdropIcon from "../../Images/airdrop-icon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/friends">
            <img src={friendsIcon} alt="friends-icon.png" />
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks">
            <img src={tasksIcon} alt="tasks-icon.png" />
            <span>Tasks</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={tapIcon} alt="tap-icon.png" />
            <span>Tap</span>
          </Link>
        </li>
        <li>
          <Link to="/addons">
            <img src={addonsIcon} alt="addons-icon.png" />
            <span>Add-ons</span>
          </Link>
        </li>
        <li>
          <Link to="/airdrop">
            <img src={airdropIcon} alt="airdrop-icon.png" />
            <span>Airdrop</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
