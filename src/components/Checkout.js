import React from 'react'

export default function Checkout() {
    return (
            <div>
        {/* Page Preloder */}
        <div id="preloder">
          <div className="loader" />
        </div>
        {/* Humberger Begin */}
        <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt="" /></a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
              <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li><a href="#">Spanis</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#"><i className="fa fa-user" /> Login</a>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active"><a href="./index.html">Home</a></li>
              <li><a href="./shop-grid.html">Shop</a></li>
              <li><a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li><a href="./shop-details.html">Shop Details</a></li>
                  <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                  <li><a href="./checkout.html">Check Out</a></li>
                  <li><a href="./blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li><a href="./blog.html">Blog</a></li>
              <li><a href="./contact.html">Contact</a></li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-pinterest-p" /></a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        {/* Humberger End */}
        {/* Header Section Begin */}
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="header__top__left">
                    <ul>
                      <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>
                      <a href="#"><i className="fa fa-linkedin" /></a>
                      <a href="#"><i className="fa fa-pinterest-p" /></a>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt="" />
                      <div>English</div>
                      <span className="arrow_carrot-down" />
                      <ul>
                        <li><a href="#">Spanis</a></li>
                        <li><a href="#">English</a></li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <a href="#"><i className="fa fa-user" /> Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li className="active"><a href="./shop-grid.html">Shop</a></li>
                    <li><a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                    <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                  </ul>
                  <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* Hero Section Begin */}
        <section className="hero hero-normal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span>All departments</span>
                  </div>
                  <ul>
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                    <li><a href="#">Fresh Berries</a></li>
                    <li><a href="#">Ocean Foods</a></li>
                    <li><a href="#">Butter &amp; Eggs</a></li>
                    <li><a href="#">Fastfood</a></li>
                    <li><a href="#">Fresh Onion</a></li>
                    <li><a href="#">Papayaya &amp; Crisps</a></li>
                    <li><a href="#">Oatmeal</a></li>
                    <li><a href="#">Fresh Bananas</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form action="#">
                      <div className="hero__search__categories">
                        All Categories
                        <span className="arrow_carrot-down" />
                      </div>
                      <input type="text" placeholder="What do yo u need?" />
                      <button type="submit" className="site-btn">SEARCH</button>
                    </form>
                  </div>
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+65 11.188.888</h5>
                      <span>support 24/7 time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Checkout</h2>
                  <div className="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Checkout Section Begin */}
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6><span className="icon_tag_alt" /> Have a coupon? <a href="#">Click here</a> to enter your code
                </h6>
              </div>
            </div>
            <div className="checkout__form">
              <h4>Billing Details</h4>
              <form action="#">
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Fist Name<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Last Name<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input">
                      <p>Country<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>Address<span>*</span></p>
                      <input type="text" placeholder="Street Address" className="checkout__input__add" />
                      <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                    </div>
                    <div className="checkout__input">
                      <p>Town/City<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>Country/State<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>Postcode / ZIP<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Phone<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>Email<span>*</span></p>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc">
                        Create an account?
                        <input type="checkbox" id="acc" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <p>Create an account by entering the information below. If you are a returning customer
                      please login at the top of the page</p>
                    <div className="checkout__input">
                      <p>Account Password<span>*</span></p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="diff-acc">
                        Ship to a different address?
                        <input type="checkbox" id="diff-acc" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="checkout__input">
                      <p>Order notes<span>*</span></p>
                      <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="checkout__order">
                      <h4>Your Order</h4>
                      <div className="checkout__order__products">Products <span>Total</span></div>
                      <ul>
                        <li>Vegetable’s Package <span>$75.99</span></li>
                        <li>Fresh Vegetable <span>$151.99</span></li>
                        <li>Organic Bananas <span>$53.99</span></li>
                      </ul>
                      <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                      <div className="checkout__order__total">Total <span>$750.99</span></div>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="acc-or">
                          Create an account?
                          <input type="checkbox" id="acc-or" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="payment">
                          Check Payment
                          <input type="checkbox" id="payment" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="paypal">
                          Paypal
                          <input type="checkbox" id="paypal" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <button type="submit" className="site-btn">PLACE ORDER</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Checkout Section End */}
        {/* Footer Section Begin */}
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello@colorlib.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Useful Links</h6>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">About Our Shop</a></li>
                    <li><a href="#">Secure Shopping</a></li>
                    <li><a href="#">Delivery infomation</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Our Sitemap</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Testimonials</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                  <h6>Join Our Newsletter Now</h6>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <form action="#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">Subscribe</button>
                  </form>
                  <div className="footer__widget__social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="footer__copyright">
                  <div className="footer__copyright__text"><p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p></div>
                  <div className="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}
