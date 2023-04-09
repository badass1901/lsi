import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import Home from "./layouts/home/Home";
import { About, Contact } from "./pages";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
