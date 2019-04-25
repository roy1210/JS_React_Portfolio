import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      // Use progress bar
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
            {this.props.skill}{" "}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
              buffer={40}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
