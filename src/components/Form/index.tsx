import React, { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

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
