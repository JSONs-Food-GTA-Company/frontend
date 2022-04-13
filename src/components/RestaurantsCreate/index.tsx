import React from 'react';
import './RestaurantsCreate.css';


export const RestaurantsCreate: React.FC<{}> = (props) => {
  return (
    <div className="page-restaurant">
      <header className="restaurants--title">
        Cadastro de restaurante
      </header>
      <form className="form-restaurant">
        <label>Nome do restaurante</label>
        <input type="text" id="name" name="name"></input>

        <label>Descrição</label>
        <input type="text" id="description" name="description"></input>

        <label>Nome do Responsável</label>
        <input type="text" id="owner" name="owner"></input>

        <label>URL logo</label>
        <input type="text" id="image_url" name="image_url"></input>

        <label>Endereço</label>
        <input type="text" id="address" name="address"></input>

        <input type="submit" id="submit-button" value="cadastrar cardápio"></input>
      </form>
    </div>
  );
}
