import { Container, Row, Col } from "react-bootstrap";

import AppHeader from "./components/AppHeader";

import UnlinkedCounters from "./components/UnlinkedCounters";
import PropsStateCounters from "./components/PropsStateCounters";
import PropsCustomHookCounters from "./components/PropsCustomHookCounters";

export default function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <UnlinkedCounters />
        <PropsStateCounters />
        <PropsCustomHookCounters />
      </Container>

      {/* <main>
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

            <Col xs={12} md={6} lg={4} className="mb-5">
              <CounterCustomHook />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4} className="mb-5">
              <AppCounterReducer />
            </Col>

            <Col xs={12} md={6} lg={4}>
              <AppCounterReducer />
            </Col>
          </Row>
        </Container>
      </main> */}
    </>
  );
}
