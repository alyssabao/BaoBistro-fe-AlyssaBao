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
                    <Link to={`/menu`} className="nav-link">Menu</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="services.html"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="services.html">
                      Delicious Food
                    </a>
                    <a className="dropdown-item" href="services.html">
                      Enjoy Drinks
                    </a>
                    <a className="dropdown-item" href="services.html">
                      Eat All You Can
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="news.html">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="slider-wrap">
        <div
          className="slider-item"
          style={{ backgroundImage: 'url("img/hero_1.jpg")' }}
        ></div>
        {/* <section className="home-slider owl-carousel">
        <div className="slider-item" style={{backgroundImage: 'url("img/hero_1.jpg")'}}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up mb-5">Eat, Drinks at Gourmet</h1>
                <p data-aos="fade-up" data-aos-delay={200}><a href="#" className="btn btn-white btn-outline-white">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item" style={{backgroundImage: 'url("img/hero_2.jpg")'}}>
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up mb-5">Enjoy delicious food at Gourmet</h1>
                <p data-aos="fade-up" data-aos-delay={200}><a href="#" className="btn btn-white btn-outline-white">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
      <section className="section bg-light py-5  bottom-slant-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="img/hero_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="text-left heading-wrap">
                <h2 data-aos="fade-up">Bao Bistro</h2>
              </div>
              <h3 className="mb-4">Welcome To Our Restaurant</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                ut enim quam laboriosam illum amet.
              </p>
              <p>
                Obcaecati nisi ipsum possimus necessitatibus tempore, illo id
                facere magni quisquam quam quaerat accusamus dolores?
              </p>
              <p>
                <img
                  src="img/signature.png"
                  alt="Image"
                  className="img-fluid w-25"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section pb-0">
        <div className="container">
          <div className="row mb-5 justify-content-center" data-aos="fade">
            <div className="col-md-7 text-center heading-wrap">
              <h2 data-aos="fade-up">Best &amp; Good</h2>
              <p data-aos="fade-up" data-aos-delay={100}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img
                src="img/dishes_1.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={200}
              />
            </div>
            <div className="col-lg-4">
              <img
                src="img/about_1.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={200}
              />
            </div>
            <div className="col-lg-4">
              <img
                src="img/dishes_3.jpg"
                alt="Image"
                className="img-fluid about_img_1"
                data-aos="fade"
                data-aos-delay={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="clearfix mb-5 pb-5">
          <div className="container-fluid mb-5">
            <div className="row" data-aos="fade">
              <div className="col-md-12 text-center heading-wrap">
                <h2>Special Menu</h2>
              </div>
            </div>
          </div>
          <div className="owl-carousel centernonloop">
            <a
              href="#"
              className="item-dishes"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <div className="text">
                <p className="dishes-price">$11.50</p>
                <h2 className="dishes-heading">
                  Organic tomato salad, gorgonzola cheese, capers
                </h2>
              </div>
              <img src="img/dishes_1.jpg" alt="" className="img-fluid" />
            </a>
            <a
              href="#"
              className="item-dishes"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <div className="text">
                <p className="dishes-price">$12.00</p>
                <h2 className="dishes-heading">Baked broccoli</h2>
              </div>
              <img src="img/dishes_2.jpg" alt="" className="img-fluid" />
            </a>
            <a
              href="#"
              className="item-dishes"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="text">
                <p className="dishes-price">$11.00</p>
                <h2 className="dishes-heading">Spicy meatballs</h2>
              </div>
              <img src="img/dishes_3.jpg" alt="" className="img-fluid" />
            </a>
            <a
              href="#"
              className="item-dishes"
              data-aos="fade-right"
              data-aos-delay={400}
            >
              <div className="text">
                <p className="dishes-price">$12.00</p>
                <h2 className="dishes-heading">Eggplant parmigiana</h2>
              </div>
              <img src="img/dishes_4.jpg" alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </section>
      <section className="section bg-light  top-slant-white bottom-slant-gray">
        <div className="clearfix mb-5 pb-5">
          <div className="container-fluid">
            <div className="row" data-aos="fade">
              <div className="col-md-12 text-center heading-wrap">
                <h2>Our Menu</h2>
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
                  style={{ backgroundImage: 'url("img/dishes_4.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Baked new Zealand mussels </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$12.00</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/dishes_1.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Spicy Calamari and beans</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$12.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/dishes_2.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Bacon wrapped wild gulf prawns</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$18.00</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/dishes_3.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$16.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/dishes_4.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Baked new Zealand mussels </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$12.00</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/dishes_1.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Spicy Calamari and beans</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$12.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image order-2"
                  style={{ backgroundImage: 'url("img/dishes_2.jpg")' }}
                  data-aos="fade"
                />
                <div className="text order-1">
                  <h3>Bacon wrapped wild gulf prawns</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
                  <p className="text-primary h3">$18.00</p>
                </div>
              </div>
              <div className="sched d-block d-lg-flex">
                <div
                  className="bg-image"
                  style={{ backgroundImage: 'url("img/dishes_3.jpg")' }}
                  data-aos="fade"
                />
                <div className="text">
                  <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto illo delectus...
                  </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus et dolor blanditiis consequuntur ex voluptates
                perspiciatis omnis unde minima expedita.
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
