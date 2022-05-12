import AddLocation from 'components/AddLocation/AddLocation';
import LocationList from 'components/LocationList/LocationList';
import { Props } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';

const Home = ({ fetchData }: Props): JSX.Element => {
  return (
    <Container>
      <h2>Sign in or register to share your experiences.</h2>
      <LocationList fetchData={fetchData} />

      <AddLocation />
    </Container>
  );
};

export default Home;
