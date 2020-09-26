import React, { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import { StyledInput, StyledSuccessButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: never;
}

export const Input = (props: InputProps): JSX.Element => (
  <StyledInput {...props} />
);

export const SuccessButton = ({
  children,
  ...props
}: ButtonProps): JSX.Element => (
  <StyledSuccessButton {...props}>{children}</StyledSuccessButton>
);

export const FormikField = styled(Field)`
  background: ${props => props.theme.colors.gray[700]};
  border-radius: ${props => props.theme.radii.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  height: 60px;
  padding: 0 20px;
`;
