export interface ILocation {
  _id: string;
  title: string;
  locationName: string;
  country: string;
  city: string;
  description: string;
  date: Date;
  image: string;
  createdBy: string;
  rating: number;
}

export interface Props {
  fetchData: ILocation[];
}

export interface ISignIn {
  toggleLogin: () => boolean | undefined | void;
}
