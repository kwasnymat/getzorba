import { Link } from "../../Typography";
import { ArrowIndicator, RightSectionWrapper } from "../styles";

export const RightSection = () => {
  return (
    <RightSectionWrapper>
      <Link href={"/"} color="tertiary">
        Also selling?
      </Link>
      <Link href={"/"} color="tertiary">
        More <ArrowIndicator>^</ArrowIndicator>
      </Link>
      <Link href={"/"} color="secondary" weight="semiBold">
        Sign in
      </Link>
    </RightSectionWrapper>
  );
};
