import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home } from "./Pages/Home";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
