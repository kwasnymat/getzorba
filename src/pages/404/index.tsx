import { Page } from "../../shared/components/Page";
import { Header1 } from "../../shared/components/Typography";
import { styled } from "../../stitches.config";

const PageNotFoundContainer = styled("div", {
  display: "flex",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
});

export const PageNotFound = () => {
  return (
    <Page>
      <PageNotFoundContainer>
        <Header1>PAGE NOT FOUND</Header1>
      </PageNotFoundContainer>
    </Page>
  );
};
