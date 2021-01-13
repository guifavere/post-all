import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.heading};
  font-size: ${props => props.theme.fontSizes.xg};
`;
