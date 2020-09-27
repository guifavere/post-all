import { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Field } from 'formik';
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
const inputStyle = css`
  background: ${props => props.theme.colors.gray[700]};
  border-radius: ${props => props.theme.radii.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.body};
  font-size: ${props => props.theme.fontSizes.sm};
  height: 60px;
  padding: 0 20px;
`;

export const Input = styled.input<InputProps>`
  ${inputStyle}
`;

export const FormikField = styled(Field)`
  ${inputStyle}
`;
