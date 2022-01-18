import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Home',
    },
    {
      id: 2,
      path: '/about',
      title: 'About',
    },
  ];
  return (
    <nav>
      <ul className="navbar">
        {
                    links.map((link) => (
                      <li key={link.id}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                      </li>
                    ))
                }
      </ul>
    </nav>
  );
};

export default Nav;
