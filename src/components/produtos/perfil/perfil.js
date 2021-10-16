import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import swal from 'sweetalert';
import './perfil.css';
import UIButton from 'components/UI/Button/Button';
import { Link } from "react-router-dom";


let id = localStorage.getItem("@idqueijarias");

const Perfil = () => {
  const [queijarias, setQueijarias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  var user = firebase.auth().currentUser;
  var email, nomequeijaria, nomeprodutor, endereco, telefone, nome;
  
  const getDataQueijarias = () => {
    firebase.database().ref(`/queijarias`).on('value', snapshot => {
      const temp = [];
      snapshot.forEach((item) => {
        temp.push(item.val());
      })
      setQueijarias(temp);
    })
  
}

const getDataProdutos = () => {
  firebase.database().ref(`/produtos`).on('value', snapshot => {
    const temp1 = [];
    snapshot.forEach((item1) => {
      temp1.push(item1.val());
    })
    setProdutos(temp1);
  })

}


  queijarias.map(item=>{
    if(user.email==item.email){
    id=item.id;
    email = item.email;
    nomequeijaria=item.nomequeijaria;
    nomeprodutor=item.nomeprodutor;
    endereco=item.endereco;
    telefone=item.telefone;

     produtos.map(item1=>{
      if(item.nomequeijaria==item1.queijaria){
      nome=item1.nome;
      }
    }) 
    }
  })

  useEffect(() => {
    getDataQueijarias();
    getDataProdutos();
    console.log("ee",queijarias);
  }, []);

  return (
    <div className="quadrado">
      <h1 className="titH1">Perfil</h1>

      <p className="dados"><b>{`Usuario: `}</b>{user.email}</p>
      <p className="dados"><b>{`Id: `}</b>{id}</p>
      <p className="dados"><b>{`Email: `}</b>{email}</p>
      <p className="dados"><b>{`Produtor: `}</b>{nomeprodutor}</p>
      <p className="dados"><b>{`Queijaria: `}</b>{nomequeijaria}</p>
      <p className="dados"><b>{`Endereco: `}</b>{endereco}</p>
      <p className="dados"><b>{`Telefone: `}</b>{telefone}</p>
     {/*  <h3>{`Email: `}</h3>{email}
      <h3>{`Produtor: `}</h3>{nomeprodutor}
      <h3>{`Queijaria: `}</h3>{nomequeijaria}
      <h3>{`Endereco: `}</h3>{endereco}
      <h3>{`Telefone: `}</h3>{telefone} */}
      {/* <h2>{`Meus produtos:`}</h2>
      <h4>{`${nome}`}</h4> */}
      
      <div className="volt">
      <UIButton component={Link} to={'/'} > Voltar </UIButton>
      <UIButton component={Link} to={`/editPerfil/${id}`} className="btn-card__edit" id="ed" >Editar</UIButton>
      </div>
    </div>

  )
};

export default Perfil;