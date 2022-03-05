import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1 id="footer-heading">موقع الأجر</h1>
        <div id="footer-container">
          <div id="footer-sub-container">
            <div id="list1" className="footer-list">
              <h6 className="footer-list-heading">موقع الأجر</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">حول الدفع</a>
                </li>
                <li>
                  <a href="#">كيفية عمل الموقع</a>
                </li>
                <li>
                  <a href="#">كيف تضمنون حقوقي كمستخدم؟</a>
                </li>
                <li>
                  <a href="#">الأسئلة الشائعة</a>
                </li>
                <li>
                  <a href="#">طلب المساعدة</a>
                </li>
              </ul>
            </div>

            <div id="list2" className="footer-list">
              <h6 className="footer-list-heading">طرق التواصل</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">المنتدى</a>
                </li>
                <li>
                  <a href="#">الإيميل</a>
                </li>
                <li>
                  <a href="#">قسم المساعدة</a>
                </li>
                <li>
                  <a href="#">قسم الدعم الفني</a>
                </li>
              </ul>
            </div>

            <div id="list3" className="footer-list">
              <span>
                <h6 id="footer-payment-header">طرق الدفع المقبولة</h6>
              </span>

              <ul id="payment-methods" className="footer-links">
                <li>
                  <img src="images/zaincash.png" />
                </li>
                <li>
                  <img src="images/mastercard.png" />
                </li>
                <li>
                  <img src="images/visacard.png" />
                </li>
                <li>
                  <img src="images/paypal.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
