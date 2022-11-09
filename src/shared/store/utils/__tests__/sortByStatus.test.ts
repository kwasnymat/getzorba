import { sortByStatusHelper } from "../sortByStatus";
import { AgeFilter, Property, Status } from "../../properties/types";
import { PayloadAction } from "@reduxjs/toolkit";

describe("sortByStatusHelper", () => {
  it("should return sorted properties active status", () => {
    // given
    const properties = [
      { status: "active" },
      { status: "sold" },
      { status: "active" },
    ] as Property[];
    // when

    const sorted = sortByStatusHelper(properties, {
      payload: "active",
    } as PayloadAction<Status>);

    // then
    const expected = [
      { status: "active" },
      { status: "active" },
      { status: "sold" },
    ];

    expect(sorted).toEqual(expected);
  });

  it("should return sorted properties by sold status", () => {
    // given
    const properties = [
      { status: "active" },
      { status: "active" },
      { status: "sold" },
    ] as Property[];
    // when

    const sorted = sortByStatusHelper(properties, {
      payload: "sold",
    } as PayloadAction<Status>);

    // then
    const expected = [
      { status: "sold" },
      { status: "active" },
      { status: "active" },
    ];

    expect(sorted).toEqual(expected);
  });
});
