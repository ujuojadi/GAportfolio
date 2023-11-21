import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Experience from "./pages/Experience";
import ControlledCarousel from "./pages/ControlledCarousel";

function App() {
  return (
    <div className="App">
      <Home />
      <ControlledCarousel />
      <Footer />
    </div>
  );
}

export default App;
