import React, { useState, useEffect } from 'react';
import getHighScores from '../data-utils';
import HighScoreItem from './HighScoreItem';

// Displaying the Highscore fields
const HighScoreDisplay = () => {
  const [highScores, setHighScores] = useState([]);
  const [highScoreFetched, setHighScoreFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!highScoreFetched) {// You can await here
        const data = await getHighScores();
        setHighScores(data);
        setHighScoreFetched(true);
        console.log(data);
      }
    };
    fetchData();
  }, [highScoreFetched]);

  return (
    <>
      <h3>HighScores</h3>
      <div className="highscore-headers">
        <div className="highscore-headers-left"><h4>Player:</h4></div>
        <div className="highscore-headers-right"><h4>Score:</h4></div>
      </div>
      <div className="highscores-result">
        {
          highScores.sort((curr, next) => curr.score - next.score).map(obj =>
            <HighScoreItem key={obj.id} obj={obj} />
          )
        }
      </div>
    </>
  );

};


export default HighScoreDisplay;

/*
getHighScores().then(data =>{
setHighScores(data);
setHighScoreFetched(true);
console.log(data);
});
*/
/*
const MemoryDisplay = props => (
  <>
    {
      props.gameState.map(obj =>
        <Field key={obj.id} obj={obj} onClick={props.onClick} shouldShow={props.shouldShow} />
      )
    }
  </>
);
*/