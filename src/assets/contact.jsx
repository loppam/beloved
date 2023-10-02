import React from "react";
import GoogleMap from "../components/GoogleMap";
import { Link } from "react-router-dom";

const contact = () => {
  const location = {
    address: "101 St Finbarr's College Rd, Yaba 100213, Lagos",
    lat: 6.531532,
    lng: 3.3878679,
  };
  return (
    <div className="contact">
      <span className="divider-dashed"></span>
      <div className="content">
        <div className="contact_flex">
          <div className="contact_left">
            <h4>Leave your message</h4>
            <form action="">
              <div className="input-flex">
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Name"
                  id=""
                />
                <input
                  type="tel"
                  required
                  name="tel"
                  placeholder="Phone Number"
                  id=""
                />
              </div>
              <input
                type="email"
                required
                name="email"
                id=""
                placeholder="Email Address"
              />
              <textarea
                rows="6"
                name="message"
                id="message"
                required
                placeholder="Message"
              ></textarea>

              <input className="btn" type="submit" value="Send Message" />
            </form>
            <span className="divider-dashed"></span>
            <h4>Contact Info</h4>
            <p>101 St. Finbarr’s College Road, Akoka, Yaba, Lagos</p>
          </div>
          <div className="right">
            <h4>Walk-in our office</h4>
            <GoogleMap location={location} zoomLevel={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
