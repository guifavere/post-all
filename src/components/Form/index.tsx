import React, { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { useField } from 'formik';
import styled, { css } from 'styled-components';

import { Color } from 'styles/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Color;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: never;
}

// buttons
export const Button = styled.button<ButtonProps>`
  background: ${props => props.theme.colors[props.color][400]};
  border-radius: ${props => props.theme.radii.md};
  color: #fff;
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  height: 60px;
  transition: background 0.2s, color 0.2s;

  &:active,
  &:hover {
    background: ${props => props.theme.colors[props.color][700]};
    color: ${props => props.theme.colors.mutedText};
  }
`;

// fields
export const Error = styled.span`
  color: ${props => props.theme.colors.red[400]};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const FieldGroup = styled.fieldset`
  display: flex;
  flex-direction: column;

  & + fieldset {
    margin-top: 30px;
  }
`;

const inputStyle = css`
  background: ${props => props.theme.colors.gray[700]};
  border-radius: ${props => props.theme.radii.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  height: 60px;
  margin-bottom: 5px;
  padding: 0 20px;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  ${inputStyle}
`;

export const FormikField = (props: InputProps): JSX.Element => {
  const { name } = props;
  const [field, { touched, error }] = useField(name);

  return (
    <>
      <Input {...field} {...props} />
      {touched && error && <Error>{`* ${error}`}</Error>}
    </>
  );
};
