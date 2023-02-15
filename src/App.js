import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container xs={2} className="App">
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
