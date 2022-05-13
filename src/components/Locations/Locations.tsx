import Location from 'components/Location/Location';
import { Props } from 'interfaces/interfaces';

const Locations = ({ fetchData }: Props): JSX.Element => {
  return <Location key={Math.random() * 100} fetchData={fetchData} />;
};

export default Locations;
