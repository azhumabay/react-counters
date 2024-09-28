import { useContext } from "react";
import { reducerContext } from "../context/ReducerProvider";
import { Row, Col } from "react-bootstrap";
import Counter from "./Counter";

export default function ContextReducerCounters({ theme }) {
  const { state, dispatch } = useContext(reducerContext);

  return (
    <>
      <h3
        className={`text-center mb-5 ${
          theme === "dark" ? "text-white" : "text-dark"
        }`}
      >
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
            theme={theme}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer + Context"}
            theme={theme}
          />
        </Col>
      </Row>
    </>
  );
}
