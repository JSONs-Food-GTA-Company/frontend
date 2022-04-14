import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './AdditionalCreate.css';

export const AdditionalCreate: React.FC<{}> = (props) => {
  let { id } = useParams();
  let navigation = useNavigate();

  const [additionalName, setAdditionalName] = useState('')
  const [additionalPrice, setAdditionalPrice] = useState('')
  
  function handleCreateAdditional(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (additionalName === '') {
      alert('Preencha o nome do adicional!')
      return
    } else if (!additionalPrice) {
      alert('Preço deve ser um número')
      return
    }

    const data={
      item: additionalName,
      price: Number(additionalPrice),
      quantity: 1,
      product_id: Number(id),
    }
    
    api.post('adds-item', 
        data
      ).then((response) => {
        alert(`Adicional criado com sucesso!`)
        navigation(-1)
      })
      .catch((error) => {
        alert(`Erro ao criar adicional. ${error}`)
      });
  }
    
  return (
    <div className="page-restaurant">
      <header className="restaurants--title">
        Cadastro de restaurante
      </header>
      <form className="form-restaurant">
        <label>Nome do adicional</label>
        <input value={additionalName} onChange={e => setAdditionalName(e.target.value)} type="text" name="name"></input>

        <label>Preço</label>
        <input value={additionalPrice} onChange={e => setAdditionalPrice(e.target.value)} type="number" name="price"></input>
        
        <div className='restaurant--bottomArea'>
          <button className='restaurant--botton' onClick={(e) => handleCreateAdditional(e)}>cadastrar</button>
        </div>

      </form>
    </div>
  );
}
