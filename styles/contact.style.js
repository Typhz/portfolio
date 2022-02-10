import styled from 'styled-components';

export const Main = styled.main`
  min-height: 20vh;
  padding: 2rem var(--global-padding);
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`; 

export const TitleSection = styled.h1`
  font-size: 48px;
`;
export const Form = styled.form`
  width: 40%;
  margin-top: 2%;
  flex-direction: column;
  display: flex;
  *{
    margin: 0.5rem 0;
  }
  input{
    height: 3rem;
    padding: 0 0.5rem;
    border: 1px solid gray;
    border-radius: .2rem;
  }
  button{
    background-color: black;
    color: white;
    height: 3rem;
    border: none;
    border-radius: .2rem;
  }
  @media only screen and (max-width: 990px) {
    width: 80%;
  }
`;