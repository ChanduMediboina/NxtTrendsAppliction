import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import SignInForm from './components/SignInForm'
import DeliveryPage from './components/DeliveryAddress'
import PaymentGateWay from './components/PaymentGateWay'
import SuccessfulOrder from './components/SuccessfulOrder'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
    totalCartPrice: 0,
  }

  addCartItem = product => {
    const {cartList} = this.state
    const findCart = cartList.find(each => {
      if (each.id === product.id) {
        return {...each, quantity: each.quantity + 1}
      }
      return null
    })
    if (findCart === undefined) {
      this.setState(
        prevState => ({cartList: [...prevState.cartList, product]}),
        this.updateTotalCartBill,
      )
    } else {
      const doubleClickItemUpdateQuantity = cartList.map(each => {
        if (each.id === product.id) {
          return {...each, quantity: each.quantity + 1}
        }
        return each
      })
      this.setState(
        {cartList: doubleClickItemUpdateQuantity},
        this.updateTotalCartBill,
      )
    }
    console.log(findCart)
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const removeItemBasedOnId = cartList.filter(eachItem => eachItem.id !== id)
    this.setState(
      {cartList: [...removeItemBasedOnId]},
      this.updateTotalCartBill,
    )
  }

  removeAllCartItems = () => {
    this.setState({cartList: []}, this.updateTotalCartBill)
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    console.log(id)
    const increaseQuantity = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity + 1}
      }
      return each
    })

    this.setState({cartList: increaseQuantity}, this.updateTotalCartBill)
  }

  updateTotalCartBill = () => {
    const {cartList} = this.state
    const totalCartBill = cartList.map(
      eachItem => eachItem.quantity * eachItem.price,
    )
    const billAmount = totalCartBill.reduce((a, b) => a + b, 0)
    this.setState({totalCartPrice: billAmount})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    console.log(id)
    const decreaseQuantity = cartList.map(each => {
      if (each.quantity > 1) {
        if (each.id === id) {
          return {...each, quantity: each.quantity - 1}
        }
      }
      return each
    })
    this.setState({cartList: decreaseQuantity}, this.updateTotalCartBill)
  }

  render() {
    const {cartList, totalCartPrice} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          totalCartPrice,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/delivery-address"
            component={DeliveryPage}
          />
          <ProtectedRoute
            exact
            path="/payment-gateway"
            component={PaymentGateWay}
          />
          <ProtectedRoute
            exact
            path="/order-success"
            component={SuccessfulOrder}
          />
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
