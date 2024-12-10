import React, { useEffect, useState } from "react";
import { store } from "../../Store/store";
import "./Friends.css";
import copyIcon from "../../Images/copy-icon.png";
import checkIcon from "../../Images/check-icon.png";

const Friends = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  // const [refsList, setRefsList] = useState([]);

  const referralLink = `https://t.me/qq_doggy_bot?startapp=${store.user.tgId}`;
  // const refs = [
  //   { name: "John", coins: "10000" },
  //   { name: "John", coins: "10000" },
  //   { name: "John", coins: "10000" },
  //   { name: "John", coins: "10000" },
  //   { name: "John", coins: "10000" },
  //   { name: "John", coins: "10000" },
  // ];
  // useEffect(() => {
  // retrieve referrals list logic
  // }, []);

  const copyReferralLink = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(""), 2000);
      })
      .catch((err) => {
        console.error("Something went wrong.", err);
      });
  };

  const openTelegramShare = () => {
    const textMessage =
      "Invite you to join me in new play to earn game. Come and grab some coins in MUSHROOM Tapping Game.";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      referralLink
    )}&text=${encodeURIComponent(textMessage)}`;

    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="invite-page">
      <h1>Invite your friends</h1>

      {/* <div className="friends-list">
        <table>
          <caption>Total friends: {refs.length}</caption>
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Coins</td>
            </tr>
          </thead>
          <tbody>
            {refs.map((ref, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ref.name}</td>
                <td>{ref.coins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="link-btns">
        <button className="share-btn" onClick={openTelegramShare}>
          Share link via Telegram
        </button>
        <button className="copy-btn" onClick={copyReferralLink}>
          {copyStatus ? (
            <img src={checkIcon} alt="check-icon.png" />
          ) : (
            <img src={copyIcon} alt="copy-icon.png" />
          )}
        </button>
      </div>

    </div>
  );
};

export default Friends;
