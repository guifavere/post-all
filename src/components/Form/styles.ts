import styled from 'styled-components';

export const StyledInput = styled.input`
  ${props => `
    background: ${props.theme.colors.gray[700]};
    border-radius: ${props.theme.radii.md};
    color: ${props.theme.colors.text};
    font-family: ${props.theme.fontFamilies.body};
    font-size: ${props.theme.fontSizes.sm};
  `}
  height: 60px;
  padding: 0 20px;
`;

export const StyledButton = styled.button`
  ${props => `
    border-radius: ${props.theme.radii.md};
    color: #fff;
    font-family: ${props.theme.fontFamilies.body};
    font-size: ${props.theme.fontSizes.lg};
    height: 60px;
    min-width: 60px;
    transition: background 0.2s, color 0.2s;

    &:active,
    &:hover {
      color: ${props.theme.colors.mutedText};
    }
  `}
`;

export const StyledSuccessButton = styled(StyledButton)`
  ${props => `
    background: ${props.theme.colors.green[400]};

    &:active,
    &:hover {
      background: ${props.theme.colors.green[700]};
    }
  `}
`;
