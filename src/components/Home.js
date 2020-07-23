import React from "react";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <img src="img/bao-bistro-white.png" width="200px"/>
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
                    <Link to={`/`} className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/order`} className="nav-link">Order</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/cart`} className="nav-link">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="slider-wrap">
        <div
          className="slider-item"
          style={{ backgroundImage: 'url("img/bistro-store.jpg")' }}
        >
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up">Eat, Drink, and Enjoy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section bg-light py-5  bottom-slant-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="img/bao-bistro-store.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="text-left heading-wrap">
                <h2 data-aos="fade-up">Bao Bistro</h2>
              </div>
              <h3 className="mb-4">Welcome To Our Restaurant</h3>
              <p>
                Bao Bistro is a restaurant based in Da Nang, Vietnam.
              </p>
              <p>
                We ensure high-quality food with no MSG, syrups, or preservatives. We hope you'll leave with happy stomachs!
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section pb-0">
        <div className="container">
          <div className="row mb-5 justify-content-center" data-aos="fade">
            <div className="col-md-7 text-center heading-wrap">
              <h2 data-aos="fade-up">Bún Chả Hà Nội</h2>
              <p data-aos="fade-up" data-aos-delay={100}>
                With fresh rice vermicelli, succulent grilled pork, vegetables, and fish sauce, it's easy to see why this popular dish from Ha Noi is former US President Obama's favorite Vietnamese food.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                src="img/buncha-1.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={200}
              />
            </div>
            <div className="col-lg-4">
              <img
                src="img/buncha-2.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={200}
              />
            </div>
            <div className="col-lg-4">
              <img
                src="img/buncha-3.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={500}
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
      <section className="section bg-light  top-slant-white bottom-slant-gray">
        <div className="clearfix mb-5 pb-5">
          <div className="container-fluid">
            <div className="row" data-aos="fade">
              <div className="col-md-12 text-center heading-wrap">
                <h2>Menu Highlights</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/pho-mai-que.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Cheese Sticks</h3>
                  <p>
                    (Phô Mai Que)
                  </p>
                  <p>Breaded mozzarella sticks, served with hot sauce.</p>
                  <p className="text-primary h3">45.000 VND</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/french-fries.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>French Fries</h3>
                  <p>
                    (Khoai Tây Chiên)
                  </p>
                  <p>Classic French fries, perfect for snacking. Served with ketchup.</p>
                  <p className="text-primary h3">35.000 VND</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/sausage.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Sausage</h3>
                  <p>
                    (Xúc Xích)
                  </p>
                  <p>Sliced German sausage, served with hot sauce.</p>
                  <p className="text-primary h3">40.000 VND</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/fish-balls.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Fish Balls</h3>
                  <p>
                    (Chả Cá Viên Chiên)
                  </p>
                  <p>Fried ground fish meat. Served with hot sauce.</p>
                  <p className="text-primary h3">40.000 VND</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/mojito.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Mojito</h3>
                  <p>
                    (Mojito)
                  </p>
                  <p>Made with white rum, sugar, lime juice, soda water, and mint.</p>
                  <p className="text-primary h3">60.000 VND</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/tra-dao.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Peach Tea</h3>
                  <p>
                    (Trà Đào)
                  </p>
                  <p>Black tea with peach syrup and peach slices.</p>
                  <p className="text-primary h3">45.000 VND</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/coconut-coffee.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Coconut Coffee</h3>
                  <p>
                    (Cà Phê Dừa)
                  </p>
                  <p>Coffee mixed with condensed milk and coconut milk.</p>
                  <p className="text-primary h3">35.000 VND</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/mango-smoothie.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Passion Mango Smoothie</h3>
                  <p>
                    (Sinh Tố Chanh Dây Xoài)
                  </p>
                  <p>Fresh mango and passionfruit blended into a smoothie.</p>
                  <p className="text-primary h3">$16.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-5">
              <h3>About Us</h3>
              <p className="mb-5">
                Bao Bistro is a passion project by a couple of Vietnamese-Americans. We hope you'll love our food and drinks as much as we do!
              </p>
              <ul className="list-unstyled footer-link d-flex footer-social">
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 mb-5">
              <div className="mb-5">
                <h3>Opening Hours</h3>
                <p>
                  <strong className="d-block font-weight-normal text-orange">
                    Monday-Sunday
                  </strong>{" "}
                  <p>6:30AM - 2:00PM</p>
                  <p>5:00PM - 8:00PM</p>
                </p>
              </div>
              <div>
                <h3>Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block">
                    <span className="d-block text-orange">Address:</span>
                    <span>Số 2 Đường 3 Tháng 2, Quận Hải Châu, TP Đà Nẵng, Việt Nam</span>
                  </li>
                  <li className="d-block">
                    <span className="d-block text-orange">Phone:</span>
                    <span>+84 969 303 388</span>
                  </li>
                  <li className="d-block">
                    <span className="d-block text-orange">Email:</span>
                    <span>baobistro@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.8291281300517!2d108.22129705606231!3d16.083214188872333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183c50e271e9%3A0x12ecde32a0b3abb8!2zMiDEkMaw4budbmcgMyBUaMOhbmcgMiwgVGh14bqtbiBQaMaw4bubYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1594630217004!5m2!1sen!2s" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} width={400} height={300} frameBorder={0} />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-12 text-md-center text-left">
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
