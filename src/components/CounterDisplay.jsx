import { Card, Button } from "react-bootstrap";

export default function CounterDisplay({ count, increment, decrement, title }) {
  return (
    <Card bg="dark" text="light" className="mb-2 w-100">
      <Card.Header className="border-bottom border-secondary">
        {title}
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
