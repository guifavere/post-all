import styled from 'styled-components';

export const Container = styled.article`
  background: ${props => props.theme.colors.gray[400]};
  border-radius: ${props => props.theme.radii.lg};
  padding: 40px;
`;

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: ${props => props.theme.lineHeights.heading};
  margin-bottom: 6px;
`;

export const DateTime = styled.p`
  color: ${props => props.theme.colors.mutedText};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.heading};
`;

export const Content = styled.section`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const Footer = styled.footer`
  margin-top: 40px;
`;
