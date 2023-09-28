import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "./produtos.css";

function Store() {
  const { storeId } = useParams(); 
  const navigate = useNavigate(); 


  const products = [
    { 
      id: 1,
      name:"Leite Pasteurizado Integral",
    },
    { 
      id: 1,
      name:"Garrafa Iogurte Sabor Coco ",
    },
    { 
      id: 1,
      name:"Queijo tipo Minas ",
    },
    { 
      id: 1,
      name:"Queijo Coalho",
    },
    {
      id: 2,
      name: "Abacate",
    },
    {
      id: 2,
      name: "Abacaxi",
    },
    {
      id: 2,
      name: "Maça",
    },
    {
      id: 2,
      name: "Pera",
    },
    {
      id: 2,
      name: "Uva",
    },
    {
      id: 3,
      name: "Cenoura",
    },
    {
      id: 3,
      name: "Alface",
    },
    {
      id: 3,
      name: "Beterraba",
    },
    {
      id: 3,
      name: "Brócolis",
    },
    {
      id: 3,
      name: "Pimentão",
    }, {
      id: 3,
      name: "Couve",
    }
  ];

  
  const filteredProducts = products.filter(
    (product) => product.id === parseInt(storeId, 10)
  );

  const handleBackToHome = () => {
    
    navigate("/HomeProdutos");
  };

  return (
    <div className="store-container">
      
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li className="product-item" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
          </li>
        ))}
      </ul> 
      
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a seção de produtos
      </button>
    </div>
  );
}

export default Store;
