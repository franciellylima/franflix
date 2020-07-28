import React from "react"; //Sempre lembrar de importar
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from "./ButtonLink";

function Menu() { //Componente para o Index criando uma function para renderizar o arquivo JXML
return<nav className="Menu">
  <a href="/">
  <img className='Logo' src={Logo} alt=""/>
  </a>
  <Button as="a" className="ButtonLink" href="/">
    Novo vídeo
  </Button>
</nav>;

}
export default Menu; //Exportando para poder ser usado