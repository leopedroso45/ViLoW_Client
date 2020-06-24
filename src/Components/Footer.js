import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { animateScroll } from "react-scroll";
const FooterPage = () => {
  function handleGoToTop() {
    animateScroll.scrollToTop({
      containerId: "container",
      duration: 1500
    });
  }
  return (
    <MDBFooter style={{ backgroundColor: "#E9ECEF" }} className="font-small">
      <div className="footer-copyright text-center py-3">
        <MDBRow>
          <MDBCol md="6">
            <p>Built by Leonardo Severo Pedroso.</p>
          </MDBCol>
          <MDBCol md="6">
            <a href="#container" onClick={handleGoToTop}>
              Back to top.
            </a>
          </MDBCol>
        </MDBRow>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/leopedroso45"> leopedroso45@gmail.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
