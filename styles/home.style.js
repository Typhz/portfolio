import styled from 'styled-components';

export const Main = styled.main`
  min-height: 80vh;
  padding: 4rem var(--global-padding);
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  p{
    color: #4b5563;
    width: 70%;
    font-weight: 200;
  }
  small{
    color: gray;
    font-weight: 300;
  }
  h2{
    line-height: 3.5rem;
    font-weight: 300;
    font-size: 30px;
  }
  h3{
    font-weight: 300;
  }
  p{
    color: #4b5563;
    font-weight: 200;
  }
`; 

export const SocialMedia = styled.div`
  width: 6%;
  color: #666666;
  padding: 1rem 0;
  text-decoration: none;
  justify-content: space-between;
  display: flex;
  @media only screen and (max-width: 990px) {
    width: 12%;
  }
  a{
    color: #666666;
  }
`;

export const TitleSection = styled.h1`
  font-size: 48px;
`;