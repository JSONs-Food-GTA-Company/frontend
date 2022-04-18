import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './RestaurantsCreate.css';

export const RestaurantsCreate: React.FC<{}> = (props) => {
  const navigation = useNavigate()
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantDescription, setRestaurantDescription] = useState('')
  const [restaurantOwner, setRestaurantOwner] = useState('')
  const [restaurantImage_url, setRestaurantImage_url] = useState('')
  const [restaurantAddress, setRestaurantAddress] = useState('')
  
  function handleCreateRestaurant() {
    if (restaurantName === '' || restaurantDescription === '' || restaurantOwner === '' || restaurantAddress === '') {
      alert('Preencha todos os campos!')
      return
    }

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
      alert(`Restaurante criado com sucesso!`)
      navigation('/')
    })
    .catch((error) => {
      alert(`Erro ao criar restaurante: ${error}`)
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
          <Link to="" className='cc'>
            <button className='restaurant--button' onClick={handleCreateRestaurant}><p>cadastrar</p></button>
          </Link>
        </div>

      </div>
    </div>
  );
}
