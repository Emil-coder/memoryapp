import React from 'react';

const Modal = props => {
  if (!props.show) {
    return null;
  }
  console.log('inside Modal');
  console.log('nextId:' + props.nextId);
  return (
    <>
      <div className="modal-container">
        <h1>Congratulations!<span>You won the game!</span></h1>
        <form>
          <div className="section"><span>1</span>Player & Score</div>
          <div className="inner-wrap">
            <input type="hidden" name="nextId" value={props.nextId} />
            <label>Player <input type="text" name="player" id="player" /></label>
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