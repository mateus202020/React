import React from "react";
import { Link } from "react-router-dom";
import './HomeProutos.css'


function Home() {

  const produtos = [
    {
      id: 1,
      name: "Laticínios",
      description: "seções exclusiva para produtos de Laticínios"
    },
    {
      id: 2,
      name: "Frutas",
      description: "seções exclusiva para Frutas"
    },
    {
      id: 3,
      name: "Legumes",
      description: "seções exclusiva para Legumes"
    }
  ];

  return (
    <div>
      <h2>Fique a vontade para escolher qualquer seções do Mercado Virtual:</h2>
{      
      <ul className="store-list">
        {produtos.map((store) => (
          <li className="store-item" key={store.id}>
            <h3 className="store-name">{store.name}</h3>
            <p className="store-description">{store.description}</p>
            <Link to={`/store/${store.id}`} className="store-link">
              Ver produtos
            </Link>
          </li>
        ))}
      </ul> }
    </div>
  );
}

export default Home;
