import React from 'react';
import './ProductsCreate.css';


export const ProductsCreate: React.FC<{}> = (props) => {
  return (
    <div className="products">
      <header className="products--title">
        Cadastro de produtos
      </header>
      <form className="products--form">
        <label className='products--label'>Nome do produto</label>
        <input type="text" className='products--input' id="name" name="name"></input>

        <label className='products--label'>Descrição</label>
        <input type="text" className='products--input' id="description" name="description"></input>

        <label className='products--label'>Valor</label>
        <input type="text" className='products--input' id="owner" name="owner"></input>

        <label className='products--label'>URL da imagem do produto</label>
        <input type="url" className='products--input' id="image_url" name="image_url"></input>

        <input type="submit" className='products--submit' id="submit-button" value="cadastrar cardápio"></input>
      </form>
    </div>
  );
}
