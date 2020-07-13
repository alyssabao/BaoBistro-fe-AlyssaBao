import React from "react";

export default function Contact() {
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
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="recipes.html">
                    Recipes
                  </a>
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
                  <a className="nav-link " href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="news.html">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* END header */}
      <div className="slider-wrap">
        <div
          className="slider-item"
          style={{ backgroundImage: 'url("img/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
        {/* END slider */}
      </div>
      <section className="section  pt-5 top-slant-white2 relative-higher bottom-slant-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name" className="text-orange">Name</label>
                    <input type="text" id="name" className="form-control " />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone" className="text-orange">Phone</label>
                    <input type="text" id="phone" className="form-control " />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group"></div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="email" className="text-orange">Email</label>
                    <input type="email" id="email" className="form-control " />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message" className="text-orange">Write Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control "
                      cols={30}
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 pl-2 pl-lg-5">
              <div className="col-md-8 mx-auto contact-form-contact-info">
                <h4 className="mb-5">Contact Details</h4>
                <p className="d-flex">
                  <span className="ion-ios-location icon mr-5" />
                  <span className="text-white">Số 2 Đường 3 Tháng 2, Quận Hải Châu, TP Đà Nẵng, Việt Nam</span>
                </p>
                <p className="d-flex">
                  <span className="ion-ios-telephone icon mr-5" />
                  <span className="text-white">+84 969 303 388</span>
                </p>
                <p className="d-flex">
                  <span className="ion-android-mail icon mr-5" />
                  <span className="text-white">baobistro@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light pt-0 relative-higher">
        <div className="clearfix mb-5 pb-5 ">
          <div className="container-fluid">
            <div className="row" data-aos="fade">
              <div className="col-md-12 text-center heading-wrap">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel centernonloop2">
                <div
                  className="slide"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <blockquote className="testimonial">
                    <p>
                      “ Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. ”
                    </p>
                    <div className="d-flex author">
                      <img src="img/person_1.jpg" alt="" className="mr-4" />
                      <div className="author-info">
                        <h4>Mellisa Howard</h4>
                        <p>CEO, XYZ Company</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div
                  className="slide"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <blockquote className="testimonial">
                    <p>
                      “ Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. ”
                    </p>
                    <div className="d-flex author">
                      <img src="img/person_2.jpg" alt="" className="mr-4" />
                      <div className="author-info">
                        <h4>Mike Richardson</h4>
                        <p>CEO, XYZ Company</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div
                  className="slide"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <blockquote className="testimonial">
                    <p>
                      “ Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. ”
                    </p>
                    <div className="d-flex author">
                      <img src="img/person_3.jpg" alt="" className="mr-4" />
                      <div className="author-info">
                        <h4>Charles White</h4>
                        <p>CEO, XYZ Company</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* .section */}
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
