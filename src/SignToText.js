import React, { useState } from 'react';
import './SignToText.css';
import axios from 'axios';

function SignToText() {
  const [pythonStatus, setPythonStatus] = useState('');

  const handleStartClick = async () => {
    try {
      const response = await axios.get('/run-python');
      setPythonStatus(response.data);
    } catch (error) {
      console.error('Error running Python script:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="box-container">
        <div className="empty-box" id="box1">
          <div className="divider">
            <div className="divider-label-container">
              <div className="divider-label">ASL</div>
            </div>
          </div>
        </div>
        <div className="empty-box" id="box2">
          <div className="divider">
            <div className="divider-label-container">
              <div className="divider-label">Translated Text</div>
            </div>
          </div>
        </div>
      </div>
      <div className="start-button-container">
        <button type="button" className="start-button" onClick={handleStartClick}>
          Start
        </button>
      </div>
      <p>{pythonStatus}</p>
    </div>
  );
}

export default SignToText;
