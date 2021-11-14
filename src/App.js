import "../src/App.css";
import "./components/assets/style.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Login from './components/Login';
import Register from './components/Register';

import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
    </div>
  );
}

export default App;
