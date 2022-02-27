import React, { useEffect, useState } from "react";
import Logo from "../../assets/MyJobs.svg";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { logout } from "../../redux/action/authAction";
import "./header.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Header = ({ logout, isLoggedIn }) => {
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      let pars = JSON.parse(window.localStorage.getItem("user"));
      setUser(pars.name[0]);
    }
  }, []);

  const [open, setOpen] = useState(true);

  const [user, setUser] = useState("");

  if (!isLoggedIn) {
    <Redirect to="/" />;
  }

  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__top__logo">
          <img src={Logo} alt="logo" />
        </Link>

        {window.localStorage.getItem("user") ? (
          <div className="header__top__sign__in">
            <div
              className="header__top__sign__in__upper"
              onClick={() => setOpen(!open)}
            >
              <div className="header__top__sign__in__avatar">
                {user.toUpperCase()}
              </div>
              <AiFillCaretDown color="white" size={20} />
            </div>

            <div
              className="logout__button arrow-top"
              style={open ? { display: "none" } : null}
              onClick={() => logout()}
            >
              Logout
            </div>
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, { logout })(Header);
