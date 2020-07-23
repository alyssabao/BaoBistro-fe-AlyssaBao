import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

const Checkout = ({ cartList, quantities }) => {
const history = useHistory()
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");
  let [district, setDistrict] = useState("");
  let [ward, setWard] = useState("");
  let [residenceType, setResidenceType] = useState("");
  let [deliveryNotes, setDeliveryNotes] = useState("");
  let [paymentType, setPaymentType] = useState("credit card");
  let [creditCardName, setCreditCardName] = useState("");
  let [creditCardNumber, setCreditCardNumber] = useState(null);
  let [creditCardExpiration, setCreditCardExpiration] = useState("");
  let [creditCardCvv, setCreditCardCvv] = useState(null);

  const fillSampleData = () => {
      setFirstName("Alyssa")
      setLastName("Bao")
      setPhone("+84 392 071 407")
      setEmail("bao.alyssa@gmail.com")
      setAddress("12 Ton Dan")
      setDistrict("District 4")
      setWard("Ward 12")
      setDeliveryNotes("Please bring to room")
      setCreditCardName("Alyssa Bao")
      setCreditCardNumber(123456789)
      setCreditCardExpiration("01/25")
      setCreditCardCvv(123)
  }

  const createOrder = async (e) => {
    e.preventDefault();
    const orderData = {
      firstName,
      lastName,
      phone,
      email,
      address,
      district,
      ward,
      residenceType,
      deliveryNotes,
      paymentType,
      creditCardName,
      creditCardNumber,
      creditCardExpiration,
      creditCardCvv,
      productList: cartList,
      quantities,
      totalCost: cartList.reduce((res, item, index) => {
        return res + item.price * quantities[index];
      }, 0),
    };
    console.log(orderData)
    const newOrder = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    alert("Your order has been successfully placed.");
    history.push("/confirmation")
  };
  return (
    <>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <img src="img/bao-bistro-white.png" width="200px" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link to={`/`} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/order`} className="nav-link">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/cart`} className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container checkoutFormat">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h6 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {cartList.reduce((res, item, index) => {
                  return res + quantities[index];
                }, 0)}
              </span>
            </h6>
            <ul className="list-group mb-3">
              {cartList.map((product, index) => {
                return (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0 textBlack checkoutFont">
                        {product.name} ({quantities[index]})
                      </h6>
                    </div>
                    <span className="text-muted">
                      <NumberFormat
                        value={product.price * quantities[index]}
                        thousandSeparator={true}
                        suffix="VND"
                        displayType="text"
                      />
                    </span>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <span className="textBlack">Total</span>
                <strong className="textBlack">
                  <NumberFormat
                    value={cartList.reduce((res, item, index) => {
                      return res + item.price * quantities[index];
                    }, 0)}
                    thousandSeparator={true}
                    suffix="VND"
                    displayType="text"
                  />
                </strong>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h6 className="mb-3 textYellow">Shipping address</h6>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={fillSampleData}
            >
              Fill sample data
            </button>
            <form
              className="needs-validation"
              noValidate
              onSubmit={createOrder}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="+84 123 456 789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">House number + street name</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="district">District</label>
                  <input
                    type="text"
                    className="form-control"
                    id="district"
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid district is required.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="ward">Ward</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ward"
                    placeholder="Ward"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Valid ward is required.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="residence">Type of residence</label>
                  <select
                    className="custom-select d-block w-100"
                    id="residence"
                    required
                    onChange={(e) => setResidenceType(e.target.value)}
                  >
                    <option value>Choose...</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Hotel</option>
                    <option>Office</option>
                    <option>Compound</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid type of residence.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="notes">
                  Delivery notes <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  placeholder="Notes"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                />
              </div>
              <hr className="mb-4" />
              <h6 className="mb-3 textYellow">Payment</h6>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    defaultChecked
                    required
                    value="credit card"
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                    value="debit card"
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                    value="paypal"
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                    value="cash on delivery"
                    onChange={(e) => setPaymentType(e.target.value)}
                  />
                  <label className="custom-control-label" htmlFor="cash">
                    Cash on delivery
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder
                    required
                    value={creditCardName}
                    onChange={(e) => setCreditCardName(e.target.value)}
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder
                    required
                    value={creditCardNumber}
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder
                    required
                    value={creditCardExpiration}
                    onChange={(e) => setCreditCardExpiration(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder
                    required
                    value={creditCardCvv}
                    onChange={(e) => setCreditCardCvv(e.target.value)}
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
            
                 <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button> 
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart.cart,
  quantities: state.cart.quantities,
});

export default connect(mapStateToProps)(Checkout);
