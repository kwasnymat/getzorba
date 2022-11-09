interface Address {
  county: string;
  formattedAddress: string;
  googlePlaceId: string;
  kind: string;
  locality: string;
  location: [number, number];
  route: string;
  state: string;
  stateCode: string;
  streetNumber: string;
  zipcode: string;
}

interface Unit {
  bathroom: number;
  bedroom: number;
  squareFootage: number;
  _id: string;
}

export enum StatusEnum {
  SOLD = "sold",
  ACTIVE = "active",
  PENDING = "pending",
}
export enum AgeFilterEnum {
  OLDEST = "oldest",
  NEWEST = "newest",
}

export type Status = `${StatusEnum}`;
export type AgeFilter = `${AgeFilterEnum}`;

export interface Property {
  acAge: string;
  address: Address;
  createdAt: string;
  dealAlertCreatedAt: string;
  dealType: string;
  description: string;
  emd: null | string;
  expectedRent: number;
  exteriorFeatures: string[];
  friendlyUrl: string;
  hoa: string;
  hubspotDealOwnerId: string;
  images: string[];
  impressions: number;
  interiorFeatures: string[];
  lastPublishedAt: string[];
  lastPublishedBy: string[];
  lotSize: number;
  name: string;
  pageviews: number;
  plumbing: string;
  pricingStrategy: string;
  propertyType: string;
  purchasePrice: number;
  rehabPrice: number;
  roofAge: string;
  skipVerification: boolean;
  slackThreadId: string;
  squareFootage: number;
  status: Status;
  units: Unit[];
  updatedAt: string;
  user: string;
  yearBuilt: number;
  _id: string;
}

export interface PropertiesInitialState {
  properties: Property[];
  isFetchingProperties: boolean;
  error: null | string;
  filters: {
    status: Status | null;
    ageFilter: AgeFilter | null;
  };
  inputValue: string;
}
