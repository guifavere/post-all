import styled from 'styled-components';

interface ButtonProps {
  isFavorited: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.gray[100]};
  border-radius: 50%;
  height: 40px;
  width: 40px;

  svg {
    color: ${props => props.theme.colors.red[400]};
    font-size: ${props => props.theme.fontSizes.sm};
  }

  ${props => props.isFavorited && `
    background: ${props.theme.colors.red[400]};

    svg {
      color: #fff;
    }
  `}
`;
