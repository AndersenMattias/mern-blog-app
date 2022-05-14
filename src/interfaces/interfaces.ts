export interface IPost {
  _id: string;
  title: string;
  bodyText: string;
  image: string;
  author: string;
  createdAt: Date | string;
  categories: string[];
}

export interface PostProps {
  post: IPost;
}

export interface ISignIn {
  toggleLogin: () => boolean | undefined | void;
}
