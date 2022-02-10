import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 4rem var(--global-padding);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  display: flex;
  h3{
    font-size: 1rem;
    font-weight: 600;
  }
  .brand-mobile{
    font-size: 1.4rem;
    display: none;
  }
  ul li {
    list-style: none;
    font-style: none;
  }
  ul li a {
    color: black;
    text-decoration: none;
    opacity: 0.6;
    font-weight: 400;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0.5rem;
    font-style: none
  }
  ul li a.active {
    color: black;
  }
  @media only screen and (max-width: 990px) {
    padding: 2rem var(--global-padding);

    h3{
      display: none;
    }
    .brand-mobile{
      display: block;
    }
    ul li a {
      color: #2e2e2e;
      padding: 0 0.5rem;
      font-style: none
  }
  }
`;

export { HeaderContainer };
