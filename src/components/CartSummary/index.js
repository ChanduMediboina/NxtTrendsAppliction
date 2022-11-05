// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, totalCartPrice} = value
      return (
        <div className="summary-cart-container">
          <h1 className="total-price-heading">
            Order Total: RS {totalCartPrice}/-
          </h1>
          <p className="total-item-summary">{cartList.length} Items in cart</p>
          <button type="button" className="checkOut-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
