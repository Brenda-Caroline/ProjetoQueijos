import React from 'react';
import Cadastro from 'components/produtos/cadastro/cadastro';
import UIContainer from 'components/UI/Container/Container';
import { useParams } from 'react-router';

const PagesCadastro = () => {

  const { key } = useParams();

  return (
    <div>
        <UIContainer>
            <Cadastro key={key ? Number.parseInt(key, 10): null} />
        </UIContainer>
        
    </div>
  );
};

export default PagesCadastro;
