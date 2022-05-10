export interface ILocationProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  year: number;
}

export interface Props {
  fetchData?: ILocationProps[];
}
