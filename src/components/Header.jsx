import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => (
  <Navbar
    bg="dark"
    variant="dark"
    expand=""
    className="px-3 p-4 border-bottom border-secondary mb-5"
  >
    <Container>
      <Navbar.Brand href="#home">React Counters</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">useState</Nav.Link>
          <Nav.Link href="#link">useCounter (custom hook)</Nav.Link>
          <Nav.Link href="#link">counterReducer (useReducer)</Nav.Link>
          <Nav.Link href="#link">Props + useState</Nav.Link>
          <Nav.Link href="#link">useContext + useCounter</Nav.Link>
          <Nav.Link href="#link">useContext + useReducer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
