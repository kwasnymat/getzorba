import { sortByPropertyAgeHelper } from "../sortByPropertyAge";
import { AgeFilter, Property } from "../../properties/types";
import { PayloadAction } from "@reduxjs/toolkit";

describe('sortByPropertyAgeHelper', () => {
  it('should return sorted properties by oldest date of creation', () => {
    // given
    const properties = [{ createdAt: '2022-10-08' }, { createdAt: '2022-09-07'}, { createdAt: '2022-09-15'}] as Property[];
    // when

    const sorted = sortByPropertyAgeHelper(properties, { payload: 'oldest'} as PayloadAction<AgeFilter>);

    // then
    const expected = [{ createdAt: '2022-09-07'}, { createdAt: '2022-09-15' }, { createdAt: '2022-10-08' }];

    expect(sorted).toEqual(expected);
  });

  it('should return sorted properties by newest date of creation', () => {
    // given
    const properties = [{ createdAt: '2022-10-08' }, { createdAt: '2022-09-07'}, { createdAt: '2022-09-15'}] as Property[];
    // when

    const sorted = sortByPropertyAgeHelper(properties, { payload: 'newest'} as PayloadAction<AgeFilter>);

    // then
    const expected = [{ createdAt: '2022-10-08'}, { createdAt: '2022-09-15' }, { createdAt: '2022-09-07' }];

    expect(sorted).toEqual(expected);
  });
});
