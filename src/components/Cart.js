import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

const Cart = ({ cartList, quantities }) => {
  return (
    <div>
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
                  <Link to={`/cart`} className="nav-link active">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container cartHeight">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            {cartList.map((product, index) => {
              return (
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs">
                        <img
                          src={product.image}
                          alt="..."
                          className="img-responsive pixFormat"
                        />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="cartText">{product.name}</h4>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">
                    <NumberFormat
                      value={product.price}
                      thousandSeparator={true}
                      suffix="VND"
                      displayType="text"
                    />
                  </td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control text-center"
                      defaultValue={quantities[index]}
                    />
                  </td>
                  <td data-th="Subtotal" className="text-center">
                    <NumberFormat
                      value={product.price * quantities[index]}
                      thousandSeparator={true}
                      suffix="VND"
                      displayType="text"
                    />
                  </td>
                  <td className="actions" data-th>
                    <button className="btn btn-danger btn-sm">
                      <i className="fa fa-trash-o" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <a href="#" className="btn btn-warning textWhite">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan={2} className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>
                  Total{" "}
                  <NumberFormat
                    value={cartList.reduce((res, item, index) => {
                      return res + item.price * quantities[index];
                    }, 0)}
                    thousandSeparator={true}
                    suffix="VND"
                    displayType="text"
                  />
                </strong>
              </td>
              <td>
                <a
                  href="https://www.paypal.com/webapps/hermes?token=5EY097812P7754247&useraction=commit&mfid=1546377013907_cf1dec6830d7"
                  className="btn btn-success btn-block"
                >
                  Checkout <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart.cart,
  quantities: state.cart.quantities,
});

export default connect(mapStateToProps)(Cart);
