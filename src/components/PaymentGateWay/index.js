import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const PaymentGateWay = () => (
  <>
    <Header />
    <div className="payment-container">
      <h1 className="payment-heading">Payment Options</h1>

      <div className="payment-label-container">
        <input className="payment-input" id="upi" type="radio" name="payment" />
        <img
          className="upi-img"
          alt="upi"
          src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1669746591/images-1_exm2vr.webp"
        />
      </div>
      <div className="payment-label-container">
        <input
          className="payment-input"
          id="cards"
          type="radio"
          name="payment"
        />
        <label htmlFor="cards" className="payment-label">
          Credit/Debit/ATM card
        </label>
      </div>
      <div className="payment-label-container">
        <input
          className="payment-input"
          id="netBanking"
          type="radio"
          name="payment"
        />
        <label htmlFor="netBanking" className="payment-label">
          Net Banking
        </label>
      </div>
      <div className="payment-label-container">
        <input
          className="payment-input"
          id="cash"
          type="radio"
          name="payment"
        />
        <label htmlFor="cash" className="payment-label">
          Cash on Delivery
        </label>
      </div>
      <div className="payment-label-container">
        <input className="payment-input" id="emi" type="radio" name="payment" />
        <label htmlFor="emi" className="payment-label">
          EMI ( Easy Installments )
        </label>
      </div>
      <Link to="/order-success">
        <button type="button" className="payment-confirm-btn">
          Confirm
        </button>
      </Link>
      <img
        className="payment-gateway-img"
        alt="payment gateway"
        src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1669747188/360_F_435483726_1siFBouFzSyWeLJFLTn1Y1cCRZITJcCA_jwxlid.jpg"
      />
    </div>
  </>
)
export default PaymentGateWay
