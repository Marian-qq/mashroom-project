import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Pages/Main/Main";
import { store } from "./Store/store";
import axios from "axios";

const TG = window.Telegram.WebApp;
//const GET_USER_URL = 'http://localhost:3001/getUse?tgUserUuid=';
//const CREATE_USER_URL = 'http://localhost:3001/createUser';

const GET_USER_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/getUser?tgId=';
const CREATE_USER_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/createUser';

function App() {
  const [user, setUser] = useState({});
  const [tgUser, setTgUser] = useState({});

  useEffect(() => {
    TG.ready();
    console.log(TG.initDataUnsafe);
    setTgUser(TG.initDataUnsafe); 
  }, [])

  useEffect(() => {
    checkUser();
  }, [tgUser]);

  const checkUser = async () => {
    try {
      const response = await axios.get(
        `${GET_USER_URL}${tgUser.user.id}`
      );
      if (response.data && response.data.content) {
        setUser(response.data.content);
        store.setUser(response.data.content);
      } else {
        await axios.post(`${CREATE_USER_URL}`, {
          tgUserName: tgUser.user.username,
          tgId: tgUser.user.id,
        });

        const getUserResponse = await axios.get(
          `${GET_USER_URL}${tgUser.user.id}`
        );
        setUser(getUserResponse.data.content);
        store.setUser(getUserResponse.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;