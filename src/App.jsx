import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Card tempoPreparo="3 min" produto="Teste" descricao="teste de como será o card" preco="100 reais"/>
      <Footer/>
    </div>
  )
}

export default App
