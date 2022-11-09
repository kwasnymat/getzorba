import { styled } from "../../../stitches.config";

export const StyledInput = styled("input", {
  border: "none",
  padding: "1rem 0",
  fontSize: "$font16",

  "&::placeholder": {
    fontSize: "$font16",
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
  },
});

export const InputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
