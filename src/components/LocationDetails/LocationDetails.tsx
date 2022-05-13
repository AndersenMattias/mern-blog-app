import BootstrapBtn from 'components/BootstrapBtn/BootstrapBtn';
import { ILocation, Props } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const LocationDetails = ({ fetchData }: Props) => {
  console.log(fetchData);
  const { id } = useParams();
  let location = fetchData.find((x) => x._id == id);

  return (
    <Container>
      <h4>{location?.locationName}</h4>
      <img src={location?.image} alt='location-img' />
      <p>{location?.country}</p>
      <p>{location?.city}</p>
      <p>{location?.description}</p>
      <p>Visited: {location?.date.toString().split('T')[0]}</p>
      <p>{location?.createdBy}</p>
      <p>{location?.rating}</p>
    </Container>
  );
};

export default LocationDetails;
