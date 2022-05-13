import AddLocation from 'components/AddLocation/AddLocation';
import Footer from 'components/Footer/Footer';
import LocationList from 'components/Locations/Locations';
import NavigationBar from 'components/NavigationBar/NavigationBar';

import { Props } from 'interfaces/interfaces';
import { Container } from 'react-bootstrap';

const Home = ({ fetchData }: Props): JSX.Element => {
  return (
    <Container>
      <NavigationBar />
      <h2>Sign in or register to share your experiences.</h2>
      <LocationList fetchData={fetchData} />

      <AddLocation />
      <Footer />
    </Container>
  );
};

export default Home;
