import React, { useState } from "react";
import "./Homepage.css";
import Logo from "../../assets/MyJobs.svg";
import homepageImage from "../../assets/Screenshot 2020-09-21 at 2.06.52 PM.png";
import goldline from "../../assets/goldline.png";
import kanba from "../../assets/kanba.png";
import lightai from "../../assets/lighting.png";
import ztos from "../../assets/ztos.png";
import idea from "../../assets/ideaa.png";
import liva from "../../assets/liva.png";
import velocity from "../../assets/velocity-9.png";
import solaytic from "../../assets/solaytic.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { closeLogout } from "../../redux/action/authAction";
const cardData = [
  {
    heading: "Get More Visibility",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    heading: "Organize Your Candidates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    heading: "Verify Their Abilities",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

const Homepage = ({ logoutMessage, closeLogout }) => {

  return (
    <div className="homepage__container">
      <header className="homepage__header">
        <div className="homepage__header__top">
          <Link to="/" className="homepage__header__top__logo">
            <img src={Logo} alt="logo" />
          </Link>

          <Link className="homepage__header__top__login" to="/login">
            Login/Signup
          </Link>

          {logoutMessage ? (
            <div className="logout__message">
              <div className="logout__message__upper">
                <p>Logout</p>
                <ImCross
                  onClick={() => closeLogout()}
                  style={{ cursor: "pointer" }}
                  size={15}
                  color="#303f60"
                />
              </div>
              <p>You have successfully logged out.</p>
            </div>
          ) : null}
        </div>

        <div className="homepage__header__bottom">
          <div className="homepage__header__bottom__text">
            <h1>
              Welcome to <br />{" "}
              <span>
                My<span>Jobs</span>{" "}
              </span>
            </h1>
            <button>Get Started</button>
          </div>
          <div className="homepage__header__bottom_img">
            <img src={homepageImage} alt="homepageImage" />
          </div>
        </div>
      </header>
      <section className="homepage__section">
        <div className="homepage__section__why__us">
          <h3>Why Us</h3>
          <div className="homepage__section__why__us__cards">
            {cardData.map((item, index) => {
              return (
                <div
                  className="homepage__section__why__us__single__card"
                  key={index}
                >
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="homepage__section__trust">
          <h3>Companies Who Trust Us</h3>
          <div className="homepage__section__trust__img">
            <div className="homepage__section__trust__image1">
              <img src={solaytic} alt="solaytic" />
              <img src={kanba} alt="kanba" />
              <img src={lightai} alt="lightai" />
              <img src={ztos} alt="ztos" />
              <img src={kanba} alt="kanba" />
            </div>
            <div className="homepage__section__trust__image2">
              <img src={goldline} alt="goldline" />
              <img src={idea} alt="ideaa" />
              <img src={liva} alt="liva" />
              <img src={velocity} alt="velocity" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  logoutMessage: state.authReducer.logoutMessage,
});

export default connect(mapStateToProps, { closeLogout })(Homepage);
