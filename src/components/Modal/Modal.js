import React from 'react';
import urlUtils from '../../urlUtils';
import axios from 'axios';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('inside handleSubmit');
    const nextId = event.target.elements.nextId.value;
    const player = event.target.elements.player.value;
    const score = event.target.elements.score.value;

    // https://malcoded.com/posts/react-http-requests-axios/
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // https://www.youtube.com/watch?v=x9UEDRbLhJE

    const data = {
      'id': nextId,
      'player': player,
      'score': score,
    };

    const url = urlUtils.base_url + '/highscore';
    axios
      .post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });


    // TODO: post newObj to /highscore on the server and let that method write the object to file highscoreData.json

  };


  return (
    <>
      <div className="modal-container">
        <h1>Congratulations!<span>You won the game!</span></h1>
        <form onSubmit={submitHandler}>
          <div className="section"><span>1</span>Player & Score</div>
          <div className="inner-wrap">
            <input type="hidden" name="nextId" value={props.nextId} />
            <input type="hidden" name="score" value={props.score} />
            <label>Player <input type="text" name="player" placeholder="Your name here..." /></label>
            <label>Score: {props.score}s</label>
          </div>

          <div className="button-section">
            <input type="submit" name="save" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;