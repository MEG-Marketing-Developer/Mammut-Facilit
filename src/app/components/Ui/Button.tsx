import React, { ReactNode, ButtonHTMLAttributes } from "react";
import Link from 'next/link'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: 'w-full' | 'w-fit';
}
const Button = ({ className, children, width = "w-fit", ...rest }: IProps) => {
  return (
    <button {...rest} className={`${className} ${width} rounded`}>
      {children}
    </button>
  )
}
export default Button

