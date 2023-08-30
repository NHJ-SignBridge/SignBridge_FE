import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Learning.css';
import alphabetIcon from './images/alphabeticon.jpg';
import numbersIcon from './images/numbersicon.jpg';
import animalIcon from './images/animalicon.jpg';
import foodIcon from './images/foodicon.jpg';
import quizImage from './images/quiz.jpg'

function Learning() {
  const [notification, setNotification] = useState('');
  const [showPracticeBox, setShowPracticeBox] = useState(false);
  const [showQuizBox, setShowQuizBox] = useState(false);

  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Fetch initial data when the component mounts
    sendBackendInfo('initial');
  }, []);

  const handlePracticeClick = (category) => {
    sendBackendInfo(`${category}`);
    setShowPracticeBox(true);
    setShowQuizBox(false);
  };

  const handleQuizClick = (category) => {
    sendBackendInfo(`${category}`);
    setShowQuizBox(!showQuizBox);
    setShowPracticeBox(false);
  }

  const sendBackendInfo = (action) => {
    console.log(action)
    fetch('/Learning/practice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category:action }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProblems(data.problems); // Assuming the response contains an array of problem objects
        setIsLoading(false);
        console.log("Received data from backend:", data.problems); // Add this line to log data
        const que = data.map;
        console.log(que);
      })
      .catch(() => {
        setNotification(`Failed to fetch data for "${action}".`);
        setTimeout(() => {
          setNotification('');
        }, 3000);
      });
  };

  
  

  return (
    <div>
      <div className="title">What would you like to learn today?</div>
      <div className="container">
        <div className="box alphabet-box">
          <img
            src={alphabetIcon}
            alt="Alphabet Icon"
            style={{ width: '100px', height: '100px', marginLeft: '125px' }}
          />
          <div className="box-label">ALPHABET</div>
          <div className="description-text">
            Learn how to sign English alphabets in ASL!
          </div>
          <div
            className="practice-alphabet"
          >
            <button className="alphabet-button" onClick={() => handlePracticeClick('ALPHABET')}>Practice</button>
          </div>
          <div
            className="quiz-alphabet"
          >
            <button className="alphabet-button" onClick={() => handleQuizClick('ALPHABET')}>Quiz</button>
          </div>
        </div>

        <div className="box numbers-box">
          <img
            src={numbersIcon}
            alt="Numbers Icon"
            style={{ width: '100px', height: '100px', marginLeft: '125px' }}
          />
          <div className="box-label">Numbers</div>
          <div className="description-text">
            Learn how to sign numbers in ASL! 
          </div>
          <div
            className="practice-number"
          >
            <button className="number-button" onClick={() => handlePracticeClick('number')}>Practice</button>
          </div>
          <button className="number-button" onClick={() => handleQuizClick('number')}>Quiz</button>
        </div>

        <div className="box animals-box">
          <img
            src={animalIcon}
            alt="Animal Icon"
            style={{ width: '100px', height: '100px', marginLeft: '125px' }}
          />
          <div className="animalbox-label">Animals</div>
          <div className="description-text">
            Learn how to sign Animals in ASL!
          </div>
          <button className="animal-button" onClick={() => handlePracticeClick('animal')}>Practice</button>
          <button className="animal-button" onClick={() => handleQuizClick('animal')}>Quiz</button>
        </div>

        <div className="box food-box">
          <img
            src={foodIcon}
            alt="Food Icon"
            style={{ width: '100px', height: '100px', marginLeft: '125px' }}
          />
          <div className="foodbox-label">Food</div>
          <div className="description-text">
            Learn how to sign food in ASL! 
          </div>
          <button className="food-button" onClick={() => handlePracticeClick('food practice')}>Practice</button>
          <button className="food-button" onClick={() => handleQuizClick('quiz practice')}>Quiz</button>
        </div>
        

        {showPracticeBox && (
        <div className="practice-container">
          <div className="practice-box-content">
            <div className="practice-tab">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <Carousel showThumbs={false} showStatus={false}>
                  {problems.map((problem) => (
                    <div key={problem.number} className="practice-item">
                      <img src={problem.imageUrl} alt={`Problem ${problem.number}`} className="carousel-image" />
                      <p className="ordinal-text"> {problem.number} of 26</p>
                      <p className="instruction-text"> This sign means</p>
                      <p className="keyword-text">{problem.keyword}</p>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
        )}

        {showQuizBox && (
                <div className="quiz-container">
                  <div className="quiz-box-content">
                    <div className='quiz-tab'>
                      <p> The Quiz feature is soon to be added! Below picture is the preview of the quiz feature </p>
                      <img src={quizImage} style={{ width: '500px', marginTop: '10px', marginLeft: '550px', borderRadius: '30px'}} />
                      </div>
                    </div>
                </div>
              )}  
      </div>
      <div className="notification">{notification}</div>
    </div>
  );
}

export default Learning;


