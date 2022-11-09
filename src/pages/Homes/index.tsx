import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProperties } from "../../shared/store/properties/propertiesSlice";
import { AppDispatch, RootState } from "../../shared/store/store";
import { Page } from "../../shared/components/Page";
import { Filters, Cards } from "../../modules/Homes";
import { MapContainer, ListContainer } from "./styles";

export const Homes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue } = useSelector((state: RootState) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties(inputValue));
  }, [dispatch, inputValue]);

  return (
    <Page>
      <MapContainer></MapContainer>
      <ListContainer>
        <Filters />
        <Cards />
      </ListContainer>
    </Page>
  );
};
