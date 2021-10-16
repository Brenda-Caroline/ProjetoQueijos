import React from 'react';
import Cadastro from 'components/produtos/cadastro/cadastro';
import UIContainer from 'components/UI/Container/Container';
import { useParams } from 'react-router';

const PagesCadastro = () => {

  const { id } = useParams();

  return (
    <div>
        <UIContainer>
            <Cadastro id={id ? Number.parseInt(id, 10): null} />
        </UIContainer>
        
    </div>
  );
};

export default PagesCadastro;
