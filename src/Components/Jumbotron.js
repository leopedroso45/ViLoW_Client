import React, { Component } from "react";
import logo from "../ViLoWofc.png";

import { Jumbotron, Button } from "react-bootstrap";

class JumbotronD extends Component {
  render() {
    function refreshPage() {
      window.location.reload();
    }
    return (
      <Jumbotron fluid>
        <center>
          <img src={logo} alt="logo" />
          <p>
            is a system that displays videos shared by the user on a platform
            for access on mobile devices or desktop on home network.
          </p>
          <p>
            <Button variant="primary" onClick={refreshPage}>
              Reload
            </Button>
          </p>
        </center>
      </Jumbotron>
    );
  }
}

export default JumbotronD;
