export interface IPost {
  _id?: string;
  title: string;
  bodyText: string;
  image: string | undefined;
  author: string;
  createdAt: Date | string | null;
  categories: string[];
}

export interface InewPost {
  _id: string;
  title: string;
  bodyText: string;
  image: any;
  author: string;
  createdAt: Date | string;
  categories: string[];
}

export interface PostProps {
  post: IPost;
}

export interface IFormInputs {
  title: string;
  bodyText: string;
  image: File | string;
  author: string;
  createdAt: Date | string;
  categories: string[];
}
