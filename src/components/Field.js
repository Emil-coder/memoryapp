import React from 'react';

// One Memory field
const Field = props => {
  const color = props.shouldShow(props.obj) ? props.obj.color : 'grey';

  return (
    <div className="mem-field">
      <button
        style={{ backgroundColor: color }}
        onClick={() => props.onClick(props.obj.id)}
      >
      </button>
    </div >
  );
};

export default Field;