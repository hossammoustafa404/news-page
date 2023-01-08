import styled from "styled-components";

const ArticleWrapper = styled.div`
  padding: 1.3rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.darkGrayishBlue};
  }
  .title {
    color: ${({ theme }) => theme.offWhite};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.softOrange};
    }
  }

  .text {
    color: ${({ theme }) => theme.darkGrayishBlue};
    font-size: 0.8rem;
    font-weight: 700;
  }
`;
export default ArticleWrapper;
