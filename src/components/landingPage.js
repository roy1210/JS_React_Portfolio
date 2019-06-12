import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "../img/profile.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }} className="container">
        <Grid className="landing-grid">
          <Cell col={12} phone={12} className="SlideDown">
            <img src={profile} alt="avatar" className="profile" />
            <div className="banner-text">
              <h3 style={{ paddingTop: "0.5em" }}>
                Hi, this is Roy. Nice to meet you.
              </h3>
              <h4>Front / Back - End Developer</h4>

              <hr />
              <p> Python | Golang | JavaScript | React | Vue | Solidity</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shoe-kure-2271ab90/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/roy1210"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
