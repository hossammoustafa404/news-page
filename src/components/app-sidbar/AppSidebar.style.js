import styled from "styled-components";

const SidebarWrapper = styled.aside`
  background-color: ${({ theme }) => theme.veryDarkBlue};
  padding: 1.5rem;
  & > .title {
    color: ${({ theme }) => theme.softOrange};
    font-size: 1.7rem;
    font-weight: 700;
  }
`;

export default SidebarWrapper;
