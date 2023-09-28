import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Home from "./components/Home";
import Home from "./components/Home";
import HomeProdutos from "./components/HomeProdutos";
import Contato from "./components/contato";
import Store from "./components/produtos";

import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Super Mercado MG</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Sobre</Link>
              </li>
              <li>
                <Link to="/HomeProdutos">Produto</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        { <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeProdutos" element={<HomeProdutos/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/store/:storeId" element={<Store />} />
        </Routes> }
        
      </div>
    </Router>
  );
}

export default App;
