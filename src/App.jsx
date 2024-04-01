import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Stepper } from "./Steps/Stepper";
import { Contact } from "./Steps/Contact";
import { About } from "./Steps/About";
import { Summary } from "./Steps/Summary";

function App() {
  return (
    <div className="App">
      <Stepper />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
