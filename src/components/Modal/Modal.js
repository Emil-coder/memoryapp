import React from 'react';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inside handleSubmit');
    console.log(event.target.elements.nextId.value);
    console.log(event.target.elements.player.value);
    console.log(event.target.elements.score.value);
  };


  console.log('inside Modal');
  console.log('nextId:' + props.nextId);
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