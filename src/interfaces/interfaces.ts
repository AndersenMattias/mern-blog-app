export interface ILocation {
  _id: string;
  locationName: string;
  imageUrl: string;
  description: string;
  date: Date;
  createdBy: string;
}

export interface Props {
  fetchData?: ILocation[];
}

export interface ISignIn {
  toggleLogin: () => boolean | undefined | void;
}
