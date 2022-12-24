import React from 'react'

const N2 = () => {
  return (
   <>
   <div id='ngo2'>
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </section>
  {/* ======= Header ======= */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="index.html">BizLand<span>.</span></a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo"><img src="NgoAsset/ngo2_asset/img/logo.png" alt=""></a>*/}
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay={100}>
      <h1>Welcome to <span>BizLand</span></h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
      </div>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= Featured Services Section ======= */}
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a href>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Featured Services Section */}
    {/* ======= About Section ======= */}
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
            <img src="NgoAsset/ngo2_asset/img/about.jpg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={100}>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bx bx-store-alt" />
                <div>
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images" />
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                </div>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <h3>Check our <span>Services</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4><a href>Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4><a href>Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4><a href>Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4><a href>Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow" /></div>
              <h4><a href>Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch" /></div>
              <h4><a href>Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
{/* ======= Portfolio Section ======= */}
<section id="portfolio" className="portfolio">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Portfolio</h2>
      <h3>Check our <span>Portfolio</span></h3>
      <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
    </div>
    <div className="row" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
        </ul>
      </div>
    </div>
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>App 2</h4>
          <p>App</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Card 2</h4>
          <p>Card</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Web 2</h4>
          <p>Web</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>App 3</h4>
          <p>App</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Card 1</h4>
          <p>Card</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Card 3</h4>
          <p>Card</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="NgoAsset/ngo2_asset/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
        <div className="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="NgoAsset/ngo2_asset/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
          <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
        </div>
      </div>
    </div>
  </div>
</section>{/* End Portfolio Section */}




    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: 384}} allowFullScreen />
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action method="post">
              <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>BizLand<span>.</span></h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-4">
      <div className="copyright">
        © Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>{/* End Footer */}
</div>
   </>
  )
}

export default N2