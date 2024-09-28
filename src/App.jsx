import { Container, Row, Col } from "react-bootstrap";
import AppHeader from "./components/AppHeader";
import UnlinkedCounters from "./components/UnlinkedCounters";
import PropsStateCounters from "./components/PropsStateCounters";
import PropsCustomHookCounters from "./components/PropsCustomHookCounters";
import PropsReducerCounters from "./components/PropsReducerCounters";
import { CounterStateProvider } from "./context";
import ContextStateCounters from "./components/ContextStateCounters";

export default function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <UnlinkedCounters />
        <PropsStateCounters />
        <PropsCustomHookCounters />
        <PropsReducerCounters />

        <CounterStateProvider>
          <ContextStateCounters />
        </CounterStateProvider>
      </Container>
    </>
  );
}
