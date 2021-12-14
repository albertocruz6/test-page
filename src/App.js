import Header from "./components/Header";
import About from "./components/about/About";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
    <div className="container" style={{height: '100%'}}>
      <Header/>
      <main style={{marginTop: '65px'}}>
     <Routes>
       <Route path="/personal-page" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/projects" element={<Projects/>}/>
     </Routes>
     </main>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;