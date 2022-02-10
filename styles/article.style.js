import styled from 'styled-components';

export const Main = styled.main`
  color: #292929;
  width: 100%;
  min-height: 200vh;
  padding: 8rem var(--global-padding);
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  flex: 1;
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
  small{
    color: gray;
    font-weight: 300;
  }
  p{
    padding: 0.5rem 0;
    font-size: 18px;
    text-align: justify;
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
    font-size: 18px;
    padding: 1rem 1.5rem;
    display: block;
    border-left: 3px solid #292929;
  }
  img{
    width: 100%;
    margin: 2rem 0;
  }
  @media only screen and (max-width: 990px) {
  }
`;