import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Front-end:", content: " HTML5, CSS3, React.js, Material Design,Bootstrap", porcentage: "80%" },
        { id: "Frameworks", content: "Frameworks: Javascript (NodeJS, ReactJS, jQuery)", porcentage: "75%" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "" },
        { id: "ReactJS_skill", content: "React.JS", porcentage: "80%", },
        { id: "Python_skill", content: "Python", porcentage: "75%", value: "75" },
        { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "85%", value: "85" },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            " Experienced coding bootcamp graduate with extremely strong foundational skills in JavaScript,MERN (MongoDB, Express, ReactJS, NodeJS), developing mobile applications, and building websites from the ground up. " + 
             " Whether front- end layout & design, back - end efficiency & functionality. "+ 
            + " Professional strengths include creative problem-solving " +
        " and time management. Detail-oriented mindset from 6 + years of experience in System Administration and IT infrastructure"
        },
        {
          id: "second-p-about",
          content:
            "I am a full- stack developer, which means that I work on projects from the "+
          "front end to the back end.I design and build website and app experiences as well as the database and server infrastructures that power them"
           
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-sm-6 col-md-5" style={{ margin: "2 auto" }} >
                        <div className="about-img" style={{ textAlign: "center" }}  >
                          <img className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                    </div>

                    {/* text starts here */}
                    <div className="col-md-12">
                      <div className="about-me pt-9 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About Me</h5>
                        </div>
                        {this.state.about_me.map(content => {
                          return (
                            <p className="subtitle-a" key={content.id} >
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <h5> Skills</h5>
                    </div>
                    <div className="row" >
                      <div className="col-6" >
                        <ul className="lead" > 
                          <li >HTML5</li>
                          <li>CSS3</li>
                          <li>JavaScript</li>
                          <li>React.js</li>
                          <li>JQuery</li>
                          <li>Bootstrap</li>
                          <li>Node.js</li>
                          <li>Express.js</li>
                         

                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="lead">
                          <li>MySQL</li>
                          <li>MongoDB</li>
                          <li>Heroku</li>
                          <li>AWS (Amazon Web Services)</li>
                          <li>Version Control/Git </li>
                          <li>Responsive Design</li>
                          <li>Redus Pattern</li>
                          <li>MVC, ORM, OOP</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>
    );
  }
}

export default About;
