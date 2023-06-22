import React, { Component } from "react";
import "./AdvancedLevel.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { alevel } from "../../portfolio";
import { Fade } from "react-reveal";

class AdvancedLevel extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              A/L
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {alevel.alevel.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default AdvancedLevel;
