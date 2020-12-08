import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
};

const Display = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  );
};

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGoodValue = () => { setGood(good + 1); };
  const incNeutralValue = () => { setNeutral(neutral + 1); };
  const incBadValue = () => { setBad(bad + 1); };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={incGoodValue} text={'Good'} />
      <Button handleClick={incNeutralValue} text={'Neutral'} />
      <Button handleClick={incBadValue} text={'Bad'} />
      <h2>Statistics</h2>
      <Display text={'Good'} value={good} />
      <Display text={'Neutral'} value={neutral} />
      <Display text={'Bad'} value={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
