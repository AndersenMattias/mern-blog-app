import BootstrapBtn from 'components/BootstrapBtn/BootstrapBtn';

import { ILocation, Props } from 'interfaces/interfaces';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Location = ({ fetchData }: Props): JSX.Element => {
  console.log(fetchData);
  return (
    <Container fluid>
      {fetchData?.map((location: ILocation) => {
        return (
          <Link to={`/location-details/${location._id}`}>
            <Container key={location._id} fluid>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={location.image}
                  alt='location-img'
                />
                <Card.Body>
                  <Card.Title>{location.title}</Card.Title>

                  <BootstrapBtn
                    type='button'
                    variant='primary'
                    text='Read more'
                  />
                </Card.Body>
              </Card>
            </Container>
          </Link>
        );
      })}
    </Container>
  );
};

export default Location;
