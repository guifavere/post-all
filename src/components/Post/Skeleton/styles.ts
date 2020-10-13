import styled from 'styled-components';

export const Container = styled.article`
  background: ${props => props.theme.colors.gray[400]};
  border-radius: ${props => props.theme.radii.lg};
  font-size: 0;
  padding: 40px;
`;
