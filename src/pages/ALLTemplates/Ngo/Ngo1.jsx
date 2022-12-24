import React from "react";
import "./Ngo1.css";
import { Link } from "react-router-dom";
const Ngo1 = () => {
  return (
    <>
      <div id="ngo1">
      <Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link>
        <section id="topbar" className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">contact@example.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+1 5589 55488 55</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </section>
        {/* End Top Bar */}
        <header id="header" className="header d-flex align-items-center">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="
              /img/logo.png" alt=""> */}
              <h1>
                Impact<span>.</span>
              </h1>
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* .navbar */}
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          </div>
        </header>
        {/* End Header */}
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>
                  Welcome to <span>Impact</span>
                </h2>
                <p>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                  eveniet. Eum quas beatae cumque eum quaerat.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle" />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="NgoAsset/ngo1_asset/img/hero-img.svg"
                  className="img-fluid"
                  alt
                  data-aos="zoom-out"
                  data-aos-delay={100}
                />
              </div>
            </div>
          </div>
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-easel" />
                    </div>
                    <h4 className="title">
                      <a href className="stretched-link">
                        INTERCONNECTION
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-gem" />
                    </div>
                    <h4 className="title">
                      <a href className="stretched-link">
                        GROWTH MINDSET
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <h4 className="title">
                      <a href className="stretched-link">
                        INTEGRITY
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-command" />
                    </div>
                    <h4 className="title">
                      <a href className="stretched-link">
                        ACTIVE HOPE
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
        <main id="main">
          {/* ======= About Us Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>About Us</h2>
                <p>
                  Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                  porro incidunt dolores placeat sunt id nobis omnis tiledo
                  stran delop
                </p>
              </div>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <h3>Voluptatem dignissimos provident quasi corporis</h3>
                  <img
                    src="NgoAsset/ngo1_asset/img/about.jpg"
                    className="img-fluid rounded-4 mb-4"
                    alt
                  />
                  <p>
                    Ut fugiat ut sunt quia veniam. Voluptate perferendis
                    perspiciatis quod nisi et. Placeat debitis quia recusandae
                    odit et consequatur voluptatem. Dignissimos pariatur
                    consectetur fugiat voluptas ea.
                  </p>
                  <p>
                    Temporibus nihil enim deserunt sed ea. Provident sit
                    expedita aut cupiditate nihil vitae quo officia vel.
                    Blanditiis eligendi possimus et in cum. Quidem eos ut sint
                    rem veniam qui. Ut ut repellendus nobis tempore doloribus
                    debitis explicabo similique sit. Accusantium sed ut omnis
                    beatae neque deleniti repellendus.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Duis aute
                        irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill" /> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident
                    </p>
                    <div className="position-relative mt-4">
                      <img
                        src="NgoAsset/ngo1_asset/img/about-2.jpg"
                        className="img-fluid rounded-4"
                        alt
                      />
                      <a
                        href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        className="glightbox play-btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Us Section */}

          {/* ======= Call To Action Section ======= */}
          <section id="call-to-action" className="call-to-action">
            <div className="container text-center" data-aos="zoom-out">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </section>
          {/* End Call To Action Section */}
          {/* ======= Our Services Section ======= */}
          <section id="services" className="services sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Our Visions</h2>
                <p>
                  Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                  porro incidunt dolores placeat sunt id nobis omnis tiledo
                  stran delop
                </p>
              </div>
              <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item  position-relative">
                    <div className="icon">
                      <i className="bi bi-activity" />
                    </div>
                    <h3>Diversity and inclusivity</h3>
                    <p>
                    We understand, accept and value differences between people including race, ethnicity, gender, age, religion and disability. We are collaborative, supportive and respect environment that increases participation and contribution of all stakeholders
                    </p>
                    <a href="#" className="readmore stretched-link">
                      Read more <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Service Item */}
                <div className="col-lg-4 col-md-6">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-broadcast" />
                    </div>
                    <h3> Quality service</h3>
                    <p>
                   We strive to attain excellence in service delivery by truly understanding our stakeholder’s expectations and implementing the right guidelines and service standards.
                    </p>
                    <a href="#" className="readmore stretched-link">
                      Read more <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Service Item */}
                <div className="col-lg-4 col-md-6">
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-easel" />
                    </div>
                    <h3>Integrity</h3>
                    <p>
                    We show impartiality, fairness and honesty while upholding the highest ethical standards. We seek to remain accountable and transparent in all our dealings as we deliver services to stakeholders.
                    </p>
                    <a href="#" className="readmore stretched-link">
                      Read more <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Service Item */}
              </div>
            </div>
          </section>
          {/* End Our Services Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Portfolio</h2>
                <p>
                  Quam sed id excepturi ccusantium dolorem ut quis dolores nisi
                  llum nostrum enim velit qui ut et autem uia reprehenderit sunt
                  deleniti
                </p>
              </div>
              <div
                className="portfolio-isotope"
                data-portfolio-filter="*"
                data-portfolio-layout="masonry"
                data-portfolio-sort="original-order"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div>
                  <ul className="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                  </ul>
                  {/* End Portfolio Filters */}
                </div>
                <div className="row gy-4 portfolio-container">
                  <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/app-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/app-1.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/product-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/product-1.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/branding-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/branding-1.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/books-1.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/books-1.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/app-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/app-2.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/product-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/product-2.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/branding-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/branding-2.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/books-2.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/books-2.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/app-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/app-3.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/product-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/product-3.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/branding-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/branding-3.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                  <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                    <div className="portfolio-wrap">
                      <a
                        href="NgoAsset/ngo1_asset/img/portfolio/books-3.jpg"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox"
                      >
                        <img
                          src="NgoAsset/ngo1_asset/img/portfolio/books-3.jpg"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                  {/* End Portfolio Item */}
                </div>
                {/* End Portfolio Container */}
              </div>
            </div>
          </section>
          {/* End Portfolio Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Contact</h2>
                <p>
                  Nulla dolorum nulla nesciunt rerum facere sed ut inventore
                  quam porro nihil id ratione ea sunt quis dolorem dolore earum
                </p>
              </div>
              <div className="row gx-lg-0 gy-4">
                <div className="col-lg-4">
                  <div className="info-container d-flex flex-column align-items-center justify-content-center">
                    <div className="info-item d-flex">
                      <i className="bi bi-geo-alt flex-shrink-0" />
                      <div>
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="info-item d-flex">
                      <i className="bi bi-envelope flex-shrink-0" />
                      <div>
                        <h4>Email:</h4>
                        <p>info@example.com</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="info-item d-flex">
                      <i className="bi bi-phone flex-shrink-0" />
                      <div>
                        <h4>Call:</h4>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="info-item d-flex">
                      <i className="bi bi-clock flex-shrink-0" />
                      <div>
                        <h4>Open Hours:</h4>
                        <p>Mon-Sat: 11AM - 23PM</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                  </div>
                </div>
                <div className="col-lg-8">
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
                        rows={7}
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
                {/* End Contact Form */}
              </div>
            </div>
          </section>
          {/* End Contact Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span>Impact</span>
                </a>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div className="social-links d-flex mt-4">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">Donate</a>
                  </li>
                  <li>
                    <a href="#">Act</a>
                  </li>
                  <li>
                    <a href="#">Grit</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Impact</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        {/* End Footer */}
        <br />
      </div>
    </>
  );
};

export default Ngo1;
