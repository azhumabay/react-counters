import { Navbar, Nav, Container, Button } from "react-bootstrap";

const AppHeader = ({ toggleTheme, theme }) => (
  <Navbar
    bg={theme === "light" ? "light" : "dark"}
    variant={theme === "dark" ? "dark" : "light"}
    expand=""
    className="px-3 p-4 border-bottom border-secondary mb-5"
  >
    <Container>
      <Navbar.Brand href="#home" className="fs-2">
        React Counters
      </Navbar.Brand>
      <Button
        onClick={toggleTheme}
        variant={theme === "light" ? "dark" : "light"}
      >
        {theme === "light" ? "Dark" : "Light"}
      </Button>
    </Container>
  </Navbar>
);

export default AppHeader;
