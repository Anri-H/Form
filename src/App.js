import "./App.css";
import Email from "./Components/Form/Email/Email";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Sign in or create an account</h2>
        </div>
        <div>
          <h2>Create an account</h2>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
