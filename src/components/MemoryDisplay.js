import React from 'react';
import Field from './Field';

// Displaying the Memory fields
const MemoryDisplay = props => (
  <>
    {
      props.gameState.map(obj =>
        <Field key={obj.id} obj={obj} onClick={props.onClick} shouldShow={props.shouldShow} />
      )
    }
  </>
);

export default MemoryDisplay;