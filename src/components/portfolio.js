import React from "react";

//import stock
import stock from "../img/portfolio-1.jpg";
import stock6 from "../img/portfolio-3.jpg";
import stock7 from "../img/emo.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-4">
              <div className="work-box">
                <a href="https://mauricechouam.github.io/COVID-19-Tracker/" title="Live Demo" target="_blank" >
                  <div className="work-img">
                    <img src={stock} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">COVID-19 TRACKER</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/COVID-19-Tracker" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Git Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a">
                          A simple COVID-19 tracker application that fetches location based updates,
                          trending global news, and helpful local resources.
                          Powered by HTML, CSS, and JavaScript.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box">
                <a href="https://mauricechouam.github.io/COVID-19-Tracker/" title="Live Demo" target="_blank" >
                  <div className="work-img">
                    <img src={stock7} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Emoji-Runner</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/COVID-19-Tracker"  title="Repository"  target="_blank" >
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Git Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a">
                        A fun twist on the classic runner game.with secure user login 
                          User profiles are logged in a database for tracking high scores. Powered by P5JS, Express & MySQL

                           
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather-Dashboard</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
           
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Workout-Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Code-Quiz</h2>
                        <div className="w-more">
                          <span className="w-ctegory">   <a> MERN  </a></span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Employee-Directory</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
