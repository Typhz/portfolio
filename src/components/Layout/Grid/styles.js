import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  row-gap: 8rem ;
  column-gap: 2rem ;
  display: grid;
  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
