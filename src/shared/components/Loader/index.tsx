import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader: FC<{ visible: boolean }> = ({ visible }) => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#1c85e8"
    ariaLabel="three-dots-loading"
    visible={visible}
  />
);
