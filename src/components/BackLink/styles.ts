import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background: transparent;
  color: ${props => props.theme.colors.mutedText};
  display: flex;
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: color 0.2s;

  &:active,
  &:hover {
    color: ${props => props.theme.colors.text};
  }

  svg {
    margin-right: 15px;
  }
`;
