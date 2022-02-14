import styled from 'styled-components';

export const Main = styled.main`
  color: #292929;
  padding: 8rem var(--global-padding);
  justify-content: center;
  flex-direction: column;
  display: flex;
  h1{
    font-size: 2.4rem;
  }
  h2{
    margin-top: 2rem;
  }
  h3{
    margin-top: 1.4rem;
  } 
  p{
    padding: 0.5rem 0;
  }
  ul{
    padding: 1rem 1rem;
    line-height: 2rem;
  }
  ul li a{
    color: #3081e0;
    text-decoration: none;
    font-weight: 600;
  }
  a{
    color: #3081e0;
    text-decoration: none;
    font-weight: 600;
  }
  code{
    background-color: transparent;
    padding: 1rem 1.5rem;
    display: block;
    border-left: 3px solid #292929;
  }
  img{
    width: 100%;
    margin: 1rem 0;
  }
  @media only screen and (max-width: 990px) {
    code{
      background-color: transparent;
      padding: 1rem 1.5rem;
      display: block;
      border-left: 3px solid #292929;
      overflow-x: auto;
    }
  }
`;