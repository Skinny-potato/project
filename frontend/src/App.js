import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home.jsx"
import SampleService from "./Components/SampleServices"
import Contact from "./Assets/Contact.jsx"
import Result from "./Components/Result"
import "./Styles/App.css"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<SampleService />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        {/* <Upload /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
