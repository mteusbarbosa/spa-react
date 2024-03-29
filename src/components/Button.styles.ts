import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'
interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['green-500']};
  /* ${({ variant }) => `
    background-color: ${buttonVariants[variant]};
  `} */
`
