import { styled } from "../../../stitches.config";

export const StyledButton = styled("button", {
  display: "flex",
  columnGap: "$extraSmall",
  color: "$primaryButtonColor",
  background: "$primaryButtonBackgroundColor",
  border: "0.2rem solid $primaryButtonColor",
  fontSize: "$font12",
  lineHeight: "100%",
  verticalAlign: "top",
  borderRadius: "$large",
  padding: "0.45rem 0.8rem",
  alignItems: "center",
  fontWeight: "$semiBold",
  cursor: "pointer",

  "&:hover": {
    background: "$primaryButtonHoverColor",
  },
  "&:disabled": {
    background: "$primaryButtonHoverColor",
    cursor: "not-allowed",
  },
});
