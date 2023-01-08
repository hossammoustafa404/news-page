import React from "react";
import MainWrapper from "./AppMain.style";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AppMain = () => {
  return (
    <MainWrapper className="card">
      <picture className="mb-4">
        <source
          media="(min-width: 992px)"
          srcSet="images/image-web-3-desktop.jpg"
        />
        <img
          src="images/image-web-3-mobile.jpg"
          alt="Main image"
          className="card-img"
          aria-hidden
        />
      </picture>
      <Card.Body className="p-0 d-lg-flex">
        <Card.Title className="mb-3">The Bright Future of Web 3.0?</Card.Title>
        <div className="text-parent">
          <Card.Text className="mb-3">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Card.Text>
          <Button className="card-btn text-uppercase d-block mx-auto mx-lg-0 mt-lg-4">
            read more
          </Button>
        </div>
      </Card.Body>
    </MainWrapper>
  );
};

export default AppMain;
