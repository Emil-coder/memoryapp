import React, { useState, useEffect } from 'react';

import getInitialState from '../math-utils';
import MemoryDisplay from './MemoryDisplay';
import HighScoreDisplay from './HighScoreDisplay';
import lang from './lang';
import Modal from './Modal/Modal';


const Game = () => {

  return (
    <MemoryBoard />
  );
};


const MemoryBoard = () => {
  const [gameState, setGameState] = useState(getInitialState());
  const [faultyGameState, setFaultyGameState] = useState(false);
  const [winnerState, setWinnerState] = useState(false);
  const [timeToWinState, setTimeToWinState] = useState(0);
  const [startGameState, setStartGameState] = useState(false);
  const [showModalState, setShowModalState] = useState(false);
  // Får inte använda getHighScores() i useState eftersom det är en sidoeffekt. Då måste man använda useEffect
  // useState måste från början använda ett rent state och får inte ha nån sidoeffekt i grund-statet. 
  // fetch() och timeout() skapar sideeffects och är alltså inga pure functions som kan användas i useState.



  const shouldShow = (obj) => {
    const bBool = obj.isSelected || obj.isLocked;
    return bBool;
  };


  const onClickHandler = (id) => {
    // Start the Game when first button is pressed...
    if (!startGameState) { setStartGameState(true); }

    if (gameState.filter(field => field.isSelected).length >= 2) {
      return;
    }
    //find the object from array that you want to update
    const obj = gameState.find(obj => obj.id == id);

    // Only toggle state if the object is not locked, that is isLocked = true
    if (obj.isLocked || obj.isSelected) { return; }
    obj.isSelected = !obj.isSelected;

    // make final new array of objects by combining updated object.    

    // Set the new game state if the object is not locked.
    // Spreading ...obj so we don't mutate.
    setGameState([...gameState.filter(field => field.id != id), { ...obj }]);


    if (gameState.filter(field => field.isSelected).length == 2) {

      // With the same colors...
      if (gameState.filter(field => field.isSelected)[0].color == gameState.filter(field => field.isSelected)[1].color) {

        const notSelected = gameState.filter(field => !field.isSelected);
        const updateArr = gameState.filter(field => field.isSelected);
        updateArr.forEach(obj => {
          obj.isSelected = false;
          obj.isLocked = true;
        });

        setGameState([...notSelected, ...updateArr]);

        // Check if all fields have been locked and the winner has been crowned...!!
        if ([...gameState.filter(field => field.isLocked == true)].length == gameState.length) {
          setWinnerState(true);
        }

        // With different colors...
      } else {

        // Close the two selected. unselect them with a time delay...
        setFaultyGameState(true);
      }
    }

  };


  useEffect(() => {
    const resetState = () => {
      const notSelected = gameState.filter(field => !field.isSelected);
      const updArr = [];
      gameState.filter(field => field.isSelected == true).forEach((obj) => {
        obj.isSelected = false;
        updArr.push(obj);
      });

      const newGameState = [...notSelected, ...updArr];
      return newGameState;
    };


    if (faultyGameState) {
      const timerId = setTimeout(() => setGameState(resetState()), 2000);

      return function cleanup() {
        clearTimeout(timerId);
        setFaultyGameState(false);
      };
    }

  }, [faultyGameState, gameState]);


  useEffect(() => {
    if (winnerState && !showModalState) {
      setShowModalState(true);
      const timerId = setTimeout(() => alert('Congratulations - You won the game in ' + timeToWinState + 's!!!'), 3000);

      return function cleanup() {
        clearTimeout(timerId);
      };
    }

  }, [showModalState, timeToWinState, winnerState]);

  // Count up the time passed every second...
  useEffect(() => {
    if (!startGameState) { return; }
    if (!winnerState) {
      const timerId = setTimeout(() => setTimeToWinState(timeToWinState + 1), 1000);
      return () => clearTimeout(timerId);
    }
  });

  const showModal = (e) => {
    setShowModalState(!showModalState);
  };

  return (
    <div className="game">
      <div className="title">
        <h1>Memory</h1>
        <div className="help"><h4>{lang.helpText}</h4></div>
      </div>
      <div className="container">
        <div className="left-half">
          <HighScoreDisplay />
        </div>
        <div className="right-half">
          <div className="memory-board">
            <MemoryDisplay onClick={onClickHandler} gameState={gameState.sort((curr, next) => curr.id - next.id)} shouldShow={shouldShow} />
          </div>
        </div>
      </div>
      <div className="timer">Time Passed: {timeToWinState}s</div>
      <button onClick={e => { showModal(e); }}> show modal </button>
      <div className="modal"><Modal show={showModalState} score={timeToWinState} /></div>
    </div >


  );


};

export function App() {
  return (
    <Game />
  );
}
