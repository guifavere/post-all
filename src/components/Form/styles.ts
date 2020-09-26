import styled from 'styled-components';

export const StyledInput = styled.input`
  background: ${props => props.theme.colors.gray[700]};
  border-radius: ${props => props.theme.radii.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  height: 60px;
  padding: 0 20px;
`;

export const StyledButton = styled.button`
  border-radius: ${props => props.theme.radii.md};
  color: #fff;
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  height: 60px;
  min-width: 60px;
  transition: background 0.2s, color 0.2s;

  &:active,
  &:hover {
    color: ${props => props.theme.colors.mutedText};
  }
`;

export const StyledSuccessButton = styled(StyledButton)`
  background: ${props => props.theme.colors.green[400]};

  &:active,
  &:hover {
    background: ${props => props.theme.colors.green[700]};
  }
`;
