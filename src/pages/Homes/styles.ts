import { styled } from "../../stitches.config";

export const MapContainer = styled("div", {
  display: "flex",
  width: "50vw",

  "@bp-lg": {
    width: "calc(100vw - 68rem)",
  },
});

export const ListContainer = styled("div", {
  display: "flex",
  width: "50vw",
  flexDirection: "column",

  "@bp-lg": {
    minWidth: "68rem",
    width: "68rem",
  },
});
