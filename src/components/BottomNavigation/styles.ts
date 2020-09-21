import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props => props.theme.colors.gray[400]};
  border-radius: ${props =>
    `${props.theme.radii.lg} ${props.theme.radii.lg} 0 0`};
  bottom: 0;
  box-shadow: 0px 1px 14px ${props => props.theme.colors.shadow};
  display: flex;
  height: 88px;
  left: 0;
  position: fixed;
  right: 0;
`;

export const Links = styled.nav`
  align-self: center;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

export const FavoritedLink = styled.a`
  color: ${props => props.theme.colors.mutedText};
  transition: 0.2s color;

  &:hover {
    color: ${props => props.theme.colors.red[400]};
  }
`;

export const HomeLink = styled.a`
  color: ${props => props.theme.colors.mutedText};
  transition: 0.2s color;

  &:hover {
    color: ${props => props.theme.colors.green[400]};
  }
`;

export const NewPostLink = styled.a`
  color: ${props => props.theme.colors.mutedText};
  transition: 0.2s color;

  &:hover {
    color: ${props => props.theme.colors.purple[400]};
  }
`;
