import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../../src/assets/assets';
import { Context } from '../../../src/context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleSubmit = () => {
    onSent(input);
  };
 
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User icon" />
      </div>

      <div className="main-container">

        {!showResult ? <>


          <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How can I help you?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia!</p>
              <img src={assets.compass_icon} alt="compass icon" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia!</p>
              <img src={assets.bulb_icon} alt="bulb icon" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia!</p>
              <img src={assets.message_icon} alt="message icon" />
            </div>
            <div className="card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia!</p>
              <img src={assets.code_icon} alt="code icon" />
            </div>
          </div>




        </> : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
          }
          </div>
        </div>}



        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="icons">
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              {input?<img onClick={handleSubmit} src={assets.send_icon} alt="send icon" />:null}
            </div>
          </div>

          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum vitae officia? Voluptates eius modi veritatis dignissimos esse
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
