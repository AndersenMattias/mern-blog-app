import Location from 'components/Location/Location';
import { Props } from 'interfaces/interfaces';

const LocationList = ({ fetchData }: Props): JSX.Element => {
  return <Location fetchData={fetchData} />;
};

export default LocationList;
