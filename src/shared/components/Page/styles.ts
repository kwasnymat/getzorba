import { styled } from "../../../stitches.config";

export const PageWrapper = styled("div", {
  marginTop: "$navbarHeight",
  minHeight: "calc(100vh - $navbarHeight)",
  maxHeight: "calc(100vh - $navbarHeight)",
  display: "flex",
  overflow: "scroll",
});
