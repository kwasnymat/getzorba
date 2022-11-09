import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";

type ButtonProps = {
  icon?: ReactNode;
  iconPlacement?: "right" | "left";
  disabled?: boolean;
  children: string;
};

export const Button: FC<ButtonProps> = ({
  icon,
  iconPlacement,
  disabled,
  children,
}) => {
  return (
    <StyledButton disabled={disabled}>
      {icon && iconPlacement === "left" && icon}
      {children}
      {icon && iconPlacement === "right" && icon}
    </StyledButton>
  );
};
