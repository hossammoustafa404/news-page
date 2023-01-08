import { Card } from "react-bootstrap";
import styled from "styled-components";

const BlogWrapper = styled(Card)`
  border: none;
  margin-bottom: 1.2rem;

  .card-img {
    border-radius: 0;
    width: 5rem;
  }

  .card-body {
    padding: 0;
  }
  .number {
    display: block;
    color: ${({ theme }) => theme.grayishBlue};
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  .card-title {
    color: ${({ theme }) => theme.veryDarkBlue};
    font-weight: 800;
    font-size: 0.9rem;
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.softRed};
    }
  }

  .card-text {
    color: ${({ theme }) => theme.darkGrayishBlue};
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

export default BlogWrapper;
