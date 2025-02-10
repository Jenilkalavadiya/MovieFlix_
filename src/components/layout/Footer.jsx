import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          {/* <img src="./images/logo.png" alt="logo" /> */}
          <p>
            Welcome to MovieFlix, <br />
            your ultimate destination for
            <br />
            Binge watch!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <NavLink to="#">Help Centre</NavLink>
          <NavLink to="#">Account</NavLink>
          <NavLink to="#">Media Centre</NavLink>
          <NavLink to="#">Investor Relations</NavLink>
        </div>
        <div className="content_3">
          <h4>Jobs</h4>
          <NavLink to="./contact.html">Contact Us</NavLink>
          <NavLink to="" target="_blank">
            {" "}
            Payment Method{" "}
          </NavLink>
          <NavLink to="" target="_blank">
            {" "}
            Speed Test{" "}
          </NavLink>
          <NavLink to="" target="_blank">
            {" "}
            Only on MovieFlex{" "}
          </NavLink>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, promos and trailers!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p className="text-white">Design and Code by Jenil Kalavadiya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
