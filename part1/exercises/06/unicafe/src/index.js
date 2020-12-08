import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
};

const Statistic = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = all / 3;
  const positive = (props.good / all) * 100;
  const positiveStr = positive + " %";

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <Statistic text={'Good'} value={props.good} />
      <Statistic text={'Neutral'} value={props.neutral} />
      <Statistic text={'Bad'} value={props.bad} />
      <Statistic text={'All'} value={all} />
      <Statistic text={'Average'} value={average} />
      <Statistic text={'Positive'} value={positiveStr} />
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
