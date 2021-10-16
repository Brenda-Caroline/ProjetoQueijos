import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { storage,database } from '../firebase/index.js';
import './cadastro.css';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import UIButton from 'components/UI/Button/Button';
import {Link} from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const initialValue = {
  nomequeijaria: '',
  nomeprodutor: '',
  endereco: '',
  telefone:'',
  email: '',
  senha: '',
}

const Cadastro = ({ id }) => {

  const [values, setValues] = useState(id ? null : initialValue);
  
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/Perfil/${id}`)
        .then((response) => {
          setValues(response.data);
        })
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {  
    
    const Email = document.getElementById("email").value
    const Senha = document.getElementById("senha").value

  
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Senha)
      .then(()=>{
        swal("Cadastrado com sucesso!")
         .then(()=>{
          setTimeout(()=>{
            window.location.replace('/')
          },1000)
        })
      })
      .catch((error)=>{
        swal(error.message)
      })
      
    
    ev.preventDefault();

    const id = uuidv4();

    database.ref(`/queijarias/` + id ).set({
      id: id,
      nomequeijaria:values.nomequeijaria,
      nomeprodutor: values.nomeprodutor,
      endereco: values.endereco,
      telefone:values.telefone,
      email:values.email,
      senha:values.senha,
    }).then(()=>alert('Cadastrado com sucesso!')).catch((err)=>alert('Erro ao cadastrar: ' + err));
  
    
  
  }

  var firebaseConfig = {
    apiKey: "AIzaSyBjE_PJfjPOQj5Z62oYHEzjEXMy8FetW-Q",
    authDomain: "banco-de-dados-queijos.firebaseapp.com",
    projectId: "banco-de-dados-queijos",
    storageBucket: "banco-de-dados-queijos.appspot.com",
    messagingSenderId: "700330184648",
    appId: "1:700330184648:web:5888ea46e92bc029f7fafd",
    measurementId: "G-Y6DHRX9M37"
  };
  
  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);    
  }

  return (
    <div className="App-form">
      <div className="produtos-title">
        <h2 >Cadastro de Queijarias</h2>
      </div>
      {!values
        ? (
          <div>Carregando...</div>
        ) : (
          <form onSubmit={onSubmit} >
            <div className="produtos-form__group">
              <label htmlFor="nomequeijaria">Nome da Queijaria</label>
              <input id="nomequeijaria" name="nomequeijaria" type="text" onChange={onChange} value={values.nomequeijaria} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="nomeprodutor">Nome do Produtor</label>
              <input id="nomeprodutor" name="nomeprodutor" type="text" onChange={onChange} value={values.nomeprodutor} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="endereco">Endereço</label>
              <input id="endereco" name="endereco" type="text" onChange={onChange} value={values.endereco} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="telefoneQ">Telefone para contato</label>
              <input id="telefone" name="telefone" type="text" onChange={onChange} value={values.telefone} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" onChange={onChange} value={values.email} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="senha">Senha</label>
              <input id="senha" name="senha" type="password" onChange={onChange} value={values.senha} />
            </div>
            
            <br></br>
           
            <br></br>
            
            <div className="sal">
              
              <UIButton type="submit" className="button"
             onClick={onSubmit}>
            Cadastrar
                  </UIButton>
              </div>
          </form>
        )}
    </div>
  )
}

export default Cadastro;