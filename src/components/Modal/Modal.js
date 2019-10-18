import React, { useState } from 'react';
import urlUtils from '../../urlUtils';
import axios from 'axios';

const Modal = props => {
  const [player, setPlayer] = useState('');

  if (!props.show) {
    return null;
  }

  const handlePlayerInput = (e) => {
    e.preventDefault();
    setPlayer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const response = '';
    const data = { id: props.nextId, score: props.score, player: player };
    const obj = JSON.stringify(data);
    const url = urlUtils.base_url + '/highscore';

    let response = '';

    try {
      response = await fetch(url, {
        body: obj,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrer: 'no-referrer',
      });
      console.log(response);
    } catch (error) {
      console.error('Oh my! Got an error: ', error.message);
    }

  };


  // axios
  //   .post(url, obj)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });


  return (
    <>
      <div className="modal-container">
        <h1>Congratulations!<span>You won the game!</span></h1>
        <form onSubmit={handleSubmit}>
          <div className="section"><span>1</span>Player & Score</div>
          <div className="inner-wrap">
            <label>Player
              <input
                type="text"
                name="player"
                placeholder="Your name here..."
                onChange={(e) => handlePlayerInput(e)}
              />
            </label>
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