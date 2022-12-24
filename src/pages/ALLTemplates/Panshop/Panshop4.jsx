import React from 'react'
import './Panshop4.css'
import { Link } from 'react-router-dom'
const Panshop4 = () => {
  return (
<>
<div id="Panshop4">
<Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link>

 {/* Header Section Starts Here */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">Arsha</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets4/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
          <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="getstarted scrollto" href="hero">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
          <h1>Better Is What We Offer For You</h1>
        
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#why-us" className="btn-get-started scrollto">Why Us</a>
           
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="zoom-in" data-aos-delay={200}>
          <img src="assets4/img/hero-img.png" className="img-fluid animated" alt />
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>About Us</h2>
      </div>
      <div className="row content">
        <div className="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#" className="btn-learn-more">Learn More</a>
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}
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
       <div className="container" data-aos="fade-up">
         <div className="section-title">
           <h2>Specials</h2>
           <p>Check Our Specials</p>
         </div>
         <div className="row" data-aos="fade-up" data-aos-delay={100}>
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
                     <img src="assets4/img/specials-1.png" alt className="img-fluid" />
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
                     <img src="assets4/img/specials-2.png" alt className="img-fluid" />
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
                     <img src="assets4/img/specials-3.png" alt className="img-fluid" />
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
                     <img src="assets4/img/specials-4.png" alt className="img-fluid" />
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
                     <img src="assets4/img/specials-5.png" alt className="img-fluid" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>{/* End Specials Section */}
     {/* ======= Gallery Section ======= */}
     <section id="gallery" className="gallery">
            <div className="container">
              <div className="section-title">
                <h2>
                  Gallery
                </h2>
                <p>
                Some photos from <span>Our panshop</span>
                </p>
              </div>
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-1.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-1.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-2.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-2.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-3.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-3.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-4.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-4.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-5.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-5.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-6.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-6.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-7.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-7.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets4/img/gallery/gallery-8.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets4/img/gallery/gallery-8.png"
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
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
          </div>
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
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
  {/* End #main */}
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
            <h3>Arsha</h3>
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
              <li><i className="bx bx-chevron-right" /> <a href="#">Events Order</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Quality</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Home Delivery</a></li>
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
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        © Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
        Designed by <a href="https://bootstrapmade.com/">NRIT</a>
      </div>
    </div>
  </footer>
</div>

</>
  )
}

export default Panshop4