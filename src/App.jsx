import { Container, Row, Col } from "react-bootstrap";
import Counter from "./components/Counter";
import AppHeader from "./components/AppHeader";
import CounterCustomHook from "./components/CounterCustomHook";

export default function App() {
  return (
    <>
      <AppHeader />

      <main>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4} className="mb-5">
              <Counter />
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-5">
              <Counter />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4} className="mb-5">
              <CounterCustomHook />
            </Col>

            <Col xs={12} md={6} lg={4}>
              <CounterCustomHook />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
