import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './ProductsCreate.css';


export const ProductsCreate: React.FC<{}> = (props) => {
    let { id } = useParams();

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage_url, setProductImage_url] = useState('')

    function handleCreateProduct() {
      const data={
          name: productName,
          description: productDescription,
          price: Number(productPrice),
          image_url: productImage_url,    
          restaurant_id: Number(id),
      }

      api.post('product', 
        data
      ).then((response) => {
        alert(`RESPONSE DO CREATE: ${response}`)
      })
      .catch((error) => {
        alert(`Response ERROR:: ${error}`)
      });
    }

  return (
    <div className="products">
      <header className="products--title">
        Cadastro de produtos
      </header>
      <form className="products--form">
        <label className='products--label'>Nome do produto</label>
        <input value={productName} onChange={e => setProductName(e.target.value)} type="text" className='products--input' id="name" name="name"></input>

        <label className='products--label'>Descrição</label>
        <input value={productDescription} onChange={e => setProductDescription(e.target.value)} type="text" className='products--input' id="description" name="description"></input>

        <label className='products--label'>Valor</label>
        <input value={productPrice} onChange={e => setProductPrice(e.target.value)} type="text" className='products--input' id="price" name="price"></input>

        <label className='products--label'>URL da imagem do produto</label>
        <input  value={productImage_url} onChange={e => setProductImage_url(e.target.value)} type="url" className='products--input' id="image_url" name="image_url"></input>

        <div className='restaurant--bottomArea'>
          <Link to="/restaurantcreateok" className='restaurant--botton'>
            <button onClick={handleCreateProduct}>cadastrar</button>
          </Link>
        </div>

      </form>
    </div>
  );
}