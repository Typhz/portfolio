import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: ${props => props.variant === 'primary' ? 'black' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : 'black'};
  width: ${props => props.size === "md" ? "4rem" : "8rem" };
  height: ${props => props.size ? "3rem" : "6rem" };
  margin-top: 2%;
  border-radius: 0.2rem;
  border: ${props => props.variant === 'primary' ? 'none' : 'black 1px solid'};
  cursor: pointer;
`;

export { ButtonContainer }