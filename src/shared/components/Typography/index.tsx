import { styled } from "../../../stitches.config";

const sharedStyles = {
  fontStyle: "normal",
  color: "$text",
  margin: "0",
  padding: "0",
};

const sharedVariants = {
  variants: {
    color: {
      primary: {
        color: "$primaryText",
      },
      secondary: {
        color: "$secondaryText",
      },
      tertiary: {
        color: "$tertiaryText",
      },
    },
    style: {
      italic: {
        fontStyle: "italic",
      },
    },
  },
};

export const Header1 = styled("h1", {
  ...sharedStyles,
  ...sharedVariants,
  fontWeight: "$bold",
  fontSize: "$font16",
  lineHeight: "1.15",
});

export const header3Styles = {
  ...sharedStyles,
  ...sharedVariants,
  fontWeight: "$bold",
  fontSize: "$font19",
  lineHeight: "3rem",
};

export const Header3 = styled("h3", {
  ...header3Styles,
});

export const Text = styled("span", {
  ...sharedStyles,
  ...sharedVariants,
  fontWeight: "$regular",
  fontSize: "$font14",
  lineHeight: "2rem",
});

export const Link = styled("a", {
  ...sharedStyles,
  textDecoration: "none",
  position: "relative",
  fontSize: "$font16",
  transition: "color .15s cubic-bezier(0.1, 0.7, 0.1, 1)",
  cursor: "pointer",
  fontWeight: "$regular",

  "&:hover": {
    color: "$linkHoverColor",
  },
  variants: {
    color: {
      primary: {
        color: "$primaryText",
      },
      secondary: {
        color: "$secondaryText",
      },
      tertiary: {
        color: "$tertiaryText",
      },
    },
    weight: {
      semiBold: {
        fontWeight: "$semiBold",
      },
    },
    size: {
      small: {
        fontSize: "$font12",
      },
    },
  },
});
