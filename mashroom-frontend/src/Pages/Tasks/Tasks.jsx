import React, { useState } from "react";
import "./Tasks.css";
import xIcon from "../../Images/x-icon.png";
import tgIcon from "../../Images/tg-icon.png";
import inviteIcon from "../../Images/inviteFriend-icon.png";
import igIcon from "../../Images/ig-icon.png";
import coinIcon from "../../Images/coin-icon.png";


const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dailyCoinRewards = [
    { day: 1, reward: 100 },
    { day: 2, reward: 200 },
    { day: 3, reward: 300 },
    { day: 4, reward: 400 },
    { day: 5, reward: 500 },
    { day: 6, reward: 600 },
    { day: 7, reward: 700 },
    { day: 8, reward: 800 },
    { day: 9, reward: 900 },
    { day: 10, reward: 1000 },
    { day: 11, reward: 1300 },
    { day: 12, reward: 1600 },
    { day: 13, reward: 1900 },
    { day: 14, reward: 2200 },
    { day: 15, reward: 2500 },
    { day: 16, reward: 2800 },
    { day: 17, reward: 3100 },
    { day: 18, reward: 3400 },
    { day: 19, reward: 4000 },
    { day: 20, reward: 5000 },
  ];

  const tasks = [
    {
      description: "Subscribe to our Telegram",
      coinsReward: 50,
      link: "https://www.google.com",
      image: tgIcon,
    },
    { description: "Follow us on X",
      coinsReward: 50,
      link: "",
      image: xIcon
    },
    {
      description: "Subscribe to our Instagram",
      coinsReward: 50,
      link: "",
      image: igIcon,
    },
    {
      description: "Invite 1 friend",
      coinsReward: 50,
      link: "",
      image: inviteIcon,
    },
    {
      description: "Invite 3 friends",
      coinsReward: 200,
      link: "",
      image: inviteIcon,
    },
    {
      description: "Invite 5 friends",
      coinsReward: 500,
      link: "",
      image: inviteIcon,
    },
    {
      description: "Invite 10 friends",
      coinsReward: 1500,
      link: "",
      image: inviteIcon,
    },
  ];

  const onChangeTaskTab = () => {
    setActiveTab(1);
  };

  const onChangeCheckinTab = () => {
    setActiveTab(2);
  };

  return (
    <div className="tasks-page">
      <div className="nav-btns">
        <div>
          <button
            onClick={onChangeTaskTab}
            className="tasks-btn"
            style={{
              backgroundColor:
                activeTab === 1 ? "rgb(179, 175, 175)" : "transparent",
            }}
          >
            Tasks
          </button>
          <button
            onClick={onChangeCheckinTab}
            className="checkin-btn"
            style={{
              backgroundColor:
                activeTab === 2 ? "rgb(179, 175, 175)" : "transparent",
            }}
          >
            Daily check-in
          </button>
          {/* <button></button> Optional*/}
        </div>
      </div>

      {activeTab === 1 && (
        <div className="tasks">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <img src={task.image} alt=".png" />
              <p
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(task.link, "_blank");
                }}
              >
                {task.description}
              </p>
              <div>
                +{task.coinsReward}
                <img src={coinIcon} alt=".png" />
                <button onClick={() => console.log("claim")}>Claim</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        <>
          <div className="daily-rewards">
            {dailyCoinRewards.map((elem, index) => (
              <div className="reward" key={index}>
                <p>
                  Day:{elem.day}
                </p>
                <div>
                  <span>{elem.reward}</span>
                  <img src={coinIcon} alt=".png" />
                </div>
              </div> 
            ))}
          </div>
          <button className="claim-btn" onClick={() => console.log("claim")}>Claim</button>
        </>
      )}

      {/* </div> */}
    </div>
  );
};

export default Tasks;
