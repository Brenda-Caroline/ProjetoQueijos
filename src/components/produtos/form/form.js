import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase/app';
import { storage,database } from '../firebase/index.js';
import {getDatabase, ref, child} from 'firebase/database/dist/index.cjs';
import './form.css';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';



const initialValue = {
  title: '',
  price: 0,
  quantidade: 0,
  telefone:'', 
  imageUrl: '',
  descricao: '',
  queijaria:'',
  emailProduto:'',
}

const Form = ({ id }) => {

  const [values, setValues] = useState(id ? null : initialValue);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const history = useHistory();


  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {    
    ev.preventDefault();

    const id = uuidv4();
    /* localStorage.setItem('@idprod', id); */
    database.ref(`/produtos/` + id ).set({
      nome:values.nome,
      src: values.imageUrl,
      descricao:values.descricao,
      queijaria:values.queijaria,
      price: values.price,
      quantidade: values.quantidade,
      telefone: values.telefone,
      emailProduto:values.emailProduto, 
    }).then(()=>alert('Cadastrado com sucesso!')).catch((err)=>alert('Erro ao cadastrar: ' + err));
  }

  useEffect(() => {
    if(id){
    var dataRef = firebase.database().ref(`/produtos`);

    dataRef.once('value', function(snapshot) {
      var data1 = [];
    
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();

        data1.push({ key: key, data});
        
        console.log(data);
        setValues(data);
      });
    });
  }}, []);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            swal("Upload feito com sucesso!")
              .then (<Redirect to='/'/>)
             //setValues(...initialValue, initialValue.imageUrl = url);
            setValues({ ...values, 'imageUrl': url });
            
          });
      }
    );
  };

  const redireciona = ()=>{
    window.location.href="/";
  }


  return (
    <div className="App-form">
      <div className="produtos-title">
        
        <h2 >Cadastrar novo Produto</h2>
      </div>
      {!values
        ? (
          <div>Carregando...</div>
        ) : (
          <form onSubmit={onSubmit} >
            <div className="produtos-form__group">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" onChange={onChange} placeholder="Insira o nome do produto" />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="price">Preço</label>
              <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
            </div>
            <div className="produtos-form__group">
              <label htmlFor="quantidade">Quantidade</label>
              <input id="quantidade" name="quantidade" type="number" onChange={onChange} value={values.quantidade} />
            </div>
             {/* <div className="produtos-form__group">
              <label htmlFor="telefone">Telefone para contato</label>
              <input id="telefone" name="telefone" type="text" onChange={onChange} value={values.telefone} placeholder="(xx) xxxxx-xxxx" />
            </div> 
            <div className="produtos-form__group">
              <label htmlFor="emailProduto">Email</label>
              <input id="emailProduto" name="emailProduto" type="text" onChange={onChange} value={values.emailProduto} />
            </div> */}
            <div className="produtos-form__group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" type="textarea" onChange={onChange} value={values.descricao} placeholder="Insira a decrição do produto" />
            </div>
            <br></br>
            <div className="produtos-form__group">
            <label htmlFor="queijaria">Selecione a Queijaria</label>
            
            <select  onChange={onChange} name="queijaria" id="queijaria" value={values.queijaria}>
               <option >Selecione a queijaria</option>
               <option value="Abilio">Abílio</option>
               <option value="Cida do Requeijão">Cida do Requeijão</option>
               <option value="Edson Mussarela">Edson Mussarela</option>
               <option value="JC Queijaria">JC Queijaria </option>
               <option value="Liu Queijaria">Liu Queijaria</option>
               <option value="MG Queijaria">MG Queijaria</option>
               <option value="Queijaria da Dinda">Queijaria da Dinda</option>
               <option value="Queijaria Dona Saúde">Queijaria Dona Saúde</option>
               <option value="Queijaria Estrela da Serra">Queijaria Estrela da Serra</option>
               <option value="Queijaria Minas FG">Queijaria Minas FG</option>
               <option value="Queijaria Serrana de Minas">Queijaria Serrana de Minas</option>
               <option value="Rubi Queijaria">Rubi Queijaria </option>
               <option value="Requeijão Toko">Requeijão Toko</option>

            </select>
            </div>
            <br></br>
            <div className="produtos-form__group">
              <label htmlFor="imageUrl">Imagem</label>
              <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} className="imagem" />
              <div className="im">
                <progress value={progress} max="100" />
                <br />
                <br />

                <input type="file" onChange={handleChange} /><br></br>
                <button className="up" onClick={handleUpload}>Upload</button>
                <br />
               
                <br />
                  </div>
                  <div className="sal">
              <button className="produtos-form__group_salvar" type="submit" onClick={redireciona}> Salvar</button>
              </div>
            
            </div>
            
            <div>
              

            </div>
          </form>
        )}
    </div>
  )
}

export default Form;