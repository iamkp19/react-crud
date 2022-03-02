import { Link } from "react-router-dom";
import React , { useState } from "react";

const Navbar = () => {
  const [ theme , setTheme ] = useState('light')

  const onThemeChanged = () => {
    setTheme( theme === 'light' ? 'dark ' : 'light' )
    console.log(theme);
  }

  return (
    <>
      <nav className="navbar navbar-light bg-dark shadow p-3 m-2 bg-body rounded">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <Link to="user/add" className="btn btn-md btn-primary">
            <i className="fa-solid fa-user-plus"> Add User </i>
          </Link>
          <Link to="contact" className="navbar-brand">
            Contact Us
          </Link>
          <button type="button" className={theme === 'light' ? 'btn btn-dark' : 'btn btn-light'} onClick={ () => onThemeChanged() }>Dark</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
