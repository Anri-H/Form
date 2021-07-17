import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 className={"title"}>Sign in or create an account</h2>
        </div>

        <div className="form">
          <h2 className={"title"}>Create an account</h2>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
