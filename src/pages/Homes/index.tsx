import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProperties } from "../../shared/store/properties/propertiesSlice";
import { AppDispatch, RootState } from "../../shared/store/store";
import { Page } from "../../shared/components/Page";
import { Filters, Cards } from "../../modules/Homes";
import { MapContainer, ListContainer, LoaderContainer } from "./styles";
import { MapComponent } from "../../modules/Map";
import { Loader } from "../../shared/components/Loader";

export const Homes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue, isFetchingProperties } = useSelector(
    (state: RootState) => state.properties
  );

  useEffect(() => {
    dispatch(fetchProperties(inputValue));
  }, [dispatch, inputValue]);

  return (
    <Page>
      <MapContainer>
        <MapComponent />
      </MapContainer>
      <ListContainer>
        {isFetchingProperties ? (
          <LoaderContainer>
            <Loader visible={isFetchingProperties} />
          </LoaderContainer>
        ) : (
          <>
            <Filters />
            <Cards />
          </>
        )}
      </ListContainer>
    </Page>
  );
};
