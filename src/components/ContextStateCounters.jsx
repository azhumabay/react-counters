import { useContext } from "react";
import Counter from "./Counter";
import { Row, Col } from "react-bootstrap";
import { stateContext } from "../context/StateProvider";

export default function ContextStateCounters({ theme }) {
  const { count, increment, decrement } = useContext(stateContext);

  return (
    <>
      <h3
        className={`text-center mb-5 ${
          theme === "dark" ? "text-white" : "text-dark"
        }`}
      >
        Two counters with shared state via context, implemented using a{" "}
        <span className="text-info">useState hook</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useState + useContext"}
            theme={theme}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useState + useContext"}
            theme={theme}
          />
        </Col>
      </Row>
    </>
  );
}
