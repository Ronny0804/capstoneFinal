import React,{useState,useEffect} from 'react'
import '../../src/pages/ALLTemplates/Panshop/Panshop5.css'
import { useParams } from 'react-router-dom'

const P5 = ({data}) => {
const [allData,setAllData] = useState();
const [heroImg,setHeroImg] = useState("");

const [allbagImg,setAllBagImg] = useState([]);

  const {id}= useParams()

  useEffect(() => {
    setHeroImg(data.ourBagImg)
   //  console.log(data.ourBagImg)
    console.log(heroImg)
    console.log(typeof(heroImg))
  }, []) 

  console.log(id)
  console.log(data)
  
  return (
    <>
    <div id="Panshop5">
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">
                {data.hotelname}<span>.</span>
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
                  <a className="nav-link scrollto " href="#gallery">
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
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center" style={{backgroundImage:`url(${heroImg})`,backgroundSize : "cover" }} >
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <div className="row">
              <div className="col-xl-6">
                <h1>Fill Bettter with {data.hotelname}</h1>
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
                    {data.aboutdescription}
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
                        {data.pointone}
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
                        {data.pointtwo}
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
                        {data.pointthree}
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
                    {data.serviceone}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                    <span>02</span>
                    <h4>Repellat Nihil</h4>
                    <p>
                    {data.servicetwo}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                    <span>03</span>
                    <h4> Ad ad velit qui</h4>
                    <p>
                    {data.servicethree}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Why Us Section */}
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
                 <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">{data.menuname}</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-bs-toggle="tab" href="#tab-2">{data.menuname}</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-bs-toggle="tab" href="#tab-3">{data.menuname}</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-bs-toggle="tab" href="#tab-4">{data.menuname}</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-bs-toggle="tab" href="#tab-5">{data.menuname}</a>
               </li>
             </ul>
           </div>
           <div className="col-lg-9 mt-4 mt-lg-0">
             <div className="tab-content">
               <div className="tab-pane active show" id="tab-1">
                 <div className="row">
                   <div className="col-lg-8 details order-2 order-lg-1">
                     <h3>{data.menuprice}</h3>
                     <p className="fst-italic">{data.menutype}</p>
                     <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                   </div>
                   <div className="col-lg-4 text-center order-1 order-lg-2">
                     <img src="assets5/img/specials-1.png" alt className="img-fluid" />
                   </div>
                 </div>
               </div>
               <div className="tab-pane" id="tab-2">
                 <div className="row">
                   <div className="col-lg-8 details order-2 order-lg-1">
                     <h3>{data.menuprice}</h3>
                     <p className="fst-italic">{data.menutype}</p>
                     <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                   </div>
                   <div className="col-lg-4 text-center order-1 order-lg-2">
                     <img src="assets5/img/specials-2.png" alt className="img-fluid" />
                   </div>
                 </div>
               </div>
               <div className="tab-pane" id="tab-3">
                 <div className="row">
                   <div className="col-lg-8 details order-2 order-lg-1">
                     <h3>{data.menuprice}</h3>
                     <p className="fst-italic">{data.menutype}</p>
                     <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                   </div>
                   <div className="col-lg-4 text-center order-1 order-lg-2">
                     <img src="assets5/img/specials-3.png" alt className="img-fluid" />
                   </div>
                 </div>
               </div>
               <div className="tab-pane" id="tab-4">
                 <div className="row">
                   <div className="col-lg-8 details order-2 order-lg-1">
                     <h3>{data.menuprice}</h3>
                     <p className="fst-italic">{data.menutype}</p>
                     <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                   </div>
                   <div className="col-lg-4 text-center order-1 order-lg-2">
                     <img src="assets5/img/specials-4.png" alt className="img-fluid" />
                   </div>
                 </div>
               </div>
               <div className="tab-pane" id="tab-5">
                 <div className="row">
                   <div className="col-lg-8 details order-2 order-lg-1">
                     <h3>{data.menuprice}</h3>
                     <p className="fst-italic">{data.menutype}</p>
                     <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                   </div>
                   <div className="col-lg-4 text-center order-1 order-lg-2">
                     <img src="assets5/img/specials-5.png" alt className="img-fluid" />
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
              {data.ourImg.map((value)=>{
  return(
<>
 <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="HotelAsset/assets5/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                <img src={value.imgs} alt className="img-fluid" />
              </a>
            </div>
          </div>
          
  </>
)
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
                        <p>{data.location}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Us</h3>
                        <p>
                        {data.email}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Us</h3>
                        <p>
                        {data.phone}
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
                    {data.location}
                    <strong>Phone:</strong> {data.phone}
                    <br />
                    <strong>Email:</strong> {data.email}
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
                <span>{data.hotelname}</span>
              </strong>
              . All Rights Reserved
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
  )
}

export default P5