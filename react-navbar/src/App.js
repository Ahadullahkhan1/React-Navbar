import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo192.png';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar expand="lg" className="Navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto  link text-white">
                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                <Nav.Link className='text-white' href="#link">About</Nav.Link>
                <Nav.Link className='text-white' href="#link">Services</Nav.Link>
                <Nav.Link className='text-white' href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='banner'>React Navbar Done</div>




    </div>
  );
}

export default App;
