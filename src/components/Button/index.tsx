import { ButtonHTMLAttributes } from "react";
import { ButtonDefault } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  color: string;
}

export function Button({ children, ...rest }: IButtonProps) {
  return <ButtonDefault {...rest}>{children}</ButtonDefault>;
}
