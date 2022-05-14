export interface IPost extends Document {
  title: string;
  bodyText: string;
  date: Date;
  image: string;
  author: string;
  createdAt: string;
  categories: string;
}
