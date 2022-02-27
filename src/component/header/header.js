import React, { useEffect, useState } from "react";
import Logo from "../../assets/MyJobs.svg";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import "./header.css";
const Header = () => {
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      let pars = JSON.parse(window.localStorage.getItem("user"));
      setUser(pars.name[0]);
    }
  }, []);

  const [user, setUser] = useState("");

  console.log(user);
  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__top__logo">
          <img src={Logo} alt="logo" />
        </Link>

        {window.localStorage.getItem("user") ? (
          <div className="header__top__sign__in">
            <div className="header__top__sign__in__upper">
              <div className="header__top__sign__in__avatar">
                {user.toUpperCase()}
              </div>
              <AiFillCaretDown color="white" size={20} />
            </div>
            <div className="logout__button arrow-top">Logout</div>
          </div>
        ) : (
          <Link className="header__top__login" to="/login">
            Login/Signup
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
