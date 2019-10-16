import React from 'react';

const Modal = props => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal-container">
        <h1>Congratulations!<span>You won the game!</span></h1>
        <form>
          <div className="section"><span>1</span>Player & Score</div>
          <div className="inner-wrap">
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