import { styled } from "../../../stitches.config";
import { Text } from "../../../shared/components/Typography";

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "@bp-xl": {
    flexDirection: "row",
  },
});

export const PriceContainer = styled("div", {
  width: "100%",
  display: "flex",
  padding: "2rem 2.2rem 1.5rem 2.2rem",
  flexDirection: "column",
  borderRadius: "0 0 $extraLarge $extraLarge",
  boxShadow:
    "rgb(29 71 123 / 4%) 0px 5px 10px, rgb(29 71 123 / 12%) 0px 1px 5px",
  justifyContent: "center",

  "@bp-xl": {
    width: "55%",
    maxHeight: "18.8rem",
    borderRadius: "0 $extraLarge $extraLarge 0",
  },
});

export const UnitsContainer = styled("div", {
  display: "flex",
  columnGap: "$small",
});

export const StyledSup = styled("sup", {
  position: "relative",
  top: "-0.5rem",
  fontSize: "60%",
});

export const CardsContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "$mediumPlus",
  padding: "0 2.2rem 0 2.8rem",
});

export const Image = styled("img", {
  borderRadius: "$extraLarge $extraLarge 0 0",
  width: "100%",
  objectFit: "cover",
  maxHeight: "35.9rem",
  verticalAlign: "center",

  "@bp-xl": {
    width: "45%",
    maxHeight: "18.8rem",
    borderRadius: "$extraLarge 0 0 $extraLarge",
  },
});

export const Price = styled(Text, {
  fontWeight: "$semiBold",
  fontSize: "$font18",
  lineHeight: "2.8rem",
});

export const PromoContainer = styled("div", {
  width: "100%",
  boxShadow:
    "rgb(29 71 123 / 4%) 0px 5px 10px, rgb(29 71 123 / 12%) 0px 1px 5px",
  borderRadius: "$small",
  display: "flex",
  alignItems: "flex-start",
  padding: "$large",
});

export const PromoInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 $medium",
});

export const PromoTitleContainer = styled("div", {
  marginBottom: "$small",
});

export const CloseButton = styled("button", {
  all: "unset",
  cursor: "pointer",
});

export const CarouselContainer = styled("div", {
  width: "100%",

  "@bp-xl": {
    width: "45%",
  },
});
