import React, { useEffect, useState } from "react";
import { store } from "../../Store/store";
import "./Friends.css";
import copyIcon from "../../Images/copy-icon.png";
import checkIcon from "../../Images/check-icon.png";
import { observer } from "mobx-react";

const Friends = observer(() => {
  const [copyStatus, setCopyStatus] = useState(false);
  // const [refsList, setRefsList] = useState([]);

  const referralLink = `https://t.me/qq_doggy_bot/mashroom?startapp=${store.user.tg_id}`;
  const refs = [
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
    { name: "John", coins: "10000" },
  ];
  // useEffect(() => {
  // retrieve referrals list logic
  // }, []);

  // const copyReferralLink = () => {
  //   navigator.clipboard
  //     .writeText(referralLink)
  //     .then(() => {
  //       setCopyStatus(true);
  //       setTimeout(() => setCopyStatus(false), 2000);
  //     })
  //     .catch((err) => {
  //       console.error("Something went wrong.", err);
  //     });
  // };

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink).then(() => {
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
      });
    } catch (err) {
      console.error("Something went wrong.", err);
    }
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

      <p>
        You and your friend will get 100 coins or in case your friend has TG Premium you both will get 500 coins.
      </p>

      <div className="friends-list">
        <div>

          <table>
            <caption>Total friends: {refs ? refs.length : 0}</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Coins</th>
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

        </div>
      </div>

      <div className="link-btns">
        <button className="share-btn" onClick={openTelegramShare}>
          Share link via Telegram
        </button>
        <button className="copy-btn" onClick={copyReferralLink}>
          {copyStatus ? (
            <div>
              <img src={checkIcon} alt="check-icon.png" />
              <span>Copied!</span>
            </div>
          ) : (
            <img src={copyIcon} alt="copy-icon.png" />
          )}
        </button>
      </div>
    </div>
  );
});

export default Friends;
