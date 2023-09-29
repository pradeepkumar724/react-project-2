import "./App.css";
import Form from "./components/Form.js/Form";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
