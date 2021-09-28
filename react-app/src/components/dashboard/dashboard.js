import React, { useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import {
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";
import "./dashboard.css";
import { ContactMail } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Container fixed spacing={4}>
          <div id="home">
            <Grid item md={12} className="_center">
              <img alt="My Photo" src="./my_photo.jpg" className="_photo"></img>
            </Grid>
            <Grid item md={12} className="_center">
              <h2>Tomas Jefferson</h2>
            </Grid>
          </div>
          <Grid item md={12} className="_center">
            <h4>Web and Mobile Developer</h4>
          </Grid>
          <div id="aboutMe">
            <Grid item md={12} className="_center _padding-top-5">
              <h1 className="row">About me</h1>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={1}></Grid>
              <Grid item md={10} className="_center">
                <h5 className="_aboutMe"><b>H</b>ello! I am a senior passionate Web and Mobile Developer.
                  I already developed many websites and applications with my skills.
                  Mainly I use MERN stack and MEAN stack technology for website development.
                  And I use React Native for mobile development.
                  Especially my major skill is front-end developing by using React.
                  Of course, I have deep knowledge of Html, CSS, Javascript, Typescript, Bootstrap, Jquery.
                  I can use Bootstrap and Material Ui for CSS to your website more nice to see.
                  At present I am more focused on back-end development by using Ruby on Rails.
                  <br /><br />
                  I am passionate to build stuffs that make positive impact on people’s lives.
                  I believe that one can progress in programming if he/she has enough passion for programming and must not hesitate to learn new technologies.
                  I also believe that the only way to become a genuinely good programmer is having an urge to build something.
                </h5>
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </div>
          <div id="skills">
            <Grid item md={12} className="_center _padding-top-5">
              <h1 className="row">My Skills</h1>
            </Grid>
            <Grid container spacing={5} style={{ marginTop: "3%" }}>
              <Grid item md={1}></Grid>
              <Grid item md={10} className="_center _skills">
                <Grid container spacing={3}>
                  <Grid item md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <Grid container className="_center _skillBox">
                      <Grid item md={12} xs={12} className="_center">
                        <h3 className="_font">Languages</h3>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">HTML</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">CSS</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">JavaScript</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">PHP</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">jQuery</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Bootstrap</h5>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <Grid container className="_center _skillBox">
                      <Grid item md={12} xs={12} className="_center">
                        <h3 className="_font">Frameworks</h3>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">React</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Angular</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Vue.js</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">GatsBy</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Next.js</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Nuxt.js</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Express.js</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5>Laravel</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Node.js</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Zend</h5>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <Grid container className="_center _skillBox">
                      <Grid item md={12} xs={12} className="_center">
                        <h3 className="_font">Tools</h3>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">MySql</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">SQLite</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">MongoDB</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Firebase</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Photoshop</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Git</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">NPM</h5>
                      </Grid>
                      <Grid item md={12} xs={4} className="_center">
                        <h5 className="_font">Yarn</h5>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </div>
          <div id="projects">
            <Grid item md={12} className="_center _padding-top-5">
              <h1 className="row">My Projects</h1>
            </Grid>
            <Grid container spacing={5} style={{ marginTop: "3%" }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 _center">
                    <div className="_projects">
                      <div className="row">
                        <h3 className="_font">Splitchek</h3>
                      </div>
                      <div className="row">
                        <p className="_font">
                          I developed this site by using Laravel and Vue.js framework. Laravel for back-end and Vue.js for front-end.
                          It is similar to a ecommerce site. It is social gift-giving platform.
                          It can find right gift in just few clicks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 _center">
                    <div className="_projects">
                      <div className="row">
                        <h3 className="_font">Parasitetesting</h3>
                      </div>
                      <div className="row">
                        <p className="_font">
                          I developed this site by using node.js, Angular, Express, MongoDB and Material UI for frontend.
                          It is original ecommerce site and you can order anything you want in this site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 _center">
                    <div className="_projects">
                      <div className="row">
                        <h3 className="_font">Modifi</h3>
                      </div>
                      <div className="row">
                        <p className="_font">
                          I developed this site by using node.js, react.js, Bootstrap and MySql. It is Finance project for SMEs.
                          I made this look very nice to th original site.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          <div id="contacts">
            <Grid item md={12} className="_center _padding-top-5">
              <h1 className="row">Contact</h1>
            </Grid>
            <Grid container spacing={5} style={{ marginTop: "3%" }}>
              <Grid item md={6}>
                  <ContactMail />
                <div className="row">
                  <h4>
                    I am interested to work with any company or team that thinks my skill set can be helpful for them.
                    If you are looking for such candidate then please let me know.
                    Here are some links where you can catch me. Or you can say 'Hello'.
                  </h4>
                </div>
              </Grid>
              <Grid container item md={6} spacing={5}>
                <Grid item md={12}>
                  <div className="_projects">
                    <div className="row">
                      <h3 className="_font">Email</h3>
                    </div>
                    <div className="row">
                      <h4 className="_font">crazyhealer1205@gmail.com</h4>
                    </div>
                    <div className="row">
                      <h4 className="_font">(Recommended)</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="_projects">
                    <div className="row">
                      <h3 className="_font">Skype</h3>
                    </div>
                    <div className="row">
                      <h4 className="_font">live:.cid.6861a70fd595d797</h4>
                    </div>
                    <div className="row">
                      <h4 className="_font">(Recommended)</h4>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    </div>
  );
}