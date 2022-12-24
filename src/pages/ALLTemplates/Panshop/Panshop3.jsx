import React from 'react'
import './Panshop3.css'
import { Link } from 'react-router-dom'
const Panshop3 = () => {
  return (
    <>
    <div id="Panshop3">
    <Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link>  
   <header id="header" className="fixed-top d-flex align-items-center">
     <div className="container">
       <div className="header-container d-flex align-items-center justify-content-between">
         <div className="logo">
           <h1 className="text-light"><a href="index.html"><span>Fivestar</span></a></h1>
           {/* Uncomment below if you prefer to use an image logo */}
           {/* <a href="index.html"><img src="assets3/img/logo.png" alt="" class="img-fluid"></a>*/}
         </div>
         <nav id="navbar" className="navbar">
           <ul>
             <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
             <li><a className="nav-link scrollto" href="#about">About</a></li>
             <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
             <li><a className="nav-link scrollto " href="#gallery">Gallery</a></li>
            
            
             <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
             <li><a className="getstarted scrollto" href="#book-a-table">Book a Order</a></li>
           </ul>
           <i className="bi bi-list mobile-nav-toggle" />
         </nav>{/* .navbar */}
       </div>{/* End Header Container */}
     </div>
   </header>{/* End Header */}
   {/* ======= Hero Section ======= */}
   <section id="hero" className="d-flex align-items-center">
     <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay={200}>
       <h1>Experience the Difference !!</h1>
       <h2>Enjoy The Delicious Items</h2>

       <a href="#why-us" className="btn-get-started scrollto">Why us</a>
     </div>
   </section>{/* End Hero */}
   <main id="main">
     {/* ======= About Section ======= */}
     <section id="about" className="about">
       <div className="container">
         <div className="row content">
           <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
             <h2>About title</h2>
             <h3>About Subtitle</h3>
           </div>
           <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
             <p>
             Description about your Shop
             </p>
             <ul>
               <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
               <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
               <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
             </ul>
             <p className="fst-italic">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               magna aliqua.
             </p>
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
               <h3>Why Choose Fivestar?</h3>
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
                     <img src="assets3/img/specials-1.png" alt className="img-fluid" />
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
                     <img src="assets3/img/specials-2.png" alt className="img-fluid" />
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
                     <img src="assets3/img/specials-3.png" alt className="img-fluid" />
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
                     <img src="assets3/img/specials-4.png" alt className="img-fluid" />
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
                     <img src="assets3/img/specials-5.png" alt className="img-fluid" />
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
           <h2>Reservation</h2>
           <p>Book a Order</p>
         </div>
         <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
           <div className="row">
             <div className="col-lg-4 col-md-6 form-group">
               <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
               <div className="validate" />
             </div>
             <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
               <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
               <div className="validate" />
             </div>
             <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
               <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
               <div className="validate" />
             </div>
             <div className="col-lg-4 col-md-6 form-group mt-3">
               <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
               <div className="validate" />
             </div>
             <div className="col-lg-4 col-md-6 form-group mt-3">
               <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
               <div className="validate" />
             </div>
             <div className="col-lg-4 col-md-6 form-group mt-3">
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
           <div className="text-center"><button type="submit">Book a Order</button></div>
         </form>
       </div>
     </section>{/* End Book A Table Section */}
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
                      href="../assets3/img/gallery/gallery-1.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-1.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-2.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-2.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-3.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-3.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-4.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-4.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-5.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-5.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-6.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-6.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-7.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-7.png"
                        alt
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="../assets3/img/gallery/gallery-8.png"
                      className="gallery-lightbox"
                    >
                      <img
                        src="../assets3/img/gallery/gallery-8.png"
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
         <div className="row">
           <div className="col-lg-4" data-aos="fade-right">
             <div className="section-title">
               <h2>Contact</h2>
               <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
             </div>
           </div>
           <div className="col-lg-8" data-aos="fade-up" data-aos-delay={100}>
             <iframe style={{border: 0, width: '100%', height: 270}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
             <div className="info mt-4">
               <i className="bi bi-geo-alt" />
               <h4>Location:</h4>
               <p>A108 Adam Street, New York, NY 535022</p>
             </div>
             <div className="row">
               <div className="col-lg-6 mt-4">
                 <div className="info">
                   <i className="bi bi-envelope" />
                   <h4>Email:</h4>
                   <p>info@example.com</p>
                 </div>
               </div>
               <div className="col-lg-6">
                 <div className="info w-100 mt-4">
                   <i className="bi bi-phone" />
                   <h4>Call:</h4>
                   <p>+1 5589 55488 55s</p>
                 </div>
               </div>
             </div>
             <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
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
     <div className="footer-top">
       <div className="container">
         <div className="row">
           <div className="col-lg-3 col-md-6 footer-contact">
             <h3>Fivestar</h3>
             <p>
               A108 Adam Street <br />
               New York, NY 535022<br />
               United States <br /><br />
               <strong>Phone:</strong> +1 5589 55488 55<br />
               <strong>Email:</strong> info@example.com<br />
             </p>
           </div>
           <div className="col-lg-2 col-md-6 footer-links">
             <h4>Useful Links</h4>
             <ul>
               <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
               <li><i className="bx bx-chevron-right" /> <a href="#about">About us</a></li>
               <li><i className="bx bx-chevron-right" /> <a href="#specials">Specials</a></li>
               <li><i className="bx bx-chevron-right" /> <a href="#gallery">Gallery</a></li>
               <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
             </ul>
           </div>
          
           <div className="col-lg-6 col-md-6 footer-newsletter">
             <h4>Join Our Newsletter</h4>
             <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
             <form action method="post">
               <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
             </form>
           </div>
         </div>
       </div>
     </div>
     <div className="container d-md-flex py-4">
       <div className="me-md-auto text-center text-md-start">
         <div className="copyright">
           © Copyright <strong><span>Fivestar</span></strong>. All Rights Reserved
         </div>
         <div className="credits">
           {/* All the links in the footer should remain intact. */}
           {/* You can delete the links only if you purchased the pro version. */}
           {/* Licensing information: https://bootstrapmade.com/license/ */}
           {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/ */}
          
         </div>
       </div>
       <div className="social-links text-center text-md-right pt-3 pt-md-0">
         <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
         <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
         <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
         <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
         <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
       </div>
     </div>
   </footer>{/* End Footer */}<br />
 </div>
 
 
     </>
  )
}

export default Panshop3