import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';  // Ensure this import path is correct
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prePrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);  // Set recent prompt
    await onSent(prompt);      // Call onSent to process it
  };

  return (
    <div className='sidebar'>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prePrompt.map((item, index) => {
              return (<div 
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="message icon" />
                <p>{item.slice(0, 18)} ...</p>
              </div>)
            })}
          </div>
          : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
