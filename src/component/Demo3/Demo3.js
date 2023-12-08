// App.js
import React from 'react';
import './Demo3.css'


function App() {
  return (
    <div>
      <header>


     
                <div class="my-nav">
                    <div clcontainerass="container">
                        <div class="nav-items">
                            <div class="menu-toggle">
                                <div class="menu-burger"></div>
                            </div>
                            <div class="logo">

                            </div>
                            
                            <div class="menu-items">
                                <div class="menu">
                                    
                                    <ul>
                                         <img  class="logo" src="data:image/png;base64,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" />
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            


      </header>

      <main>
      <section class="slider">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="custom-carousel-inner">
    <div class="custom-carousel-item active">
        <div class="custom-banner-content">
            <h1>Making your business <span>ideas Come true</span></h1>
            <ol>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Get In Touch</a></li>
            </ol>
        </div>
        <img class="custom-d-block w-100" src="https://beingcovers.com/download.php?id=3377" alt="Slide 1" />
    </div>
</div>

      
        
    </div>
</section>

        <section className="bg-01">
          

        <div class="container">
    <div class="card">
        <h4>Data Analytics</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
    </div>
    <div class="card">
        <h4>Revenue Growth</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
    </div>
    <div class="card">
        <h4>Market Expansion</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
    </div>
</div>


                    <section class="bg-01">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <span>What I Offer</span>
                                    <h2>Only unique solutions for business</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, 
                                    ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis 
                                    fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="wrapper">
                                    <div class="icons">
                                        <i class="flaticon-data-driven"></i>
                                    </div>
                                    <div class="content w-100">
                                        <h4>Data Analytics</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, 
                                        ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis 
                                        fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="wrapper">
                                    <div class="icons">
                                        <i class="flaticon-money"></i>
                                    </div>
                                    <div class="content w-100">
                                        <h4>Revenue Growth</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, 
                                        ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis 
                                        fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="wrapper">
                                    <div class="icons">
                                        <i class="flaticon-money"></i>
                                    </div>
                                    <div class="content w-100">
                                        <h4>Marketing</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, 
                                        ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis 
                                        fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
                                    </div>
                                </div>
                            </div>



                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="wrapper">
                                    <div class="icons">
                                        <i class="flaticon-computer"></i>
                                    </div>
                                    <div class="content w-100">
                                        <h4>Market Expansion</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et velit, 
                                        ullam distinctio hic possimus assumenda pariatur, ab non maxime officiis 
                                        fugit! Numquam debitis odio odit quisquam maiores quidem magnam dicta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-02">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                               
                            </div>
                            <div class="col-md-6">
                                <div class="heading">
                                    <span>How i work</span>
                                    <h2>find a new competitive edge</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Laudantium officia doloremque praesentium ullam odio eaque ab 
                                    consectetur voluptas vel nostrum doloribus</p>
                                </div>

                                <div class="wrapper">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="icon">
                                                <i class="flaticon-archer"></i>
                                                <h4>15</h4>
                                                <h5>years of experience</h5>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-12">
                                            <div class="icon">
                                                <i class="flaticon-customer-satisfaction"></i>
                                                <h4>255</h4>
                                                <h5>truster clients</h5>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-12">
                                            <div class="icon">
                                                <i class="flaticon-video-call"></i>
                                                <h4>20</h4>
                                                <h5>visited Conferences</h5>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-sm-12">
                                            <div class="icon">
                                                <i class="flaticon-medal"></i>
                                                <h4>40</h4>
                                                <h5>master certifications</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-03">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <span>Services</span>
                                    <h2>We position our clients at the forefront of their field 
                                    by advancing an agenda.</h2>
                                    <p>Easily apply to multiple jobs with one click! Quick Apply shows you 
                                    recommended jobs based off your most recent search and allows you to 
                                    apply to 25+ jobs in a matter of seconds!</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-flowchart"></i>
                                        <h4>Business Planning</h4>
                                        <p> We develop the relationships that underpin the next phase in your 
                                        organisation’s growth. We do this</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-coding"></i>
                                        <h4>Program management</h4>
                                        <p>The development of your next business plan will be executed by 
                                        a brilliant team who will indicate your grand success.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-chess-pieces"></i>
                                        <h4>Strategy</h4>
                                        <p>The development of your next business plan will be executed by 
                                        a brilliant team who will indicate your grand success.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-research"></i>
                                        <h4>chart management</h4>
                                        <p>The development of your next business plan will be executed by 
                                        a brilliant team who will indicate your grand success.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-optimization"></i>
                                        <h4>SEO Optimization</h4>
                                        <p>The development of your next business plan will be executed by 
                                        a brilliant team who will indicate your grand success.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="content">
                                        <i class="flaticon-market-research"></i>
                                        <h4>Market Research</h4>
                                        <p>The development of your next business plan will be executed by 
                                        a brilliant team who will indicate your grand success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-04">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <h2>Flexible Plans For <br/> Small To Fast-Growing Company.</h2>
                                    <p>Switch to annual plan and get 25% offer.</p>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="head-content">
                                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                                            <h4>Basic Blan</h4>
                                            <h5>$20.00 <span>/ mo</span></h5>
                                        </div>
                                    </div>
                                    <div class="inner-content">
                                        <div class="list-content">
                                            <h5>Most Recommended</h5>
                                        </div>
                                        <h6>Power of choice is untrammelled and do what we like best.</h6>
                                        <ol>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>4-5 Weeks from to finish</li>
                                            <li><i class="fal fa-arrow-circle-right"></i>Data sprint</li>
                                            <li><i class="fal fa-arrow-circle-right"></i>Results revision</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>20 Days of support</li>
                                        </ol>
                                        <a href="#">Get Started a free trail</a>
                                        <p>no credit card required</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="head-content">
                                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                                            <h4>for Large Business</h4>
                                            <h5>$30.00 <span>/ mo</span></h5>
                                        </div>
                                    </div>
                                    <div class="inner-content">
                                        <div class="list-content">
                                            <h5 class="active-plan">Most Recommended</h5>
                                        </div>
                                        <h6>Power of choice is untrammelled and do what we like best.</h6>
                                        <ol>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>4-5 Weeks from to finish</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>Data sprint</li>
                                            <li><i class="fal fa-arrow-circle-right"></i>Results revision</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>20 Days of support</li>
                                        </ol>
                                        <a class="active-a" href="#">Get Started a free trail</a>
                                        <p>no credit card required</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="wrapper">
                                    <div class="head-content">
                                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                                            <h4>Advanced Pack</h4>
                                            <h5>$50.00 <span>/ mo</span></h5>
                                        </div>
                                    </div>
                                    <div class="inner-content">
                                        <div class="list-content">
                                            <h5>Most Recommended</h5>
                                        </div>
                                        <h6>Power of choice is untrammelled and do what we like best.</h6>
                                        <ol>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>4-5 Weeks from to finish</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>Data sprint</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>Results revision</li>
                                            <li class="se-color"><i class="fal fa-check-circle"></i>20 Days of support</li>
                                        </ol>
                                        <a href="#">Get Started a free trail</a>
                                        <p>no credit card required</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="textimonial-client">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <h2><span>Success</span> stories</h2>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="wrapper">
                                    <div id="custCarousel-02" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="content">
                                                    <h3>Anliee Albert</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur 
                                                    libero hic? Ad aut veritatis eaque totam, architecto inventore nulla 
                                                    asperiores eum consequatur cum? Amet ab excepturi pariatur. Quas, adipisci.</p>
                                                    <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmjlgBTNXxleTjjRD-XuHXgdMLNtl3iDN5Ooo2y0Qft4wPvTuB7PC8hGwHyEC-Y0RusQ&usqp=CAU" /></a>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="content">
                                                    <h3>Anliee Albert</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur 
                                                    libero hic? Ad aut veritatis eaque totam, architecto inventore nulla 
                                                    asperiores eum consequatur cum? Amet ab excepturi pariatur. Quas, adipisci.</p>
                                                    <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9NBPk4oe-_ykiN1XV8BaORpoWUT5dfqg_Wd4YBFvdYp3WBjc4tPB-Eh-HmdDmmvdgY4&usqp=CAU" /></a>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="content">
                                                    <h3>Anliee Albert</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur 
                                                    libero hic? Ad aut veritatis eaque totam, architecto inventore nulla 
                                                    asperiores eum consequatur cum? Amet ab excepturi pariatur. Quas, adipisci.</p>
                                                    <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyB4CKvXV8isRARi9PsSvz-jP5D_YunoD4F6jKz_ndBtBEE5b1pUlMVvsvZCVct4-1G7o&usqp=CAU"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        </section>



        <section className="bg-05">

        <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <h2>Our Team</h2>
                                </div>
                            </div>

                        
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div class="team-wrapper">
                                    <div class="team-img">
                                        <img src="data:image/jpeg;base64,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" />
                                    </div>
                                    <div class="team-content">
                                        <h3>Albert</h3>
                                        <p>Art Designer</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div class="team-wrapper">
                                    <div class="team-img">
                                        <img src="data:image/jpeg;base64,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" />
                                    </div>
                                    <div class="team-content">
                                        <h3>Johns</h3>
                                        <p>SEO</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div class="team-wrapper">
                                    <div class="team-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2OmFXSp60nq7Z4rkgnLO6IJx6LIsa9VXkBTHSRT410bisjYIBNTmINvSE0J7XzFol0U&usqp=CAU" />
                                    </div>
                                    <div class="team-content">
                                        <h3>Smith</h3>
                                        <p>Developer</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          



        </section>

        <section className="bg-06">


      
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="heading">
                                    <h2>Our News</h2>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <article class="blog-sub">
                                    <div class="blog-content">
                                        <img src="data:image/png;base64,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" />
                                    </div>
                                    <div class="blog-content-section">
                                        <div class="blo-content-title">
                                            <h4>The National Minimum Wage Is An Important Part</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                                praesentium
                                                facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo
                                                fugit
                                                animi assumenda.</p>
                                        </div>
                                        <div class="blog-admin">
                                            <ol>
                                                <li><i class="fal fa-user-tie"></i> By Admin</li>
                                                <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                            </ol>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <article class="blog-sub">
                                    <div class="blog-content">
                                        <img src="data:image/png;base64,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" />
                                    </div>
                                    <div class="blog-content-section">
                                        <div class="blo-content-title">
                                            <h4>The National Minimum Wage Is An Important Part</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                                praesentium
                                                facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo
                                                fugit
                                                animi assumenda.</p>
                                        </div>
                                        <div class="blog-admin">
                                            <ol>
                                                <li><i class="fal fa-user-tie"></i> By Admin</li>
                                                <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                            </ol>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <article class="blog-sub">
                                    <div class="blog-content">
                                        <img src="data:image/png;base64,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" />
                                    </div>
                                    <div class="blog-content-section">
                                        <div class="blo-content-title">
                                            <h4>The National Minimum Wage Is An Important Part</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at numquam, asperiores aut
                                                praesentium
                                                facilis ratione! Voluptatibus neque dignissimos ipsa atque veniam sint omnis in blanditiis, nemo
                                                fugit
                                                animi assumenda.</p>
                                        </div>
                                        <div class="blog-admin">
                                            <ol>
                                                <li><i class="fal fa-user-tie"></i> By Admin</li>
                                                <li><i class="fal fa-calendar-alt"></i> july 28, 2020</li>
                                            </ol>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
              




      
        </section>
      </main>

      <footer>
      <div class="end-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="copy-right">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="copy-right">
                                <ol>
                                    <li> SarathiSites</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    </div>
  );
}

export default App;
