import React from "react";

const PaymentMethods = () => {
    return ( 
        <div id="list3" className="footer-list">
            <span>
            <h6 id="footer-payment-header">طرق الدفع المقبولة</h6>
            </span>

            <ul id="payment-methods" className="footer-links">
                <li>
                    <img src="images/zaincash.png" alt="زين كاش" />
                </li>
                <li>
                    <img src="images/mastercard.png" alt="ماستر كارد" />
                </li>
                <li>
                    <img src="images/visacard.png" alt="فيزا كارد" />
                </li>
                <li>
                    <img src="images/paypal.png" alt="بي بال" />
                </li>
            </ul>
        </div>
     );
}
 
export default PaymentMethods;