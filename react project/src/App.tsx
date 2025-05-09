
import Skills from './skills';

function App(){
  const skills = ["JavaScript", "React", "TypeScript"];

  return (
    <div>
      <h1>Handle checkboxes in React</h1>
      <Skills skills={skills} />
    </div>
  );
}
export default App;