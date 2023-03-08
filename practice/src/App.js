  import "./App.css";
 import Main from "./Components/Main";

const myData = [
  {
    name:'amila1',
    city:'thangalla1',
    position:'web developer1',
  },
  {
    name:'amila2',
    city:'thangalla2',
    position:'web developer2',
  },
  {
    name:'amila3',
    city:'thangalla3',
    position:'web developer3',
  },

]

function App() {
  return (
    <>
      <div>
        <span>chathu</span>
      </div>
      <br></br>
      <div>
        
      <p>chathudu</p>
      {myData.map((ele)=> {
        return <p><Main name={ele.name} city={ele.city}/></p>;
      })}
        
      </div>
    </>
  );
}

export default App;
