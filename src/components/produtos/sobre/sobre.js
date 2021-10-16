import React from 'react';
import './sobre.css'; 
import ifnmgPort from '../sobre/ifnmgPort.jpg';


const Sobre = () => {
    return (
        <div className="PagSobre">
            <h1>Sobre nós</h1>
            <img src={ifnmgPort} className="imgIF"/> 

            
            <div className="sobre"> 
                <p>O Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais (IFNMG) foi criado em 
                    29 de dezembro de 2008, pela Lei nº 11.892, através da integração do Centro Federal de Educação 
                    Tecnológica (Cefet) de Januária e da Escola Agrotécnica Federal de Salinas (EAF), instituições com 
                    mais de 50 anos de experiência na oferta da educação profissional. Atualmente, agrega onze campi – 
                    Campus Almenara, Campus Araçuaí, Campus Arinos, Campus Diamantina, Campus Avançado Janaúba, Campus 
                    Januária, Campus Montes Claros, Campus Pirapora, Campus Avançado Porteirinha, Campus Salinas e Campus 
                    Teófilo Otoni – e a Reitoria, sediada em Montes Claros.
                </p>
                <p>A área de abrangência do IFNMG é formada por 176 municípios, das mesorregiões Norte e Noroeste de 
                    Minas e Vales do Jequitinhonha e Mucuri, cobrindo quase toda a metade norte do território mineiro 
                    e atendendo uma população total de 2.898.631 habitantes (dados do IBGE, 2010).
                </p>
                <p>O Instituto oferece cursos técnicos de nível médio (nas modalidades integrado, concomitante e 
                    subsequente ao ensino médio), presenciais e a distância, cursos técnicos PROEJA (Programa de 
                    Integração da Educação Profissional ao Ensino Médio na Modalidade Educação de Jovens e Adultos), 
                    FIC (Formação Inicial e Continuada), cursos superiores (tecnologia, bacharelado e licenciatura) e 
                    pós-graduação. Todos são inteiramente gratuitos.
                </p>
                <p>Além disso, o Instituto também tem como compromisso desenvolver programas de extensão e divulgação 
                    científica e tecnológica, bem como realizar e estimular a pesquisa aplicada, a produção cultural, 
                    o empreendedorismo, o cooperativismo e o desenvolvimento científico e tecnológico.
                </p> 
                <p>Este projeto de extensão foi intitulado como "DESENVOLVIMENTO DE UMA PLATAFORMA ONLINE PARA EXPOSIÇÃO DE QUEIJOS 
                    ARTESANAIS DA ASSOCIAÇÃO APROQUEIJO DE PORTEIRINHA",e teve o intuito de promover uma maior proximidade entre o 
                    produtor regional de queijos e derivados e o consumidor final.
                </p>
                <p>O desenvolvimento iniciou-se no ano 2020 durante a pandemia, onde houve o aumento de vendas 
                    através de plataformas online. A plataforma foi desenvolvida pelos discentes Brenda Caroline e 
                    Izaque Dione, acadêmicos do curso Bacharelado em Sistemas de Informação, juntamente com a 
                    docente Joyce França, coordenadora deste projeto.
                </p>

            </div>
            
        </div>
        
    )
};

export default Sobre;