import React from "react";

const Panshop5 = () => {
  return (
    <>
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">
                Presento<span>.</span>
              </a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo me-auto"><img src="assets5/img/logo.png" alt=""></a>*/}
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
                  <a className="nav-link scrollto " href="#portfolio">
                    Portfolio
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
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row">
              <div className="col-xl-6">
                <h1>Fill Bettter with Presento</h1>
                <a href="#why-us" className="btn-get-started scrollto">
                  Why Us..!!
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Voluptatem dignissimos provident quasi</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <a href="#" className="about-btn">
                      <span>About us</span>{" "}
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <i className="bx bx-receipt" />
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <i className="bx bx-cube-alt" />
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <i className="bx bx-images" />
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                      <div
                        className="col-md-6 icon-box"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <i className="bx bx-shield" />
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End .content*/}
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
                <p>Why Choose Our Restaurant</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                    <span>01</span>
                    <h4>Lorem Ipsum</h4>
                    <p>
                      Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                      consectetur ducimus vero placeat
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                    <span>02</span>
                    <h4>Repellat Nihil</h4>
                    <p>
                      Dolorem est fugiat occaecati voluptate velit esse. Dicta
                      veritatis dolor quod et vel dire leno para dest
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                    <span>03</span>
                    <h4> Ad ad velit qui</h4>
                    <p>
                      Molestiae officiis omnis illo asperiores. Aut doloribus
                      vitae sunt debitis quo vel nam quis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Why Us Section */}

          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title" data-aos="fade-left">
                <h2>Gallery</h2>
                <p>Some Photos from our Shop</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-app">Masala</li>
                    <li data-filter=".filter-card">Sweat</li>
                    <li data-filter=".filter-web"></li>
                  </ul>
                </div>
              </div>
              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-1.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Masala 1</h4>
                      <p>Masala</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-1.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-2.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat 1</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-2.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-3.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Masala 2</h4>
                      <p>Masala</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-3.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-4.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat 2</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-4.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-5.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Masala 3</h4>
                      <p>Masala</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-5.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-6.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-6.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-7.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-7.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-8.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-8.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets5/img/portfolio/portfolio-9.png"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Sweat</h4>
                      <p>Sweat</p>
                      <div className="portfolio-links">
                        <a
                          href="assets5/img/portfolio/portfolio-9.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                        <a href="portfolio-details.html" title="More Details">
                          <i className="bx bx-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End Portfolio Section */}

          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea.
                </p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-map" />
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Us</h3>
                        <p>
                          info@example.com
                          <br />
                          contact@example.com
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Us</h3>
                        <p>
                          +1 5589 55488 55
                          <br />
                          +1 6678 254445 41
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="col form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col form-group">
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
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
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
        <footer id="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center"></div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Arsha</h3>
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
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Events Order</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Quality</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Home Delivery</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Arsha</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
  );
};

export default Panshop5;
