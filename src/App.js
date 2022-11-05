import './App.css';
import HeaderContainer from "./components/header/HeaderContainer"
import Footer from "./components/footer/Footer"
import FindPickerUpperContainer from './components/findPickerUpper/FindPickerUpperContainer';
import HomeContainer from "./components/home/HomeContainer";
import ServicesContainer from "./components/services/ServicesContainer";
import AboutContainer from "./components/about/AboutContainer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="find-picker-upper" element={<FindPickerUpperContainer />} />
          <Route path="services" element={<ServicesContainer />} />
          <Route path="about" element={<AboutContainer />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
