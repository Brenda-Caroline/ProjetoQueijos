import React from 'react';
import './associacao.css';
import logo from '../associacao/logo.jpg';
import produtoresAssociados from '../associacao/produtoresAssociados.jpeg';


const Associacao = () => {
    return (
        <div >
            <img src={logo} className='logohistoria'/>
            <br></br>
            <h1 className="tit" >História da Associação</h1>
            <br></br>
            <p>
            <b>APROQUEIJO</b> – Associação dos Produtores de Queijo Artesanal da Serra Geral
            </p>

            <p className="textAss">
                Agricultores reconhecidos e produtos premiados com medalhas de prata e bronze no Prêmio Queijo Brasil.
    Porteirinha é pioneira no processo de regulamentação da produção do Queijo Artesanal da Serra Geral. 
    Giro significativo na economia, no turismo gastronômico e desenvolvimento regional. 

            </p>
<br></br>
        <p>
            Nossas redes sociais:<br></br>
        INSTAGRAM: {/* @queijoartesanaldaserrageral */}
        <a href="https://instagram.com/queijoartesanaldaserrageral?igshid=123ktffdkr845"> @queijoartesanaldaserrageral</a>

        <br></br>
        FACEBOOK:  {/* @queijoartesanaldaserrageral */}
        <a href="https://www.facebook.com/queijoartesanaldaserrageral/"> @queijoartesanaldaserrageral</a>
        </p>
<br></br>
        <h3 className="tit">
        VEJA AS QUEIJARIAS ASSOCIADAS
        </h3>
<br></br>
        <table border='1px' id="info-queijarias">
            <thead>
                <th>QUEIJARIAS</th>
                <th>ENDEREÇO</th>
                <th>TELEFONE</th>
            </thead>
            <tbody>
                <tr>
                    <td>Abílio</td>
                    <td>Fazenda Rio dos Cocos / Porteirinha</td>
                    <td>(38) 99930-2337 / (38) 99972-8943</td>
                </tr>
                <tr>
                    <td>Cida do Requeijão</td>
                    <td>Mocambinho / Porteirinha</td>
                    <td>(38) 99108-8689 / (38) 3831-5048</td>
                </tr>
                <tr>
                    <td>Edson Mussarela</td>
                    <td>Fazenda Tatu / Porteirinha</td>
                    <td>(38) 99733-2345</td>
                </tr>
                <tr>
                    <td>JC Queijaria</td>
                    <td>Paciência / Porteirinha</td>
                    <td>(38) 99862-2840</td>
                </tr>
                <tr>
                    <td>Liu Queijaria</td>
                    <td>Fazenda Susana, Serra Branca / Porteirinha</td>
                    <td>(38) 99157-3314</td>
                </tr>
                <tr>
                    <td>MG Queijaria</td>
                    <td>Fazenda Lagoa / Serranópolis</td>
                    <td>(38) 99997-9535</td>
                </tr>
                <tr>
                    <td>Queijaria Dinda</td>
                    <td>Porteirinha</td>
                    <td>(38) 99215-6632 / (38) 99923-0128</td>
                </tr>
                <tr>
                    <td>Queijaria Dona Saúde</td>
                    <td>Fazenda Laginha / Porteirinha</td>
                    <td>(38) 99978-4646</td>
                </tr>
                <tr>
                    <td>Queijaria Estrela da Serra</td>
                    <td>Fazenda Barreiro / Porteirinha</td>
                    <td>(38) 99740-4447</td>
                </tr>
                <tr>
                    <td>Queijaria Minas FG</td>
                    <td>Fazenda Munganga / Porteirinha</td>
                    <td>(38) 99871-8586</td>
                </tr>
                <tr>
                    <td>Queijaria Serrana de Minas</td>
                    <td>Fazenda Patinhos / Serranópolis de Minas</td>
                    <td>(38) 99849-1015</td>
                </tr>
                <tr>
                    <td>Requeijão Toko</td>
                    <td>Fazenda Guará / Porteirinha</td>
                    <td>(38) 99224-5900 / (38) 99801-6029</td>
                </tr>
                <tr>
                    <td>Rubi Queijaria</td>
                    <td>Fazenda Tamboril / Porteirinha</td>
                    <td>(38) 99906-5336</td>
                </tr>
            </tbody>
        </table>

        </div>
    )
};

export default Associacao;