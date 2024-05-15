import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = ({ dataStore }) => {
  return (
    <header>
      <nav>
        <div className="container flex justify-between py-5">
          <div className="logo">
            <NavLink to="/">
              <NavLink to="/">Home</NavLink>
            </NavLink>
          </div>
          <ul className="flex gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/IndexSlider">Slider</NavLink>
            </li>
            <li>
              <NavLink to="/Forms">data Forms</NavLink>
            </li>
            <li>
              <NavLink to="/ReactForm">ReactForm</NavLink>
            </li>
            <li>
              <NavLink to="/TodoForm">To-do form</NavLink>
            </li>
            <li>
              <NavLink to="/TodoList">To-do List</NavLink>
            </li>
            <li>
              <NavLink to="/Fancy-box">Fancy-box</NavLink>
            </li>
            <li>
              <NavLink to="/Cart">Cart{dataStore.length}</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
