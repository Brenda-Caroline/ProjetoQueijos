import React from 'react';


const Perfil = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    let Email = localStorage.getItem('@Email');
    return (
        <div>
            <h1>Perfil</h1>
    <h2>{`Página de perfil de ${Email}`}</h2>
             </div>
        
    )
};

export default Perfil;