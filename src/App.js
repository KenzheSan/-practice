import "./App.css";
import Form from "./component/Form";

function App() {
  function kachalka(t) {
    console.log(t,'APP');
    alert(t)
  }
  return (
    <div className="App">
      <Form inputType="text" x={kachalka} />
    </div>
  );
}

export default App;
