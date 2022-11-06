import './App.css';
import Header from "./components/header/headerContainer"
import Footer from "./components/footer/Footer"
import FindPickerUpper from './components/findPickerUpper';
import Home from "./components/home/homeContainer";
import Services from "./components/services";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="find-picker-upper" element={<FindPickerUpper />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
