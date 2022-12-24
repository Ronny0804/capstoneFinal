import React from "react";
import "./panshopone.css"
const Panshop1 = () => {
  return (
    <>
      <div id="panshop">
        
        {/* ======= Header ======= */}
        <header
          id="header"
          className=" d-flex align-items-center "
        >
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <div className="logo me-auto">
              <h1>
                <a href="../public/index.html">
                  <b>A-One</b>
                </a>
              </h1>

              {/* <a href="index.html"><img src="../public/assets/panshop/img/logo.png" alt classname="img-fluid" /></a> */}
            </div>
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
            <a href="#book-a-table" className="book-a-table-btn scrollto">
              Book a table
            </a>
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero">
          <div className="hero-container">
            {/* <div
              id="heroCarousel"
              data-bs-interval={5000}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            > */}
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              />
              <div className="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage: "url(https://media.gettyimages.com/photos/pakistani-shopkeeper-display-betel-leaf-is-known-as-paan-at-his-is-picture-id607553068?s=2048x2048)"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        <span>A-1</span> ...!!
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati
                        alias dolorem mollitia ut. Similique ea voluptatem. Esse
                        doloremque accusamus repellendus deleniti vel. Minus et
                        tempore modi architecto.
                      </p>
                      <div>
                        <a
                          href="#menu"
                          className="btn-menu animate__animated animate__fadeInUp scrollto"
                        >
                          Our Menu
                        </a>
                        <a
                          href="#book-a-table"
                          className="btn-book animate__animated animate__fadeInUp scrollto"
                        >
                          Book a Order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-5 align-items-stretch video-box"
                  style={{ backgroundImage: 'url("../public/assets/panshop/img/about.jpg")' }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                    className="venobox play-btn mb-4"
                    data-vbtype="video"
                    data-autoplay="true"
                  />
                </div>
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                  <div className="content">
                    <h3>
                      Eum ipsam laborum deleniti{" "}
                      <strong>velit pariatur architecto aut nihil</strong>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bx bx-check-double" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bx bx-check-double" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bx bx-check-double" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Whu Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container">
              <div className="section-title">
                <h2>
                  Why choose <span>Our Panshop</span>
                </h2>
                <p>
                  Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                  est adipisci expedita at voluptas atque vitae autem.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box">
                    <span>01</span>
                    <h4>Lorem Ipsum</h4>
                    <p>
                      Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                      consectetur ducimus vero placeat
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box">
                    <span>02</span>
                    <h4>Repellat Nihil</h4>
                    <p>
                      Dolorem est fugiat occaecati voluptate velit esse. Dicta
                      veritatis dolor quod et vel dire leno para dest
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box">
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
          {/* End Whu Us Section */}
          {/* ======= Menu Section ======= */}
          <section id="menu" className="menu">
            <div className="container">
              <div className="section-title">
                <h2>
                  Check our tasty <span>Menu</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">
                      Show All
                    </li>
                    <li data-filter=".filter-starters">Starters</li>
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-specialty">Specialty</li>
                  </ul>
                </div>
              </div>
              <div className="row menu-container">
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Meetha Pan</a>
                    <span>RS.10</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Chocolate Pan</a>
                    <span>RS.20</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Frozen Pan</a>
                    <span>RS.25</span>
                  </div>
                  <div className="menu-ingredients">
                    A delicate crab cake served on a toasted roll with lettuce
                    and tartar sauce
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Banarasi Pan</a>
                    <span>RS.30</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">VIP Pan</a>
                    <span>RS.40</span>
                  </div>
                  <div className="menu-ingredients">
                    Grilled chicken with provolone, artichoke hearts, and
                    roasted red pesto
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Fire Pan</a>
                    <span>RS.30</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">DryFruit Pan</a>
                    <span>Rs.40</span>
                  </div>
                  <div className="menu-ingredients">
                    Fresh spinach, crisp romaine, tomatoes, and Greek olives
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Rasmalai Pan</a>
                    <span>Rs.30</span>
                  </div>
                  <div className="menu-ingredients">
                    Fresh spinach with mushrooms, hard boiled egg, and warm
                    bacon vinaigrette
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Kohinoor</a>
                    <span>Rs.40</span>
                  </div>
                  <div className="menu-ingredients">
                    Plump lobster meat, mayo and crisp lettuce on a toasted
                    bulky roll
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Menu Section */}
          {/* ======= Specials Section ======= */}
          <section id="specials" className="specials">
            <div className="container">
              <div className="section-title">
                <h2>
                  Check our <span>Specials</span>
                </h2>
                <p>
                  Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                  est adipisci expedita at voluptas atque vitae autem.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <ul className="nav nav-tabs flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link active show"
                        data-bs-toggle="tab"
                        href="#tab-1"
                      >
                        Meetha Pan
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#tab-2"
                      >
                        Kohinoor
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tab-1">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Architecto ut aperiam autem id</h3>
                          <p className="fst-italic">
                            Qui laudantium consequatur laborum sit qui ad
                            sapiente dila parde sonata raqer a videna mareta
                            paulona marka
                          </p>
                          <p>
                            Et nobis maiores eius. Voluptatibus ut enim
                            blanditiis atque harum sint. Laborum eos ipsum ipsa
                            odit magni. Incidunt hic ut molestiae aut qui. Est
                            repellat minima eveniet eius et quis magni nihil.
                            Consequatur dolorem quaerat quos qui similique
                            accusamus nostrum rem vero
                          </p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src="../public/assets/panshop/img/specials-1.png
                            "
                            alt
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Et blanditiis nemo veritatis excepturi</h3>
                          <p className="fst-italic">
                            Qui laudantium consequatur laborum sit qui ad
                            sapiente dila parde sonata raqer a videna mareta
                            paulona marka
                          </p>
                          <p>
                            Ea ipsum voluptatem consequatur quis est. Illum
                            error ullam omnis quia et reiciendis sunt sunt est.
                            Non aliquid repellendus itaque accusamus eius et
                            velit ipsa voluptates. Optio nesciunt eaque beatae
                            accusamus lerode pakto madirna desera vafle de
                            nideran pal
                          </p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2 border-radius-50 ">
                          <img
                            src="../public/assets/panshop/img/specials-2.png"
                            alt
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Specials Section */}
          {/* {/* End Events Section */}
          
          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container-fluid">
              <div className="section-title">
                <h2>
                  Some photos from <span>Our panshop</span>
                </h2>
                <p>
                  Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                  est adipisci expedita at voluptas atque vitae autem.
                </p>
              </div>
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-1.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-1.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-2.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-2.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-3.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-3.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-4.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-4.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-5.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-5.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-6.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-6.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-7.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-7.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../public/assets/panshop/img/gallery/gallery-8.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../public/assets/panshop/img/gallery/gallery-8.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Gallery Section */}

          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>
                  <span>Contact</span> Us
                </h2>
                <p>
                  Ut possimus qui ut temporibus culpa velit eveniet modi omnis
                  est adipisci expedita at voluptas atque vitae autem.
                </p>
              </div>
            </div>
            {/* <div className="map">
              <iframe
                style={{ border: 0, width: "100%", height: 350 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder={0}
                allowFullScreen
              />
            </div> */}
            <div className="container mt-5">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 info">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-clock" />
                    <h4>Open Hours:</h4>
                    <p>
                      Monday-Saturday:
                      <br />
                      11:00 AM - 2300 PM
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>
                      +1 5589 55488 51
                      <br />
                      +1 5589 22475 14
                    </p>
                  </div>
                </div>
              </div>
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
          </section>
          {/* End Contact Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="container">
            <h3>A-One</h3>
            <p>
              Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
              eligendi fuga maxime saepe commodi placeat.
            </p>
            <div className="social-links">
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
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>A-One</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/ */}
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
          </div>
        </footer>
        {/* End Footer */}
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

export default Panshop1;
