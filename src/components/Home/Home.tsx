import LocationList from 'components/LocationList/LocationList';
import { ILocationProps, Props } from 'interfaces/interfaces';

const Home = ({ fetchData }: Props): JSX.Element => {
  return (
    <div>
      <LocationList fetchData={fetchData} />
    </div>
  );
};

export default Home;
