import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

class Project extends Component {
  render() {
    let detail2;
    if (this.props.detail2) {
      detail2 = <div>{this.props.detail2}</div>;
    } else {
      detail2 = "";
    }
    return (
      <div>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${this.props.photoUrl}) center / cover `
            }}
          >
            {this.props.name}
          </CardTitle>
          <CardText>
            {this.props.detail1}
            {detail2}
          </CardText>
          <CardActions border>
            <Button colored>
              {" "}
              <a
                href={this.props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
            </Button>
            <Button colored>
              {" "}
              <a
                href={this.props.codesandbox}
                target="_blank"
                rel="noopener noreferrer"
                text-decoration="none"
              >
                CodeSandBox
              </a>
            </Button>
            <Button colored>
              {" "}
              <a
                href={this.props.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Project;