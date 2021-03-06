import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets//logo.svg';

export default function Logon(){
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo-img"/>
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID"/>
          <button type="submit" className="button">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="logo"/>
    </div> 
  );
}