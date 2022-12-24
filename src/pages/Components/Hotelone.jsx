import React from "react";
import { useSelector } from "react-redux";
import "./CSS/hotelone.css"
const Hotelone = () => {
  const inputValues = useSelector((state) => state.getInputValues.value);
  // console.log(inputValues.value.username)
  // console.log(inputValues.id);
  const imageValues = useSelector((state) => state.getImageValues.value);
  const getMenuValues = useSelector((state) => state.getMenuValues.value);
  const getbagImageValues = useSelector((state) => state.getbagImageValues.value)

  console.log(getbagImageValues.value)
  
  return (
    <>
      <div id="restaurantly">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center">
                <span>{inputValues.value.email}</span>
              </i>
              <i className="bi bi-clock d-flex align-items-center ms-4">
                <span>{inputValues.value.openHours}</span>
              </i>
            </div>
            <div className="languages d-none d-md-flex align-items-center">
              <ul>
                <li>En</li>
                <li>
                  <a href="#">De</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-cente">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <h1 className="logo me-auto me-lg-0">
              <a href="index.html">{inputValues.value.hotelname}</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#specials">
                    Specials
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#gallery">
                    Gallery
                  </a>
                </li>

                <li>
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
            <a
              href="#book-a-table"
              className="book-a-table-btn scrollto d-none d-lg-flex"
            >
              Book a table
            </a>
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center" style={{backgroundImage:`url('${getbagImageValues.value}')`}}>
          <div
            className="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  Welcome to <span>{inputValues.value.hotelname}</span>
                </h1>
                <h2>Delivering great food for more than 18 years!</h2>
                <div className="btns">
                  <a
                    href="#menu"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#book-a-table"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <a
                  href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                  className="glightbox play-btn"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="about-img">
                    <img src="assets/img/about.jpg" alt />
                  </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content text-light">
                  <h3>About Us</h3>
                  <p className="fst-italic">
                    {inputValues.value.aboutdescription}
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      {inputValues.value.pointone}
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      {inputValues.value.pointtwo}
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      {inputValues.value.pointthree}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Why Us</h2>
                <p>Why Choose Our Shop</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                    <span>01</span>
                    <h4>Online Booking</h4>
                    <p>{inputValues.value.serviceone}</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                    <span>02</span>
                    <h4>Quality Food</h4>
                    <p>{inputValues.value.servicetwo}</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                    <span>03</span>
                    <h4>Specialty</h4>
                    <p>{inputValues.value.servicethree}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Why Us Section */}

          {/* ======= Specials Section ======= */}
          {/* <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Specials</h2>
                <p>Check Our Specials</p>
                <div
                  className="row bg-dark pt-5"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="col-lg-3">
                    <ul className="nav nav-tabs flex-column ">
                      {imageValues.value.map((item, i) => {
                        console.log(item.des);
                        return (
                          <li className="nav-item text-dark ">
                            <a
                              className="nav-link  show"
                              data-bs-toggle="tab"
                              href={item.id}
                            >
                              {item.des}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-lg-9 mt-4 mt-lg-0">
                    <div className="tab-content">
                      {imageValues.value.map((item, i) => {
                        console.log(item.des);
                        return (
                          <div className="tab-pane active show" id={item.id}>
                            <div className="row">
                              <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>{item.name}</h3>
                                <p className="fst-italic">{item.des}</p>
                              </div>
                              <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src={item.img} alt className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* End Specials Section */}

          <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Menu</h2>
                <p>Check Our Tasty Menu</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-starters">Starters</li>
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-specialty">Specialty</li>
                  </ul>
                </div>
              </div>
              <div
                className="row menu-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {getMenuValues.value.map((item)=>{
                  console.log(item)
                  return (
                    <>
                      <p>{item.des}</p>
                    </>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Gallery</h2>
                <p>Some photos from Our Restaurant</p>
              </div>
            </div>
            <div
              className="container-fluid"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="row g-0">
                {imageValues.value.map((item, i) => {
                  return (
                    <>
                      <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                          <a
                            href="assets/img/gallery/gallery-8.jpg"
                            className="gallery-lightbox"
                            data-gall="gallery-item"
                          >
                            <img src={item.imgs} alt className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          {/* End Gallery Section */}

          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
            </div>
            <div data-aos="fade-up">
              <iframe
                style={{ border: 0, width: "100%", height: 350 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621https://goo.gl/maps/JSq8Jrrtwkcq8dqr6"
                frameBorder={0}
                allowFullScreen
              />
            </div>
            <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>{inputValues.value.location}</p>
                    </div>
                    <div className="open-hours">
                      <i className="bi bi-clock" />
                      <h4>Open Hours:</h4>
                      <p>
                        Monday-Saturday:
                        <br />
                        {inputValues.value.openHours}
                      </p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>{inputValues.value.email}</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p>{inputValues.value.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={8}
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        {/* End Footer */}
        <div />
      </div>
    </>
  );
};

export default Hotelone;
