import React, { Component } from "react";
import PaymentMethods from "./PaymentMethods";
import ConatctList from './ContactList';
import SiteDetails from "./SiteDetails";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1 id="footer-heading">موقع الأجر</h1>
        <div id="footer-container">

            <SiteDetails />

            <ConatctList />

            <PaymentMethods />

        </div>
      </footer>
    );
  }
}

export default Footer;
