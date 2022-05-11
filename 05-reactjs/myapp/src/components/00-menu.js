import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Container className="mt-5 " >
      <ul>
          <li><Link to="/hello-world">Hello World</Link></li>
          <li><Link to="/comp">Comp</Link></li>
          <li><Link to="/jsx1">Jsx</Link></li>
          <li><Link to="/jsx2">Jsx2</Link></li>
          <li><Link to="/jsx3">Jsx Loop</Link></li>
          <li><Link to="/jsx4">Jsx Practise</Link></li>
          <li><Link to="/useeffect-2">Use effect</Link></li>
          <li><Link to="/clock1">Clock</Link></li>
          <li><Link to="countries">Countries</Link></li>
          <li><Link to="/random-image">Random Image</Link></li>
          <li><Link to="/state">State</Link></li>
          <li><Link to="/profile-card">Profil Card</Link></li>
          <li><Link to="user-cards">User Cards</Link></li>
          <li><Link to="form5">Form5</Link></li>
          <li><Link to="form4">Form4</Link></li>
          <li><Link to="form3">Form3</Link></li>
          <li><Link to="shop">Shop</Link></li>
          <li><Link to="birthday">Birthday</Link></li>
          <li><Link to="style-external">StyleExternal</Link></li>
          <li><Link to="bootstrap-dinamik">BootstrapDinamik</Link></li>
          <li><Link to="set-context">SetContext</Link></li>
          <li><Link to="get-context">GetContext</Link></li>
          <li><Link to="/exchange">Exchange</Link></li>
          <li><Link to="/dashboard">Admin Panel</Link></li>
      </ul>
    </Container>
  )
}

export default Menu