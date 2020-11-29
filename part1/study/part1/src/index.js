import React from 'react';
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

ReactDOM.render(<App5_4 />, document.getElementById('root'));
