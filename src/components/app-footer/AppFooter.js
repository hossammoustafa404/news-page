import React from "react";
import FooterWrapper from "./AppFooter.style";

const AppFooter = () => {
  return (
    <FooterWrapper>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>{" "}
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/hossammoustafa404"
        target="_blank"
        rel="noreferrer"
      >
        Hossam Moustafa
      </a>
      .
    </FooterWrapper>
  );
};

export default AppFooter;
