import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* a.1 Component */

const App1 = () => (
  <div>
    <p>Hello world</p>
  </div>
);

// Rendering dynamic content

const App1_2 = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

/* a.2 JSX */

const App2 = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  );
};

/* a.3 Multiple components */

const Hello3 = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App3 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello3 />
    </div>
  );
};

// A component can be used multiples times

const App3_2 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello3 />
      <Hello3 />
      <Hello3 />
    </div>
  );
};

/* a.4 props: passing data to components */

const Hello4 = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App4 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello4 name="George" />
      <Hello4 name="Daisy" />
    </div>
  );
};

// two props

const Hello4_2 = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App4_2 = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello4_2 name="Maya" age={26 + 10} />
      <Hello4_2 name={name} age={age} />
    </div>
  );
};

// a.5 Some notes

// React component names must be capitalized

const Footer5 = () => {
  return (
    <div>
      gretting app created by dev
    </div>
  );
};

const App5 = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello4_2 name="Maya" age={26 + 10} />
      <Footer5 />
    </div>
  );
};

// The following component is not valid because no root element is present.

/*
const App5_2 = () => {
  return (
    <h1>Greetings</h1>
    <Hello4_2 name="Maya" age={26 + 10} />
    <Footer5 />
  );
};
*/

// An array of components is valid

const App5_3 = () => {
  return [
    <h1>Greetings</h1>,
    <Hello4_2 name="Maya" age={26 + 10} />,
    <Footer5 />
  ];
};

// Fragments can be used to avoid extra div elements

const App5_4 = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello4_2 name="Maya" age={26 + 10} />
      <Hello4_2 name={name} age={age} />
      <Footer5 />
    </>
  )
}

/* Component state, event handlers */

const Hello5 = ({ name, age }) => {
  /* Component helper functions */

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - props.age;
  // };

  /* Destructuring */
  // const name = props.name;
  // const age = props.age;

  // const { name, age } = props;
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App6 = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello5 name="Maya" age={26 + 10} />
      <Hello5 name={name} age={age} />
    </div>
  );
};

/* Page re-rendering */

const App7 = (props) => {
  const { counter } = props;
  return (
    <div>{counter}</div>
  );
};

let counter = 1;

const refresh = () => {
  ReactDOM.render(<App7 counter={counter} />, document.getElementById('root'));
}

// refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh();

// setInterval(() => {
//   refresh();
//   counter += 1
// }, 1000);

/* Stateful Component */

// import useState

const App8 = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(
    () => setCounter(counter + 1),
    1000
  );

  return (
    <div>{counter}</div>
  );
};

/* Event handling */

const App9 = () => {
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log('click');
  // };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  );
};

// ReactDOM.render(<App9 />, document.getElementById('root'));

/* Event handler is a function */

const App10 = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

// ReactDOM.render(<App10 />, document.getElementById('root'));

/* Passing state to child components */

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

const App11 = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display2 counter={counter} />
      <Button2 handleClick={increaseByOne} text='plus'></Button2>
      <Button2 handleClick={setToZero} text='zero'></Button2>
      <Button2 handleClick={decreaseByOne} text='minus'></Button2>
    </div>
  );

  // return (
  //   <div>
  //     <Display counter={counter} />
  //     <button onClick={increaseByOne}>plus</button>
  //     <button onClick={setToZero}>zero</button>
  //   </div>
  // );
};

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
};

/* Refactoring the components */

const Display2 = ({ counter }) => <div>{counter}</div>;
const Button2 = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// ReactDOM.render(<App11 />, document.getElementById('root'));

/* A more complex state, debugging React apps */

const App12 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  );
};

// ReactDOM.render(<App12 />, document.getElementById('root'));

const App13 = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   };
  //   setClicks(newClicks);
  // };

  // const handleRightClick = () => {
  //   const newClicks = {
  //     left: clicks.left,
  //     right: clicks.right + 1
  //   };
  //   setClicks(newClicks);
  // };

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1
  //   };
  //   setClicks(newClicks);
  // };

  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1
  //   };
  //   setClicks(newClicks);
  // };

  // It's best not to directly update the state like the following:

  // const handleLeftClick = () => {
  //   clicks.left++;
  //   setClicks(clicks);
  // };

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 });

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

// ReactDOM.render(<App13 />, document.getElementById('root'));

/* Handling arrays */

const App14 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  // Don't do this. It's best not to mutate the state directly.

  // const handleLeftClick = () => {
  //   allClicks.push('L');
  //   setAll(allClicks);
  //   setLeft(left + 1);
  // };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  );
};

// ReactDOM.render(<App14 />, document.getElementById('root'));

/* Conditional rendering */

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (<div>the app is used by pressing the buttons</div>);
  }
  return (<div>button press history: {props.allClicks.join(' ')}</div>);
};

const App15 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

// ReactDOM.render(<App15 />, document.getElementById('root'));

/* Rules of Hooks */

// const App16 = () => {
//   // These are ok
//   const [age, setAge] = useState(0);
//   const [name, setName] = useState('Juha Tauriainen');

//   if (age > 10) {
//     // This does not work!
//     const [foobar, setFoobar] = useState(null);
//   }

//   for (let i = 0; i < age; i++) {
//     // Also, this is not good.
//     const [rightWay, setRightWay] = useState(false);
//   }

//   const notGood = () => {
//     // and this is also illegal
//     const [x ,setX] = useState(-1000);
//   }

//   return (
//     <div></div>
//   );
// };

/* Event Handling Revisited */

const App17 = () => {
  const [value, setValue] = useState(10);

  // The following button click handlers will not work.

  // (<button onClick="test"></button>);

  // (<button onClick={value + 1}></button>);

  // (<button onClick={value = 0}></button>);

  // (<button onClick={console.log('clicked the button')}></button>);

  // (<button onClick={setValue(0)}></button>);

  // The following handler will work.

  // (<button onClick={() => console.log('clicked the button')}></button>);

  // (<button onClick={() => setValue(0)}></button>);

  const handleClick = () => {
    console.log('clicked the button');
    setValue(0);
  };

  // return(
  //   <div>
  //     {value}
  //     <button>reset to zero</button>
  //   </div>
  // );

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  );
};

// ReactDOM.render(<App17 />, document.getElementById('root'));

/* Function that return a function */

const App18 = () => {
  const [value, setValue] = useState(10);

  // const hello = (who) => {
  //   const handler = () => {
  //     console.log('hello', who);
  //   }
  //   return handler;
  // };

  // Removing first the constant

  // const hello = (who) => {
  //   return () => {
  //     console.log('hello', who);
  //   };
  // };

  // Removing the return keyword

  // const hello = (who) =>
  //   () => {
  //     console.log('hello', who);
  //   };

  // Arrows on the same line

  // const hello = (who) => () => {
  //   console.log('hello', who);
  // };

  // const setToValue = (newValue) => () => {
  //   setValue(newValue);
  // };

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  // return (
  //   <div>
  //     {value}
  //     <button onClick={hello('world')}>button</button>
  //     <button onClick={hello('react')}>button</button>
  //     <button onClick={hello('function')}>button</button>
  //   </div>
  // );

  // return (
  //   <div>
  //     {value}
  //     <button onClick={setToValue(1000)}>thousand</button>
  //     <button onClick={setToValue(0)}>reset</button>
  //     <button onClick={setToValue(value + 1)}>increment</button>
  //   </div>
  // );

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </div>
  );
};

// ReactDOM.render(<App18 />, document.getElementById('root'));

/* Passing Event Handlers to Child Components */

// This is the right place to define a component

const Button3 = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display3 = props => <div>{props.value}</div>;

const App19 = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  /* Do not Define Components Within Components */

  // const Display = props => <div>{props.value}</div>;

  return (
    <div>
      <Display3 value={value} />
      <Button3 handleClick={() => setToValue(1000)} text="thousand" />
      <Button3 handleClick={() => setToValue(0)} text="thousand" />
      <Button3 handleClick={() => setToValue(value + 1)} text="thousand" />
    </div>
  );
};

ReactDOM.render(<App19 />, document.getElementById('root'));
