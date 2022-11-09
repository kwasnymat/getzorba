import { FC } from "react";
import { VariantProps } from "@stitches/react";

import { NavbarContainer } from "./styles";
import { LeftSection, RightSection, MiddleSection } from "./components";

export type NavbarProps = VariantProps<typeof NavbarContainer>;

export const Navbar: FC<NavbarProps> = ({ color, fixed = true }) => {
  return (
    <NavbarContainer color={color} fixed={fixed}>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </NavbarContainer>
  );
};
