import './App.css';
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import FindPickerUpper from './components/pages/findPickerUpper';
import Home from "./components/pages/home";
import Services from "./components/pages/services";
import About from "./components/pages/about";
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
