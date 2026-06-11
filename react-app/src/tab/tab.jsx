import { useState } from "react";

const TABS = {
    PROFILE: 'profile',
    MESSAGES: 'messages',
    SETTINGS: 'settings'
}

export default function TabView() {
//   const [isProfile, setIsProfile] = useState(true);
//   const [isMessages, setIsMessages] = useState(false);
//   const [isSettings, setIsSettings] = useState(false);

  const [status, setStatus] = useState(TABS.PROFILE);
//   const isProfile = status === 'profile';
//   const isMessages = status ==='messages';
//   const isSettings = status === 'settings';

  const handleClick = (tab) => {
    // setIsProfile(false);
    // setIsMessages(false);
    // setIsSettings(false);

    // if (tab === "profile") setStatus('profile');
    // if (tab === "messages") setStatus('messages');
    // if (tab === "settings") setStatus('settings');
    setStatus(tab);
  };

  const renderTabs = () => {
    switch (status) {
        case TABS.PROFILE:
            return <p>Это ваш профиль</p>;
        case  TABS.MESSAGES: 
            return <p>У вас 5 новых сообщений</p>;
        case  TABS.SETTINGS: 
            return <p>Настройки аккаунта</p>;
        default:
            return null;
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => handleClick(TABS.PROFILE)}>Профиль</button>
        <button onClick={() => handleClick(TABS.MESSAGES)}>Сообщения</button>
        <button onClick={() => handleClick(TABS.SETTINGS)}>Настройки</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {renderTabs()}
        {/* {isProfile && <p>Это ваш профиль</p>}
        {isMessages && <p>У вас 5 новых сообщений</p>}
        {isSettings && <p>Настройки аккаунта</p>} */}
      </div>
      
    </div>
  );
}