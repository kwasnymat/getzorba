import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: ReactNode;
};

export const Link: FC<LinkProps> = ({ to, children }) => (
  <RouterLink to={to}>{children}</RouterLink>
);
