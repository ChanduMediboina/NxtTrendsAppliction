import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const DeliveryPage = () => (
  <>
    <Header />
    <div className="delivery-container">
      <h1 className="delivery-heading">Delivery Address</h1>
      <form className="delivery-form-container">
        <input type="text" placeholder="Name" className="name" />
        <input
          type="text"
          placeholder="10-Digit mobile number"
          className="name"
        />
        <input type="text" placeholder="Pincode" className="name" />
        <input type="text" placeholder="Locality" className="name" />

        <input type="text" placeholder="City/District/Town" className="name" />
        <input type="text" placeholder="State" className="name" />
        <input
          type="text"
          placeholder="Alternate Mobile number"
          className="name"
        />
        <input type="text" placeholder="Landmark(Optional)" className="name" />
        <div className="delivery-address">
          <input
            name="radio"
            className="delivery-input"
            id="home"
            type="radio"
          />
          <label className="address-type-label" htmlFor="home">
            Home ( All day delivery )
          </label>

          <input
            name="radio"
            className="delivery-input"
            id="work"
            type="radio"
          />
          <label htmlFor="work">Work ( Delivery between 10 Am - 5 Pm )</label>
        </div>
      </form>
      <div className="btn-container">
        <Link to="/payment-gateway">
          <button type="button" className="delivery-btn">
            Save and Delivery Here
          </button>
        </Link>
        <Link to="/products">
          <button type="button" className="delivery-cancel-btn">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  </>
)
export default DeliveryPage
