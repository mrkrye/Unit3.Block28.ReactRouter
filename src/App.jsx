import { Routes, Route } from "react-router-dom";
import "./App.css";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Header from "./components/Header";
import Black from "./components/Black";
import Purple from "./components/Purple";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Header />

        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/black" element={<Black />} />
            <Route path="/purple" element={<Purple />} />
          </Routes>
        </div>
     
          <Footer/>
      
      </div>
    </>
  );
}

export default App;
