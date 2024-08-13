import Container from '@mui/material/Container';
import Header from './components/Header';
import cover from './assets/programming_bg.jpg'
import Banner from './components/Banner';
import Noticias from './components/Noticias';
import RedeSocial from './components/RedeSocial';
import Contato from './components/Contato';

function App() {
  return (

    <Container maxWidth={false} disableGutters sx={{ bgcolor: '#cfe8fc', height: '130em', width: '100%' }}>

      <Header />

      <Banner />

      <Noticias />

      <RedeSocial />

      <Contato />

    </Container>

  );
}

export default App;
