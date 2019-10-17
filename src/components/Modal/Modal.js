import React from 'react';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inside handleSubmit');
    const nextId = event.target.elements.nextId.value;
    const player = event.target.elements.player.value;
    const score = event.target.elements.score.value;

    const newObj = {
      'id': nextId,
      'player': player,
      'score': score,
    };

    console.log(newObj);

    // TODO: post newObj to /highscore on the server and let that method write the object to file highscoreData.json

  };


  return (
    <>
      <div className="modal-container">
        <h1>Congratulations!<span>You won the game!</span></h1>
        <form onSubmit={handleSubmit}>
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