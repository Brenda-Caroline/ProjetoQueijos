import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './rotaqueijo.css';
import UIButton from 'components/UI/Button/Button';
import { Link } from "react-router-dom";

const RotaQueijo = () => {

return(
  <div style={{ height: 800 }}>
    <h1 className="h1">Rota do Queijo em Porteirinha</h1>
    <div className="botVolta">
    <UIButton component={Link} to={'/'} className="voltar"> Voltar </UIButton>
    </div>
    {/* <br></br>
    <br></br> */}
      <MapContainer className="map" /* style={{ height: 800 }} */ center={[-15.794600, -43.054010]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-15.73955886649034, -43.02160109591189]}>
          <Popup>
            IFNMG <br /> Campus Porteirinha
          </Popup>
        </Marker>

        <Marker position={[-15.7345958, -43.0543405]}>
          <Popup>
            Requeijão Toko
          </Popup>
        </Marker>

        <Marker position={[-15.8313139, -43.0631696]}>
          <Popup>
            Queijaria JC
          </Popup>
        </Marker>

        <Marker position={[-15.8483828, -43.0622635]}>
          <Popup>
            Cida do Requeijão
          </Popup>
        </Marker>

        <Marker position={[-15.6862958, -43.0337145]}>
          <Popup>
            Queijaria Rubi
          </Popup>
        </Marker>

        <Marker position={[-15.6980593, -43.0234087]}>
          <Popup>
            Queijaria Dona Saúde
          </Popup>
        </Marker>

        
      </MapContainer>
    </div>
);


}

export default RotaQueijo;