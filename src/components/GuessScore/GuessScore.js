import React from 'react';
import './GuessScore.css';

const GuessScore = (props) => {
  let scores = [];
  for (let i = 0; i < props.score.perfect; i++) { scores.push('P'); };
  for (let i = 0; i < props.score.almost; i++) { scores.push('A'); };
  for (let i = 0; i < 4 - props.score.perfect - props.score.almost; i++) { scores.push('I'); };

  let baseStyle = {
    width: 10,
    height: 10,
    margin: 1,
    border: '2px solid',
    borderRadius: '50%'
  };

  let pegStyles = {
    'P': {
      borderColor: 'black',
      backgroundColor: 'black'
    },
    'A': {
      borderColor: 'black',
      backgroundColor: 'white'
    },
    'I': {
      borderColor: 'white',
      backgroundColor: 'lightgrey'
    }
  };

  return (
    <div className="GuessScore">
      {scores.map((score, idx) =>
        <div key={idx} 
             style={Object.assign({}, baseStyle, pegStyles[score])}
        />
      )}
    </div>
  );
}

export default GuessScore;
