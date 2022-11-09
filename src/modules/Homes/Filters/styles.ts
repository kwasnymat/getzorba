import { styled } from "../../../stitches.config";
import { StylesConfig } from "react-select";
import { Option } from "./types";

export const ButtonsContainer = styled("div", {
  display: "flex",
  columnGap: "$small",
});

export const FiltersContainer = styled("div", {
  padding: "2.2rem 0 2.2rem 3.2rem",
});

export const TitleContainer = styled("div", {
  marginBottom: "0.4rem",
});

export const PropertiesCounterContainer = styled("div", {
  marginBottom: "2.4rem",
});

export const selectStyles: StylesConfig<Option, false> = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  control: (provided) => ({
    ...provided,
    border: "0.2rem solid #222222",
    borderRadius: "0.8rem",
    color: "#222222",
    fontWeight: "bold",
    fontSize: "1.2rem",
    lineHeight: "100%",

    "&:hover": {
      border: "0.2rem solid #222222",
      background: "#f2f2f2",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#222222",

    "&:hover": {
      color: "#222222",
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    border: "0.2rem solid #222222",
    borderRadius: "0.8rem",
    background: "#f2f2f2",
    width: "13rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#fafafa" : "#fff",
    color: "#222222",
    fontSize: "1.2rem",

    "&:hover": {
      background: "#f2f2f2",
    },
  }),
};
