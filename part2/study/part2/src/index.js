import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

// const Note = ({ note }) => {
//   return (
//     <li>{note.content}</li>
//   );
// };

/* Rendering Collections */

// const App = (props) => {
//   const { notes } = props;

//   // return (
//   //   <div>
//   //     <h1>Notes</h1>
//   //     <ul>
//   //       <li>{notes[0].content}</li>
//   //       <li>{notes[1].content}</li>
//   //       <li>{notes[2].content}</li>
//   //     </ul>
//   //   </div>
//   // );

//   /* Anti-pattern: array indexes as keys */

//   // <ul>
//   //   {notes.map((note, i) =>
//   //     <li key={i}>
//   //       {note.content}
//   //     </li>
//   //   )}
//   // </ul>

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   );
// };

ReactDOM.render(<App notes={notes} />, document.getElementById('root'));
