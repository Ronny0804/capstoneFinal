import React,{useState,useEffect} from 'react'
import '../../src/pages/ALLTemplates/Hotel/Hotel5.css'
import { useParams,} from 'react-router-dom'

const H5 = ({data}) => {

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
  

  return (
    <>
    
    <div id="Hotel5">
      
    {/* <Link to="/login">
    <div className='buynow'>
      BUY NOW
    </div>
    </Link> */}
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container">
      <div className="header-container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light"><a href="index.html"><span>{data.hotelname}</span></a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="HotelAsset/assets5/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
            <li><a className="nav-link scrollto " href="#gallery">Gallery</a></li>
           
           
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#book-a-table">Book a Table</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>{/* .navbar */}
      </div>{/* End Header Container */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center" style={{backgroundImage:`url(${heroImg})`,backgroundSize : "cover" }} >
    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay={200} >
      <h1>{data.hotelname}</h1>
      <h2>Enjoy Your Healthy
Delicious Food</h2>
      <a href="#why-us" className="btn-get-started scrollto">Why us</a>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
            <h2>Eum ipsam laborum deleniti velitena</h2>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            {/* {data.ourImg.map((value)=>{
            <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <p>{value.imgs}</p>
              <a href="HotelAsset/assets5/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                <img src="HotelAsset/assets5/img/gallery/gallery-2.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>
          })} */}
            <ul>
              <li><i className="ri-check-double-line" /> {data.pointone}</li>
              <li><i className="ri-check-double-line" /> {data.pointtwo}</li>
              <li><i className="ri-check-double-line" />  {data.pointthree}</li>
            </ul>
            <p className="fst-italic">
            {data.aboutdescription}
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
                  <p> {data.serviceone}</p>
                </div>
              </div>{/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem" />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p> {data.servicetwo}</p>
                </div>
              </div>{/* End Icon Box */}
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-inboxes" />
                  <h4>Labore consequatur incidid dolore</h4>
                  <p> {data.servicethree}</p>
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
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1"> {data.menuname}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2"> {data.menuname}</a>
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
                    <img src={data.allImgs} alt className="img-fluid" />
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
                    <img src="HotelAsset/assets5/img/specials-2.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets5/img/specials-3.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets5/img/specials-4.png" alt className="img-fluid" />
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
                    <img src="HotelAsset/assets5/img/specials-5.png" alt className="img-fluid" />
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
          <p>Book a Table</p>
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
          <div className="text-center"><button type="submit">Book a Table</button></div>
        </form>
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
    </section>{/* End Gallery Section */}
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
              <p>{data.location}</p>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="info">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>{data.email}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info w-100 mt-4">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>{data.phone}</p>
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
            <h3>{data.hotelname}</h3>
            <p>
            {data.location}
              <strong>Phone:</strong> {data.phone}<br />
              <strong>Email:</strong> {data.email}<br />
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
          © Copyright <strong><span>{data.hotelname}</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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

export default H5