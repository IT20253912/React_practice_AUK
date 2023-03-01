import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <div>
        <span>chathu</span>
      </div>
      <br></br>
      <div>
        <Main />
        <Main>
          <h2>children test</h2>
          <span>children test</span>
        </Main>
        <Main />
      </div>
    </>
  );
}

export default App;
