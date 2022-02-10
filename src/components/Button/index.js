import { ButtonContainer } from './styles'

function Button({ children, variant, size, onClick }){
  return(
    <ButtonContainer variant={variant} size={size} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button;