import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/math-magicians',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Math Magicians</h1>
      <ul className="ulNavbar">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
