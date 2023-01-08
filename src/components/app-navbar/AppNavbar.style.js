import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const StyledNav = styled(Nav)`
  gap: 1.2rem;
  z-index: 1000;
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.offWhite};
    width: 65%;
    height: 100vh;
    padding: 1.5rem 1.2rem;
    transform: ${({ show }) =>
      show === "true" ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s;

    .nav-link {
      color: ${({ theme }) => theme.veryDarkBlue};
    }
  }

  .close-btn {
    width: fit-content;
    margin-left: auto;
    margin-bottom: 3rem;
  }

  .nav-link {
    color: ${({ theme }) => theme.veryDarkBlue};
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.softOrange};
    }
  }
`;

export default StyledNav;
