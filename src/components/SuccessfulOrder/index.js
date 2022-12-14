import {Link} from 'react-router-dom'

import ReactStars from 'react-rating-stars-component'

import Header from '../Header'

import './index.css'

const SuccessfulOrder = () => (
  <>
    <Header />
    <div className="order-success-container">
      <img
        className="gift-img"
        alt="gift"
        src="https://res.cloudinary.com/dxnk6ejnn/image/upload/v1669750169/images_hbmpy9.jpg"
      />
      <h1 className="order-heading">Order Placed Successfully</h1>
      <p className="order-id">Order Id : OD1260443739135200000</p>
      <div className="feed-back-container">
        <p className="feed-back-heading">Feedback: </p>
        <ReactStars isHalf="true" size={30} />
      </div>
      <Link to="/products">
        <button type="button" className="shop-btn">
          Shop Now
        </button>
      </Link>
    </div>
  </>
)

export default SuccessfulOrder
