import React from 'react'
import './Hotel2.css'
import { Link } from 'react-router-dom'
const Hotel2 = () => {
  return (
    <>
   <div id="Hotel2">
   <Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link>
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
        {/* Uncomment the line below if you yalso wish to use an image logo */}
        {/* <img src="HotelAsset/assets2/img/logo.png" alt=""> */}
        <h1>Yummy<span>.</span></h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>{/* .navbar */}
      <a className="btn-book-a-table" href="#book-a-table">Book a Table</a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
          <p data-aos="fade-up" data-aos-delay={100}>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="./HotelAsset/assets2/img/hero-img.png" className="img-fluid" alt data-aos="zoom-out" data-aos-delay={300} />
        </div>
      </div>
    </div>
  </section>{/* End Hero Section */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{backgroundImage: 'url(HotelAsset/assets2/img/about.jpg)'}} data-aos="fade-up" data-aos-delay={150}>
            <div className="call-us position-absolute">
              <h4>Book a Table</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay={300}>
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check2-all" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
              <div className="position-relative mt-4">
                <img src="HotelAsset/assets2/img/about-2.jpg" className="img-fluid" alt />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="why-box">
              <h3>Why Choose Yummy?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
              </div>
            </div>
          </div>{/* End Why Box */}
          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-clipboard-data" />
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>{/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem" />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>{/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-inboxes" />
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>{/* End Icon Box */}
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
   
    
    {/* ======= Specials Section ======= */}
    <section id="specials" className="specials">
      <div className="container">
        <div className="section-header">
          <h2><span>Specials</span></h2>
          <p>Our <span>Some Special </span>Menus</p>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Architecto ut aperiam autem id</h3>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="HotelAsset/assets2/img/specials-1.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="HotelAsset/assets2/img/specials-2.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                    <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="HotelAsset/assets2/img/specials-3.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                    <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                    <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="HotelAsset/assets2/img/specials-4.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                    <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="HotelAsset/assets2/img/specials-5.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Specials Section */}
    
    ~
    {/* ======= Book A Table Section ======= */}
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Book A Table</h2>
          <p>Book <span>Your Stay</span> With Us</p>
        </div>
        <div className="row g-0">
          <div className="col-lg-4 reservation-img" style={{backgroundImage: 'url(HotelAsset/assets2/img/reservation.jpg)'}} data-aos="zoom-out" data-aos-delay={200} />
          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Book a Table</button></div>
            </form>
          </div>{/* End Reservation Form */}
        </div>
      </div>
    </section>{/* End Book A Table Section */}
   {/* ======= Gallery Section ======= */}
   <section id="gallery" className="gallery">
      <div className="container">
      <div className="section-header">
          <h2>Gallery</h2>
          <p>Some photos from <span>Our Restaurant</span></p>
        </div>
       
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-1.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-2.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-3.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-4.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-5.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-6.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-7.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets2/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                <img src="HotelAsset/assets2/img/gallery/gallery-8.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Gallery Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>
        <div className="mb-3">
          <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
        </div>{/* End Google Maps */}
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0" />
              <div>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0" />
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Sat:</strong> 11AM - 23PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div>{/* End Info Item */}
        </div>
        <form action="forms/contact.php" method="post" role="form" className="php-email-form p-3 p-md-4">
          <div className="row">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-xl-6 form-group">
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
        {/*End Contact Form */}
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon" />
          <div>
            <h4>Address</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022 - US<br />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon" />
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-clock icon" />
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 11AM</strong> - 23PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>{/* End Footer */}
  {/* End Footer */}
  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>

    </>
  )
}

export default Hotel2