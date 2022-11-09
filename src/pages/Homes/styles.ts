import { styled } from "../../stitches.config";

export const MapContainer = styled("div", {
  display: "none",

  "@bp-sm": {
    display: "flex",
    width: "50vw",
  },
  "@bp-lg": {
    width: "calc(100vw - 68rem)",
  },
});

export const ListContainer = styled("div", {
  width: "100vw",
  flexDirection: "column",
  maxHeight: "calc(100vh - $navbarHeight)",
  overflow: "scroll",

  "@bp-sm": {
    display: "flex",
    width: "50vw",
  },

  "@bp-lg": {
    minWidth: "68rem",
    width: "68rem",
  },
});
