import { Routes, Route } from "react-router-dom";

import Invoices from "./pages/Invoices";
import About from "./pages/About";

import { GlobalStyles } from "./global_css/global_styles";
import { Reset } from "./global_css/reset";

import Button from "./components/Buttons/Button";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Invoices />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
