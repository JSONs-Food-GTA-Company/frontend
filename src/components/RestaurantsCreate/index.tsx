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

      <div className="restaurants--title">
        <p>Cadastro de restaurante</p>
      </div>

      <div className="form-restaurant">
        <label className='restaurants--Label'><p>Nome do restaurante</p></label>
        <input className='restaurants--input' value={restaurantName} onChange={e => setRestaurantName(e.target.value)} type="text" id="name" name="name"></input>

        <label className='restaurants--Label'><p>Descrição</p></label>
        <input className='restaurants--input' value={restaurantDescription} onChange={e => setRestaurantDescription(e.target.value)} type="text" id="description" name="description"></input>

        <label className='restaurants--Label'><p>Nome do Responsável</p></label>
        <input className='restaurants--input' value={restaurantOwner} onChange={e => setRestaurantOwner(e.target.value)} type="text" id="owner" name="owner"></input>

        <label className='restaurants--Label'><p>URL logo</p></label>
        <input className='restaurants--input' value={restaurantImage_url} onChange={e => setRestaurantImage_url(e.target.value)} type="text" id="image_url" name="image_url"></input>

        <label className='restaurants--Label'><p>Endereço</p></label>
        <input className='restaurants--input' value={restaurantAddress} onChange={e => setRestaurantAddress(e.target.value)} type="text" id="address" name="address"></input>
        
        <div className='restaurant--buttonArea'>
          <Link to="/restaurantcreateok" className='restaurant--botton'>
            <button className='restaurant--button' onClick={handleCreateRestaurant}><p>cadastrar</p></button>
          </Link>
        </div>

      </div>
    </div>
  );
}
