import { useReducer } from "react";
import Counter from "./Counter";
import { Row, Col } from "react-bootstrap";
import { counterReducer, initialState } from "../reducer";

export default function PropsReducerCounters({ theme }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h3
        className={`text-center mb-5 ${
          theme === "dark" ? "text-white" : "text-dark"
        }`}
      >
        Two counters with shared state via props, implemented using a{" "}
        <span className="text-info">reducer</span>
      </h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer + Props"}
            theme={theme}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Counter
            count={state.count}
            increment={() => dispatch({ type: "increment" })}
            decrement={() => dispatch({ type: "decrement" })}
            title={"useReducer + Props"}
            theme={theme}
          />
        </Col>
      </Row>
    </>
  );
}
