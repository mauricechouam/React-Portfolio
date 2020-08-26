import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: ""
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",

        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
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
            " Enthusiastic , Resourceful Current Full Stack Web developer Student , with 6 years of experience in system Administration and IT infraStructure. Ability to establish Priorities and meet challenges head-on. Fluent in systems development,Strong Front and back end Technical Skills, and seeking a position as a Full Stack Web Developer."
        },
        {
          id: "second-p-about",
          content:
            "My Career Goal is to be a software Engineer, That is why i decided to start the Full-Stack Web developer bootcamp program. I Stronglty believe it will be very helpful ,due to the fact that i will earn some additional programming" +
            "Skills helping me to be more competitve on the job market. Also those skills are going to help me to be a freelancer "
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
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }} >
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
                            <p className="lead" key={content.id} style={{ textAlign: "center" }}>
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">

                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
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
