import React from 'react';

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  );
};

// Number of exercises is calculated using the reduce method.

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
    </p>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      {course.parts.map(part => <Part key={part.id} part={part} />)}
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
