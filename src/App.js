import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
