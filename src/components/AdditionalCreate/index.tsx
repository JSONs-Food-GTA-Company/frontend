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
    <div className="page-additional">
      <div className="additional--title">
        <p>Cadastro de adicional do Produto</p>
      </div>
      <div className="additional--contentArea">
        <label className='additional--Label'>Nome do adicional</label>
        <input className='additional--input' value={additionalName} onChange={e => setAdditionalName(e.target.value)} type="text" name="name"></input>

        <label className='additional--Label'>Preço</label>
        <input className='additional--input' value={additionalPrice} onChange={e => setAdditionalPrice(e.target.value)} type="number" name="price"></input>
        
        <div className='additional--buttonArea'>
          <button className='additional--button' onClick={(e) => handleCreateAdditional(e)}><p>cadastrar</p></button>
        </div>

      </div>
    </div>
  );
}
