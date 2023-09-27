import React from "react";
import { PiUsers } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const getinvolved = () => {
  return (
    <div className="getinvolved">
      <div className="sub">
        <div className="sub_content">
          <h6>Subscribe to be notified of latest events</h6>
          <div className="subscribe_form">
            <input name="email" type="email" placeholder="Your email address" />
            <p className="sub_form_submit">
              <button className="btn" type="submit">
                Subscribe
              </button>
            </p>
          </div>
        </div>
      </div>
      <span className="divider-dashed"></span>
      <div className="content">
        <h2>How you can contribute?</h2>
        <div className="flex">
          <div className="row">
            <PiUsers className="icon" />
            <p className="row_header">Become Volunteer</p>
            <p className="row_text">
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba.
            </p>
            <Link className="row_link">
              Click here to become a Volunteer {">>"}
            </Link>
          </div>
          <div className="row">
            <LiaShoppingBagSolid className="icon" />
            <p className="row_header">Shop from webstore</p>
            <p className="row_text">
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba.
            </p>
            <Link to="https://sneaklin.com/" className="row_link">
              Shop for collectibles {">>"}
            </Link>
          </div>
          <div className="row">
            <MdOutlineNotificationsActive className="icon" />
            <p className="row_header">Spread the word</p>
            <p className="row_text">
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba.
            </p>
            <div className="row_socials">
              <Link to="https://www.instagram.com/getsneaklin/">
                <BsInstagram className="social ig" />
              </Link>
              <Link to="https://twitter.com/getsneaklin?lang=en">
                <BsTwitter className="social tw" />
              </Link>
              <Link to="https://www.facebook.com/getsneaklin/">
                <BsFacebook className="social fb" />
              </Link>
            </div>
          </div>
        </div>
          </div>
      <span className="divider-dashed2"></span>
          
    </div>
  );
};

export default getinvolved;
