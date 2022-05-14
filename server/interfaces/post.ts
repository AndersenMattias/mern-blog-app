export interface IPost extends Document {
  title: string;
  bodyText: string;
  date: Date;
  image: string;
  createdBy: string;
  categories: string;
  owner: any;
}
