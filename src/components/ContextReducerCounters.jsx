import { useContext } from "react";
import { reducerContext } from "../context/ReducerProvider";
import { Row, Col } from "react-bootstrap";
import Counter from "./Counter";

export default function ContextReducerCounters() {
  const { state, dispatch } = useContext(reducerContext);

  return (
    <>
      <h3 className="text-center mb-5 text-white">
        Two counters with shared state via context, implemented using a{" "}
        <span className="text-info">reducer</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer + Context"}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer + Context"}
          />
        </Col>
      </Row>
    </>
  );
}
