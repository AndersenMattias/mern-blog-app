import { ILocation, Props } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';

const Location = ({ fetchData }: Props): JSX.Element => {
  console.log(fetchData);
  return (
    <Container fluid>
      {fetchData?.map((location: ILocation) => {
        console.log(location);
        return (
          <Container key={location._id} fluid>
            <h2>{location.locationName}</h2>
            <img src={location.imageUrl} alt='image' width={200} height={200} />
            <p>Description: {location.description}</p>
            <p>Visited: {location.date.toString().split('T')[0]}</p>
          </Container>
        );
      })}
    </Container>
  );
};

export default Location;
