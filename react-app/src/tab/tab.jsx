import { useState } from "react";

export default function TabView() {
  const [isProfile, setIsProfile] = useState(true);
  const [isMessages, setIsMessages] = useState(false);
  const [isSettings, setIsSettings] = useState(false);

  const handleClick = (tab) => {
    setIsProfile(false);
    setIsMessages(false);
    setIsSettings(false);

    if (tab === "profile") setIsProfile(true);
    if (tab === "messages") setIsMessages(true);
    if (tab === "settings") setIsSettings(true);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("profile")}>Профиль</button>
        <button onClick={() => handleClick("messages")}>Сообщения</button>
        <button onClick={() => handleClick("settings")}>Настройки</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {isProfile && <p>Это ваш профиль</p>}
        {isMessages && <p>У вас 5 новых сообщений</p>}
        {isSettings && <p>Настройки аккаунта</p>}
      </div>
    </div>
  );
}