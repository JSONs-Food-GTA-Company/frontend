import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantsCreate.css';


export const RestaurantsCreate: React.FC<{}> = (props) => {
  return (
    <div className="page-restaurant">
      <header className="restaurants--title">
        Cadastro de restaurante
      </header>
      <form className="form-restaurant">
        <label className='restaurants--label'>Nome do restaurante</label>
        <input type="text" className='restaurants--input' id="name" name="name"></input>

        <label className='restaurants--label'>Descrição</label>
        <input type="text" className='restaurants--input' id="description" name="description"></input>

        <label className='restaurants--label'>Nome do Responsável</label>
        <input type="text" className='restaurants--input' id="owner" name="owner"></input>

        <label className='restaurants--label'>URL logo</label>
        <input type="text" className='restaurants--input' id="image_url" name="image_url"></input>

        <label className='restaurants--label'>Endereço</label>
        <input type="text" className='restaurants--input' id="address" name="address"></input>

        <input type="submit" className='restaurants--submit' id="submit-button" value="cadastrar cardapio" formAction='{}'></input>
        <Link to="/createProducts">cadastrar cardápio</Link>
      </form>
    </div>
  );
}
