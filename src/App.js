import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarD from "./Components/Nav";
import JumbotronD from "./Components/Jumbotron";
import FooterD from "./Components/Footer";
import CardD from "./Components/Card";
import axios from "axios";
import _ from "lodash";
import { Container, Row, Col,} from "react-bootstrap";


function App() {
  //video
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    axios
    //http://192.168.43.216:8000/videos
      .get("http://192.168.43.216:8000/videos")
      .then(function(response) {
        // handle success
        setvideos(response.data);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#343A40" }}>
      <NavbarD />
      <JumbotronD id="container" />
      
      

      <Container>
        <Row md={4}>
          {_.map(videos, (video, index) => {
            return (
              <Col>
                <CardD
                  video={{
                    NameVideo: video.NameVideo,
                    PathVideo: video.PathVideo
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <br />
      <FooterD />
    </div>
  );
}

export default App;
