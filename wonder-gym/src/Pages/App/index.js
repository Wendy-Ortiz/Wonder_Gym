import { BrowserRouter, Route, Routes } from "react-router-dom";
//import logo from './logo.svg';

import '../../App.css';

import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Trainer from "../Trainer";
import User from "../User";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="mainTrainer" element={<Trainer />} />
          <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
