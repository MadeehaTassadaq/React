type collegeProps = {
    name: string[];
  };
  
  function College({ name }: collegeProps) {
    return (
      <div>
        <hr/>
        <h2>College List:</h2>
        <ul>
          {name.map((college, index) => (
            <li key={index}>{college}</li>
          ))}
        </ul>
        <hr/>
      </div>
    );
  }
  export default College;