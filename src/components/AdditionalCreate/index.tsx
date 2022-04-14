import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AdditionalCreate.css';

export const AdditionalCreate: React.FC<{}> = (props) => {

  let { id } = useParams();

  const [additionalName, setAdditionalName] = useState('')
  const [additionalPrice, setAdditionalPrice] = useState('')
  
  function handleCreateAdditional() {
    const data={
      name: additionalName,
      price: Number(additionalPrice),
      product_id: Number(id),
    }
    console.log(data)
  }
    
  return (
    <div className="page-restaurant">
      <header className="restaurants--title">
        Cadastro de restaurante
      </header>
      <form className="form-restaurant">
        <label>Nome do adicional</label>
        <input value={additionalName} onChange={e => setAdditionalName(e.target.value)} type="text" id="name" name="name"></input>

        <label>Preço</label>
        <input value={additionalPrice} onChange={e => setAdditionalPrice(e.target.value)} type="number" id="price" name="price"></input>
        
        <div className='restaurant--bottomArea'>
          <Link to="/restaurantcreateok" className='restaurant--botton'>
            <button onClick={handleCreateAdditional}>cadastrar</button>
          </Link>
        </div>

      </form>
    </div>
  );
}
