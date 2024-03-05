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

  export default Course