import { Row, Col } from "react-bootstrap";
import useCounter from "../hooks/useCounter";
import Counter from "./Counter";

export default function PropsCustomHookCounters() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <h3 className="text-center mb-5 text-white">
        Two counters with shared state via props, implemented using a{" "}
        <span className="text-info">custom hook</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useCounter (custom hook)"}
          />
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            title={"useCounter (customs hook)"}
          />
        </Col>
      </Row>
    </>
  );
}
