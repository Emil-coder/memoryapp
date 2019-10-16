import React from 'react';

// One Highscore field
const HighScoreItem = props => {

  return (
    <>
      <div className="highscore-field">
        <div className="highscore-field-left">
          {props.obj.player}
        </div>
        <div className="highscore-field-right">
          {props.obj.score}s
        </div>
      </div>
    </>
  );

};

export default HighScoreItem;