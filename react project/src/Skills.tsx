type SkillsProps = {
    skills: string[];
  };
  
  function Skills({ skills }: SkillsProps) {
    return (
      <div>
        <hr/>
        <h2>Select your skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <input type="checkbox" id={skill} />
            <label htmlFor={skill}>{skill}</label>
          </div>
        ))}
        <hr/>
      </div>
    );
  }
  export default Skills;