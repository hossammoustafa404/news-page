import { Row, Col, Container } from "react-bootstrap";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppNavbar from "./components/app-navbar/AppNavbar";
import AppMain from "./components/app-main/AppMain";
import AppSidebar from "./components/app-sidbar/AppSidebar";
import AppBlog from "./components/app-blogs/AppBlogs";
import AppFooter from "./components/app-footer/AppFooter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppNavbar />
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mb-5">
            <AppMain />
          </Col>
          <Col xs={12} lg={4} className="mb-5">
            <AppSidebar />
          </Col>
          <Col xs={12} lg={12} className="mb-5">
            <AppBlog />
          </Col>
        </Row>
      </Container>
      <AppFooter />
    </ThemeProvider>
  );
};

export default App;

// Global style
const GlobalStyle = createGlobalStyle`
  body {
    #root {
      overflow-x: hidden;
    }

    * {
     font-family: 'Inter', sans-serif;
     padding :0 ;
     margin: 0;
     box-sizing: border-box;
     font-size: 15px;
    }

    button {
      background-color: transparent;
      border: none;
    }

    a {
      display: block;
      text-decoration: none;
    }
  }
`;

// Theme
const theme = {
  //Primary colors
  softOrange: "hsl(35, 77%, 62%)",
  softRed: "hsl(5, 85%, 63%)",

  //Neutral colors
  offWhite: "hsl(36, 100%, 99%)",
  grayishBlue: "hsl(233, 8%, 79%)",
  darkGrayishBlue: "hsl(236, 13%, 42%)",
  veryDarkBlue: "hsl(240, 100%, 5%)",
};
