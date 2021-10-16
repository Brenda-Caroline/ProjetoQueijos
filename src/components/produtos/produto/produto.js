import React, { Linking, Text, openURL } from 'react';
import './produto.css';
import UIButton from 'components/UI/Button/Button';
import { Link } from "react-router-dom";
import { isLogged } from 'components/utils/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { BiTrash } from 'react-icons/bi';
import whatsApp from '../produto/whatsApp.png';



const Produto = ({ produtos}) => {

  let id = localStorage.getItem("@idproduto");

  const titulo = localStorage.getItem('@titulo');
  const preco = localStorage.getItem('@preco');
  const descricao = localStorage.getItem('@descricao');
  const quantidade = localStorage.getItem('@quantidade');
  const src = localStorage.getItem('@src');
  const queijaria = localStorage.getItem('@queijaria');
  const telefone = localStorage.getItem('@telefone');
  const emailProduto = localStorage.getItem('@emailProduto');
    
  
  const redireciona = ()=>{
    window.open(`https://api.whatsapp.com/send?phone=+55${telefone}&text=Olá, eu vim pela plataforma APROQUEIJO`, '_blank');
    
  }



  return (
    <div className="container">
      {/* <p><h2 className="preco">{`${titulo}`}</h2></p> */}
      <h1 className="titulo">{` ${titulo}`}</h1>
      <img src={`${src}`} className="imgproduto" />
      {/* <p className="preco"><b>{`Preço: R$ `}</b>{preco}<b>{` reais`}</b></p>
      <p><h3 className="descricao">{`Descrição: ${descricao} `}</h3></p> 
      
      
      <p><h3 className="queijaria">{`Queijaria: ${queijaria} `}</h3>{queijaria}</p>
      <p><h3 className="telefone">{`Telefone: ${telefone} `}</h3></p>
      <p><h3 className="telefone">{`Email: ${emailProduto} `}</h3></p>

      <p><h2 className="quantidade">{quantidade < 1 ? 'Sem estoque no momento' : `Quantidade disponível: ${quantidade}`}</h2></p>
       */}
      <p className="preco"><b>{`Preço: R$ `}</b>{` ${preco} `} <b>{` reais`}</b></p>
      <p className="descricao"><b>{`Descrição: `}</b>{` ${descricao}`}</p>
      <p className="queijaria"><b>{`Queijaria: `}</b>{` ${queijaria}`}</p>
      <p className="telefone"><b>{`Telefone: `}</b> {` ${telefone}`}</p>
      <p className="telefone"><b>{`Email: `}</b>{` ${emailProduto}`}</p>
      <p className="quantidade"><b>{quantidade < 1 ? 'Sem estoque no momento' : `Quantidade disponível: ${quantidade}`}</b></p>


      <div className="botao">
        <button className="button_envia" onClick={redireciona}> Enviar Mensagem </button>
        <img src={whatsApp} className="whats" onClick={redireciona}/>
        <br></br>
        <br></br>
        
        <UIButton component={Link} to={'/'} className="volta"> Voltar </UIButton>

        {/* <UIButton component={Link} to={'/'} className="enviar"> Enviar Mensagem </UIButton> */}
      </div>
      
     
      
    </div>



  );
}

export default Produto;