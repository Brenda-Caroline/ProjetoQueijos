import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Footer.css';
import { IconContext } from 'react-icons';
import logomenu from '../imagens/logo.jpg';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Menu from '@material-ui/core/Menu';




function Footer() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  //let Email = localStorage.getItem('@Email');

  var user = firebase.auth().currentUser;
  var email;

if (user != null) {
  email = user.email;
}else{
  email="";
  
}


  return (
    <>
      <IconContext.Provider value={{ color:  '#fff' }}>
        <div className='navbarfooter'>
          <div className="social">
            <a href="https://www.instagram.com/queijoartesanaldaserrageral/">
              <FaInstagram size="40"  color="#fff"/>
            </a>
            <a href="https://www.youtube.com/c/SpeakupTech">
              <FaFacebook size="40"  color="#fff"/>
            </a>  
        </div>
          <p className="text"> 
          Avenida José Silveira Lopes, 429 – Vila Serranópolis – Porteirinha/MG - CEP 39.520-000 
          <br></br><br></br>Fone: (038) 3218-7300 - Email: porteirinha@ifnmg.edu.br
          <br></br><br></br>© 2021 - IFNMG - Desenvolvido em React JS</p>
          
          
        </div>

       
      </IconContext.Provider>

      
      
    </>
    
    
  );
}

export default Footer;