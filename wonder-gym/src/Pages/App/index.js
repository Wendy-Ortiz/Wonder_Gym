import { BrowserRouter, Route, Routes } from "react-router-dom";
//import logo from './logo.svg';

import '../../App.css';

import Home from "../Home";
import Register from "../Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
