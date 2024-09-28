import { useContext } from "react";
import Counter from "./Counter";
import { Row, Col } from "react-bootstrap";
import { customHookContext } from "../context/CustomHookProvider";

export default function ContextCustomHookCounters() {
  const { count, increment, decrement } = useContext(customHookContext);

  return (
    <>
      <h3 className="text-center mb-5 text-white">
        Two counters with shared state via context, implemented using a{" "}
        <span className="text-info">custom hook</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useCounter + useContext"}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useCounter + useContext"}
          />
        </Col>
      </Row>
    </>
  );
}
