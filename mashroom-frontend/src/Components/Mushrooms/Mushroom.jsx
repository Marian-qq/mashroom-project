import React, { useEffect, useState } from "react"
import "./Mushroom.css"
import { store } from "../../Store/store"
import { observer } from "mobx-react"
import axios from "axios"

const ADD_COINS_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/addCoins?tgId=';

const Mushroom = observer(() => {
  const [scale, setScale] = useState(1); // mushroom scale
  const [isClicked, setIsClicked] = useState(false);
  const [clicks, setClicks] = useState([]); // list of clicks

  const handleClick = (e) => {
    if (store.totalEnergy > 0) {
      setIsClicked(true);
      setScale((prevScale) => prevScale + 0.05); // increasing mushroom size
      //setTotalEnergy(totalEnergy - 1); // using Mobx instead
      //setTotalClicks(totalClicks + 1); // using Mobx instead
      store.setTotalEarnedCoins();
      store.decreaseTotalEnergy();

      // retrieving clicks coordinates
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - boundingRect.left;
      const y = e.clientY - boundingRect.top;

      // Numbers animation appearing
      setClicks((prevClicks) => [
        ...prevClicks,
        { id: Date.now(), x, y, value: "+1" },
      ]);

      // Numbers animation disappearing
      setTimeout(() => {
        setClicks((prevClicks) =>
          prevClicks.filter((click) => click.id !== Date.now())
        );
      }, 1000);
      axios.post(
         `${ADD_COINS_URL}${store.user.tg_id}`
      );
    }
  };

  // Mushroom size decreasing
  useEffect(() => {
    let timer;

    if (!isClicked && scale > 1) {
      timer = setTimeout(() => {
        setScale((prevScale) => (prevScale > 1 ? prevScale - 0.01 : 1));
      }, 50); 
    }

    return () => clearTimeout(timer); 
  }, [scale, isClicked]);

  useEffect(() => {
    if (isClicked) {
      const clickResetTimer = setTimeout(() => {
        setIsClicked(false); 
      }, 300);

      return () => clearTimeout(clickResetTimer); 
    }
  }, [isClicked]);


  // useEffect(() => {
  //   const maxEnergy = 15;
  //   const fullEnergy = setTimeout(() => {
  //     setTotalEnergy((prevEnergy) => (prevEnergy < maxEnergy ? prevEnergy + 1 : maxEnergy))
  //   }, 2000)
  //   return () => clearTimeout(fullEnergy);
  // }, [totalEnergy])

  return (
    <div
      className="mushroom-logo"
      onClick={handleClick}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="mushroom-head">
        {clicks.map((click) => (
          <span
            key={click.id}
            className="click-number"
            style={{
              left: `${click.x - 10}px`,
              top: `${click.y - 10}px`,
            }}
          >
            {click.value}
          </span>
        ))}
      </div>
      <div className="mushroom-foot"></div>
    </div>
  );
})

export default Mushroom