const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  );
}

const Content = (props) => {
  //calculating total exercises
  const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p><b>Total of {totalExercises} exercises </b></p>
    </div>
  );
}

const Course = (props) => {
  return (
    <div>
      <Header header={props.course.name} />
      <Content parts={props.course.parts} />
    </div>
  );
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App;
