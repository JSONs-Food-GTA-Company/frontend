import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './RestaurantsCreate.css';

export const RestaurantsCreate: React.FC<{}> = (props) => {

  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantDescription, setRestaurantDescription] = useState('')
  const [restaurantOwner, setRestaurantOwner] = useState('')
  const [restaurantImage_url, setRestaurantImage_url] = useState('')
  const [restaurantAddress, setRestaurantAddress] = useState('')
  
  function handleCreateRestaurant() {
    const data={
      name: restaurantName,
      address: restaurantAddress,
      description: restaurantDescription,
      logo_url: restaurantImage_url,
      owner: restaurantOwner,     
    }

    api.post('restaurant', 
      data
    ).then((response) => {
      alert(`RESPONSE DO CREATE: ${response}`)
    })
    .catch((error) => {
      alert(`RESPONSE error: ${error}`)
    });
  }
    
  return (
    <div className="page-restaurant">
      <header className="restaurants--title">
        <p>Cadastro de restaurante</p>
      </header>
      <form className="form-restaurant">
        <label>Nome do restaurante</label>
        <input value={restaurantName} onChange={e => setRestaurantName(e.target.value)} type="text" id="name" name="name"></input>

        <label>Descrição</label>
        <input value={restaurantDescription} onChange={e => setRestaurantDescription(e.target.value)} type="text" id="description" name="description"></input>

        <label>Nome do Responsável</label>
        <input value={restaurantOwner} onChange={e => setRestaurantOwner(e.target.value)} type="text" id="owner" name="owner"></input>

        <label>URL logo</label>
        <input value={restaurantImage_url} onChange={e => setRestaurantImage_url(e.target.value)} type="text" id="image_url" name="image_url"></input>

        <label>Endereço</label>
        <input value={restaurantAddress} onChange={e => setRestaurantAddress(e.target.value)} type="text" id="address" name="address"></input>
        
        <div className='restaurant--bottomArea'>
          <Link to="/restaurantcreateok" className='restaurant--botton'>
            <button onClick={handleCreateRestaurant}>cadastrar</button>
          </Link>
        </div>

      </form>
    </div>
  );
}
