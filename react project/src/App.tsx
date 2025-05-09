import Wrapper from "./wrapper"
function App(){
  return(<div>
    <h1>Pass Props as Jsx</h1>
    
  <Wrapper color="blue"name="User"><h1>Hello Everyone</h1></Wrapper>
  <Wrapper name="Admin"><h1>Hello Admin</h1><h2 color="green">Hello Aiman</h2></Wrapper>
  </div>)
}
export default App;