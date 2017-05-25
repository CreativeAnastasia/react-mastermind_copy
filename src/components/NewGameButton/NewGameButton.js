import React from 'react';

const NewGameButton = (props) => {
  return (
    <button  className="btn btn-primary" style={{margin: 10}} onClick={props.handleReset}>
      New Game
    </button>
  );
}

export default NewGameButton;
