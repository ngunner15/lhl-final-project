import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

export default function Navbar(props) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <nav>
      <Link to='/login'>Login</Link>
      {token && <Link to='/logout'>Logout</Link>}
      <Link to='/mercury'>Mercury</Link>
      <Link to='/venus'>Venus</Link>
      <Link to='/earth'>Earth</Link>
      <Link to='/mars'>Mars</Link>
      <Link to='/jupiter'>Jupiter</Link>
      <Link to='/saturn'>Saturn</Link>
      <Link to='/uranus'>Uranus</Link>
      <Link to='/neptune'>Neptune</Link>
      <Link to='/pluto'>Pluto</Link>
      <Link to='/apod'>Picture Of The Day</Link>
      {token ? (
        <Link to='/photos'>Photos</Link>
      ) : (
        <Link to='/login'>Photos</Link>
      )}
      {token ? (
        <Link to='/favourites/1'>Favourites</Link>
      ) : (
        <Link to='/login'>Favourites</Link>
      )}
      <Link to='/news'>News</Link>
    </nav>
  );
}
