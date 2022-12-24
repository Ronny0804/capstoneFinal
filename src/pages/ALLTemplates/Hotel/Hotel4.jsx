import React from 'react'
import './Hotel4.css'
import { Link } from 'react-router-dom'
const Hotel4 = () => {
  return (
    <>
   <div id="Hotel4">
   <Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link>
  <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="logo me-auto">
        <h1><a href="index.html">Delicious</a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="HotelAsset/assets4/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <a href="#book-a-table" className="book-a-table-btn scrollto">Book a table</a>
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
        <div className="carousel-inner" role="listbox">
          {/* Slide 1 */}
          <div className="carousel-item active" style={{backgroundImage: 'url(HotelAsset/assets4/img/slide-1.jpg)'}}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
{/* About us Section */}
 <section id="about" className="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5 align-items-stretch video-box" style={{backgroundImage: 'url("HotelAsset/assets4/img/about.jpg")'}}>
        
      </div>
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
        <div className="content">
          <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="bx bx-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="bx bx-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="bx bx-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  </div>
</section>{/* End About Section */}

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
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="box" data-aos="zoom-in" data-aos-delay={200}>
            <span>02</span>
            <h4>Repellat Nihil</h4>
            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="box" data-aos="zoom-in" data-aos-delay={300}>
            <span>03</span>
            <h4> Ad ad velit qui</h4>
            <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Why Us Section */}

  {/* ======= Specials Section ======= */}
  <section id="specials" className="specials">
      <div className="container">
        <div className="section-title">
          <h2>Check our Specials</h2>
          
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
                    <img src="HotelAsset/assets4/img/specials-1.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets4/img/specials-2.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets4/img/specials-3.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets4/img/specials-4.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets4/img/specials-5.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Specials Section */}
  {/* ======= Book A Table Section ======= */}
  <section id="book-a-table" className="book-a-table">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Book A Table</h2>
        <p>Book <span>Your Stay</span> With Us</p>
      </div>
      <div className="row g-0">
        <div className="col-lg-4 reservation-img" style={{backgroundImage: 'url(HotelAsset/assets4/img/reservation.jpg)'}} data-aos="zoom-out" data-aos-delay={200} />
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
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Gallery</h2>
        <p>Some photos from Our Restaurant</p>
      </div>
    </div>
    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-1.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-2.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-3.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-4.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-5.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-6.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-7.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="HotelAsset/assets4/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
              <img src="HotelAsset/assets4/img/gallery/gallery-8.jpg" alt className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Gallery Section */}
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
    </div>
    <div data-aos="fade-up">
      <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
    </div>
    <div className="container" data-aos="fade-up">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="open-hours">
              <i className="bi bi-clock" />
              <h4>Open Hours:</h4>
              <p>
                Monday-Saturday:<br />
                11:00 AM - 2300 PM
              </p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={8} placeholder="Message" required defaultValue={""} />
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
</div>

    </>
  )
}

export default Hotel4