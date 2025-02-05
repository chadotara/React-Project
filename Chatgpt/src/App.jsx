import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import gptlogo from '../../Chatgpt/src/assets/chatgpt.svg';
import appbtn from '../../Chatgpt/src/assets/add-30.png';
import msgico from '../../Chatgpt/src/assets/message.svg';
import home from '../../Chatgpt/src/assets/home.svg';
import save from '../../Chatgpt/src/assets/bookmark.svg';
import rocket from '../../Chatgpt/src/assets/rocket.svg';
import send from '../../Chatgpt/src/assets/send.svg';
import usericon from '../../Chatgpt/src/assets/user-icon.png';
import gptimgn from '../../Chatgpt/src/assets/chatgptLogo.svg';
import { sendMsgToOpenai } from './openai';

const App = () => {

  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [message, setMessages] = useState([{

    text: "hi , i am chatgpt",
    isBot: true,
  }]);

useEffect(()=>{
  msgEnd.current.scrollIntoView();
},[message]);


  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([...message,
      {
        text, isBot:false
      }
    ])
    const res = await sendMsgToOpenai(text);
    setMessages([...message, {
      text,
      isBot: false
    },
    {
      text: res,
      isBot: true

    }])

  };



  const handleEnter = async(e) =>{
    if (e.key === 'Enter') await handleSend();
  } 

  const handleQuery = async (e) =>{
    const text = e.target.value;
    setMessages([...message,
      {
        text, isBot:false
      }
    ])
    const res = await sendMsgToOpenai(text);
    setMessages([...message, {
      text,
      isBot: false
    },
    {
      text: res,
      isBot: true

    }]);
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="" className='logo' />
            <span className='brand'>  ChatGPT</span>
          </div>
          <button className="mid-btn" onClick={()=>{window.location.reload()}}> 
            <img src={appbtn} alt="" className="addBtn" />New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={"What is Programming ?"}>
              <img src={msgico} alt="" />
            </button>
            <br />
            <button className="query" onClick={handleQuery} value={"How to use API ?"}>
              <img src={msgico} alt="" />
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listImg" />Home
          </div>

          <div className="listItems">
            <img src={save} alt="" className="listImg" />Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listImg" />Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
         

          {message.map((message, i) => {
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className='chat-img' src={message.isBot?gptimgn:usericon} alt="" />
              <p className="txt">{message.text}</p>
            </div>
          })}

          <div ref={msgEnd}/>
        </div>

        <div className="chatfooter">
          <div className="inp">
            <input
              type="text"
              placeholder='Send a Message'
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className='send' onClick={handleSend}>
              <img src={send} alt="" />
            </button>
          </div>
          <p>By messaging ChatGPT, you agree to our Terms and have read our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
