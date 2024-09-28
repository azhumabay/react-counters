import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Counter from "./Counter";

export default function PropsStateCounters() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((v) => v + 1);
  };

  const decrementHandler = () => {
    setCount((v) => v - 1);
  };

  return (
    <>
      <h3 className="text-center mb-5 text-white">
        Two counters with state shared via props, implemented using the{" "}
        <span className="text-info">useState hook</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
            title={"useState"}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
            title={"useState"}
          />
        </Col>
      </Row>
    </>
  );
}
