import { FC, ReactNode } from "react";
import { PageWrapper } from "./styles";

export const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};
