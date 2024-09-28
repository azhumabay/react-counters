import { Card, Button } from "react-bootstrap";
import useCounter from "../hooks/useCounter";

export default function CounterCustomHook() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <Card bg="dark" text="light" className="mb-2 w-100">
      <Card.Header className="border-bottom border-secondary">
        useCounter (custom hook)
      </Card.Header>
      <Card.Body className="d-flex flex-column gap-3 align-items-center">
        <Card.Title className="fs-2">{count}</Card.Title>
        <Button onClick={increment} variant="secondary" className="w-100">
          increment
        </Button>
        <Button onClick={decrement} variant="secondary" className="w-100">
          decrement
        </Button>
      </Card.Body>
    </Card>
  );
}
