import { PayloadAction } from "@reduxjs/toolkit";
import { Property, Status } from "../properties/types";

export const sortByStatusHelper = (
  array: Property[],
  action: PayloadAction<Status>
) => {
  return array.sort((a, b) => {
    if (a.status === action.payload && b.status !== action.payload) {
      return -1;
    }
    if (a.status !== action.payload && b.status === action.payload) {
      return 1;
    }
    return 0;
  });
};
