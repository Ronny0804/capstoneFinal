import React from "react";
import { Carousel,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useRef } from "react";
import { scroller } from "react-scroller";
const Home = () => {
  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "ed5c930f72a2c5f52074371420020f992e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            scroller.scrollTo(`MuiPaper-${commandData.qId}`, {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          } else if (commandData.command === "openMyYoutube") {
            // window.location.href = "https://youtube.com/c/CodeWithAkky";
            window.open("https://youtube.com/c/CodeWithAkky", "_blank");
          } else if (commandData.command === "openSourceCode") {
            // window.location.href =
            //   "https://github.com/akkySrivastava/chat-bot-ai";
            window.open(
              "https://github.com/akkySrivastava/chat-bot-ai",
              "_blank"
            );
          }
        },
      });
    }
  }, []);
  const user = useSelector(state=>state.user.user)
  return (
    <>
      <div id="homemain">
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">NRIT</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/home/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar ">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
         {user?(<button>{user.name}</button>):(<><li ><Link className="getstarted scrollto" to="/loginuser">LOGIN</Link></li>
          <li ><Link className="getstarted scrollto" to="/signupuser">SIGN UP</Link></li></>)}
          <li ><Link className="getstarted scrollto" to="/templates">Get Started</Link></li>
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
          <h1>Make your business shine on the web</h1>
          <h2>Your brand takes control of its visual representation with custom web design</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
          <img src="assets/home/img/hero-img.png" className="img-fluid animated" alt />
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= Clients Section ======= */}
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-1.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-2.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-3.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-4.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-5.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/home/img/clients/client-6.png" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </section>{/* End Cliens Section */}
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p >
            We believe that the design process must always consider how people use things in real life and lead to solutions that are clear, honest, and genuinely useful
            </p>
            <ul >
              <li><i className="ri-check-double-line" /> Our solution is your success</li>
              <li><i className="ri-check-double-line" /> Take your business to the next level?</li>
              <li><i className="ri-check-double-line" /> Simply the Best Web Design Company</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p className="text-dark">
            Custom web design can be the difference between a mediocre website and an awesome one.
            Web design is not about making a website—it’s about making an investment in your organization. Successful web design takes into account more than just aesthetics… It’s a reflection of you, your company, and your vision.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>platform that offers <strong>limitless opportunity</strong></h3>
              <p>
              Web Design is more than just making things look pretty. It’s about telling a story through the message and visuals that get your ideas across to your customers.
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>infinitely producing<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                    Bring your idea to life by building a website with a full range of advanced functionalities.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span>Infrastructure with Strength<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Get a foundation that is designed for unlimited scalability and peace of mind.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> simplicity of development<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Utilize integrated marketing and business tools to easily convert and scale.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/home/img/why-us.png")'}} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
    {/* ======= Skills Section ======= */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay={100}>
            <img src="assets/home/img/skills.png" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay={100}>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Photoshop <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Skills Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Create a visual impact with our user-friendly website design services</p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4><a href>MSME's</a></h4>
              <p>We make your business look good online.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4><a href>NGO's</a></h4>
              <p>We produce impactful, lasting results.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4><a href>Easy Hosting</a></h4>
              <p>Solving varying problems with technological solutions.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={400}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer" /></div>
              <h4><a href>Cost Effective</a></h4>
              <p>Online Marketing in a Box</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
<p>Everything you need to grow your business the way you choose is available when you construct a website using our website builder. Run it with complete confidence knowing that every website has enterprise-grade infrastructure built into it, along with free reliable web hosting, 24-hour maintenance, and fully managed security.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>
      </div>
    </section>{/* End Cta Section */}
    
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pic"><img src="assets/home/img/team/team-1.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div className="social">
                  <a href><i className="ri-twitter-fill" /></a>
                  <a href><i className="ri-facebook-fill" /></a>
                  <a href><i className="ri-instagram-fill" /></a>
                  <a href> <i className="ri-linkedin-box-fill" /> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay={200}>
              <div className="pic"><img src="assets/home/img/team/team-2.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href><i className="ri-twitter-fill" /></a>
                  <a href><i className="ri-facebook-fill" /></a>
                  <a href><i className="ri-instagram-fill" /></a>
                  <a href> <i className="ri-linkedin-box-fill" /> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay={300}>
              <div className="pic"><img src="assets/home/img/team/team-3.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href><i className="ri-twitter-fill" /></a>
                  <a href><i className="ri-facebook-fill" /></a>
                  <a href><i className="ri-instagram-fill" /></a>
                  <a href> <i className="ri-linkedin-box-fill" /> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay={400}>
              <div className="pic"><img src="assets/home/img/team/team-4.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href><i className="ri-twitter-fill" /></a>
                  <a href><i className="ri-facebook-fill" /></a>
                  <a href><i className="ri-instagram-fill" /></a>
                  <a href> <i className="ri-linkedin-box-fill" /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Team Section */}
    {/* ======= Pricing Section ======= */}
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="box">
              <h3>MSME's Plan</h3>
              <h4><sup>₹</sup>1000<span>per website</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
            <div className="box featured">
              <h3>NGO's Plan</h3>
              <h4><sup>₹</sup>1000-1500<span>per Website</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
            <div className="box">
              <h3>Other Plan</h3>
              <h4><sup>₹</sup>1000-1500<span>per Website</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Pricing Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Is it easy to build a website? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                Yes. You can choose the website construction method that works best for you from among the options we provide for creating your own free website. Need to access the web quickly?
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Should I work with a web developer or a website builder? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                website builder saves time and Money
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Can I create a website without knowing how to code?<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                Absolutely. Everyone can build a top-notch website using NRIT, which eliminates the need for coding knowledge. Of course, if you are proficient in coding, you can enhance your site with cutting-edge features.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </section>{/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>The NRIT website builder provides a comprehensive solution, ranging from commercial capabilities and enterprise-grade infrastructure to cutting-edge NGO features and marketing tools, allowing anyone to establish and expand online.</p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>RIT,ISlampur</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>asdf@ritindia.edu</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 0000000000</p>
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
            <h3>NRIT</h3>
            <p>
              RIT,Islampur <br />
              Sangli<br />
              Maharashtra <br /><br />
              <strong>Phone:</strong>+91 0000000000<br />
              <strong>Email:</strong> asdf@ritindia.edu<br />
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
            <p>For More Information,Stay Connected With Us..!!</p>
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
        © Copyright <strong><span>NRIT</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/NRIT-free-bootstrap-html-template-corporate/ */}
        Designed by <a href="https://bootstrapmade.com/">NRIT</a>
      </div>
    </div>
  </footer>{/* End Footer */}
</div>

    </>
  );
};

export default Home;
