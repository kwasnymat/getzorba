import { Link } from "../../Typography";
import { Input } from "../../Input";
import { FiSearch } from "react-icons/fi";

import { MiddleSectionWrapper } from "../styles";

export const MiddleSection = () => {
  return (
    <MiddleSectionWrapper>
      <Input
        placeholder="Search"
        color="tertiary"
        icon={<FiSearch size={20} />}
      />
      <Link href={"/"} color="tertiary" hideOnMobiles>
        Recommended listings
      </Link>
    </MiddleSectionWrapper>
  );
};
