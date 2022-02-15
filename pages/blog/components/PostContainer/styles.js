import styled from 'styled-components';

export const Container = styled.a`
  color: black;
  text-decoration: none!important;
  list-style: none;
  h1{
    width: 60%;
    word-wrap: break-word;
    font-size: 36px;
  }
  p{
    width: 40%;
  }
  a{
    margin-top: 2%;
    text-decoration: underline;
    display: block;
  }
  @media only screen and (max-width: 675px) {
    h1{
      width: 100%;
    }
    p{
      width: 100%;
    }
  }
`;
