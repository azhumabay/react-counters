import { Row, Col } from "react-bootstrap";
import Counter from "./Counter";
import { useReducer, useState } from "react";
import useCounter from "../hooks/useCounter";
import { counterReducer, initialState } from "../reducer";

export default function UnlinkedCounters() {
  const [count, setCount] = useState(0);
  const [customCount, customIncrement, customDecrement] = useCounter(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const incrementHandler = () => {
    setCount((v) => v + 1);
  };

  const decrementHandler = () => {
    setCount((v) => v - 1);
  };

  return (
    <>
      <h3 className="text-center mb-5 text-white">
        Three counters without interconnection, implemented using the{" "}
        <span className="text-info">useState hook</span>, a{" "}
        <span className="text-info">custom hook</span>, and a{" "}
        <span className="text-info">reducer</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={4} className="mb-5">
          <Counter
            count={count}
            increment={incrementHandler}
            decrement={decrementHandler}
            title={"useState"}
          />
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-5">
          <Counter
            count={customCount}
            increment={customIncrement}
            decrement={customDecrement}
            title={"useCounter (custom hook)"}
          />
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer"}
          />
        </Col>
      </Row>
    </>
  );
}
