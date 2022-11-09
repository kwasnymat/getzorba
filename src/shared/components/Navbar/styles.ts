import { styled } from "../../../stitches.config";

export const NavbarContainer = styled("nav", {
  display: "flex",
  position: "absolute",
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  justifyContent: "space-between",
  alignItems: "center",
  height: "$navbarHeight",
  padding: "0 $large",

  variants: {
    color: {
      primary: {
        background: "$navbarPrimaryBackground",
      },
    },
    fixed: {
      true: {
        position: "fixed",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },

  "@bp-lg": {
    padding: "0 6.6rem",
  },
});

export const RightSectionWrapper = styled("div", {
  display: "flex",
  columnGap: "$extraLarge",
});

export const MiddleSectionWrapper = styled("div", {
  display: "flex",
  columnGap: "$extraLarge",
  alignItems: "center",
});

export const ArrowIndicator = styled("span", {
  transform: "rotate(180deg)",
  display: "inline-block",
  position: "absolute",
  top: "-0.4rem",
  right: "-1.5rem",
});
