import React from "react";
import Select from "react-select";
import { RiMenu5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Header1, Text } from "../../../shared/components/Typography";
import { Button } from "../../../shared/components/Button";
import { AppDispatch, RootState } from "../../../shared/store/store";
import {
  AgeFilterEnum,
  StatusEnum,
} from "../../../shared/store/properties/types";
import {
  setAgeFilter,
  setStatus,
  sortByPropertyAge,
  sortByStatus,
} from "../../../shared/store/properties/propertiesSlice";
import { Option } from "./types";
import { filterOptions } from "./constants";
import {
  ButtonsContainer,
  FiltersContainer,
  PropertiesCounterContainer,
  TitleContainer,
  selectStyles,
} from "./styles";

export const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { properties, filters } = useSelector(
    (state: RootState) => state.properties
  );
  const handleSelectChange = (option: Option | null) => {
    switch (option?.value) {
      case StatusEnum.ACTIVE:
        dispatch(setStatus(StatusEnum.ACTIVE));
        dispatch(sortByStatus(StatusEnum.ACTIVE));
        break;
      case StatusEnum.SOLD:
        dispatch(setStatus(StatusEnum.SOLD));
        dispatch(sortByStatus(StatusEnum.SOLD));
        break;
      case StatusEnum.PENDING:
        dispatch(setStatus(StatusEnum.PENDING));
        dispatch(sortByStatus(StatusEnum.PENDING));
        break;
      case AgeFilterEnum.OLDEST:
        dispatch(setAgeFilter(AgeFilterEnum.OLDEST));
        dispatch(sortByPropertyAge(AgeFilterEnum.OLDEST));
        break;
      case AgeFilterEnum.NEWEST:
        dispatch(setAgeFilter(AgeFilterEnum.NEWEST));
        dispatch(sortByPropertyAge(AgeFilterEnum.NEWEST));
        break;
    }
  };

  return (
    <FiltersContainer>
      <TitleContainer>
        <Header1>Homes for sale in Tampa</Header1>
      </TitleContainer>
      <PropertiesCounterContainer>
        <Text>{properties.length} listings found</Text>
      </PropertiesCounterContainer>
      <ButtonsContainer>
        <Select
          onChange={handleSelectChange}
          options={filterOptions}
          defaultValue={filterOptions.find(
            ({ value }) => value === filters.ageFilter
          )}
          styles={selectStyles}
        />
        <Button disabled iconPlacement="left" icon={<RiMenu5Fill size={20} />}>
          More filters
        </Button>
      </ButtonsContainer>
    </FiltersContainer>
  );
};
