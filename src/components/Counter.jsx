import { Card, Button } from "react-bootstrap";

export default function Counter({ count, increment, decrement, title }) {
  return (
    <Card bg="dark" text="light" className="mb-2 w-100">
      <Card.Header className="border-bottom border-secondary fs-5 text-truncate">
        {title}
      </Card.Header>
      <Card.Body className="d-flex flex-column gap-3 align-items-center">
        <Card.Title className="fs-1">{count}</Card.Title>
        <Button onClick={increment} variant="secondary" className="w-100 fs-5">
          increment
        </Button>
        <Button onClick={decrement} variant="secondary" className="w-100 fs-5">
          decrement
        </Button>
      </Card.Body>
    </Card>
  );
}
