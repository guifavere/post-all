import styled from 'styled-components';

export const Content = styled.main`
  padding: 20px;

  > button {
    margin-top: 30px;
  }

  > h1 {
    margin: 50px 0;
  }
`;

export const Post = styled.article`
  background: ${props => props.theme.colors.gray[400]};
  border-radius: ${props => props.theme.radii.lg};
  padding: 40px;
`;

export const PostHeader = styled.header``;

export const PostTitle = styled.h2`
  color: #fff;
  font-family: ${props => props.theme.fontFamilies.heading};
  font-size: ${props => props.theme.fontSizes.md};
`;

export const PostContent = styled.section`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.body};
  padding: 40px 0;
`;

export const PostFooter = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

export const PostDateTime = styled.time`
  color: ${props => props.theme.colors.mutedText};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
`;
