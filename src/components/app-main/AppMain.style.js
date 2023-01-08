import styled from "styled-components";

const MainWrapper = styled.main`
  box-shadow: none;
  border: none;
  .card-img {
    border-radius: 0;
  }
  .card-title {
    max-width: 20rem;
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.veryDarkBlue};
  }

  @media (min-width: 992px) {
    .card-title {
      width: 62rem;
      margin-right: 3rem;
    }
  }

  .card-text {
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.darkGrayishBlue};
  }

  .card-btn {
    background-color: ${({ theme }) => theme.softRed};
    border: none;
    border-radius: 0;
    letter-spacing: 0.2rem;
    font-size: 0.9rem;
    padding: 0.8rem 1.4rem;
    &:hover {
      background-color: ${({ theme }) => theme.veryDarkBlue};
      color: ${({ theme }) => theme.offWhite};
    }
  }
  @media (min-width: 992px) {
    .card-btn {
      padding: 0.5rem 1.2rem;
      font-size: 0.8rem;
    }
  }
`;

export default MainWrapper;
