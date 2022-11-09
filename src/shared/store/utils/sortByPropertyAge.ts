import { PayloadAction } from "@reduxjs/toolkit";
import { AgeFilter, Property } from "../properties/types";

export const sortByPropertyAgeHelper = (
  array: Property[],
  action: PayloadAction<AgeFilter>
) => {
  return array.sort((a, b) => {
    if (action.payload === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};
