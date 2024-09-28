import { Container } from "react-bootstrap";
import AppHeader from "./components/AppHeader";
import UnlinkedCounters from "./components/UnlinkedCounters";
import PropsStateCounters from "./components/PropsStateCounters";
import PropsCustomHookCounters from "./components/PropsCustomHookCounters";
import PropsReducerCounters from "./components/PropsReducerCounters";
import { CustomHookProvider, ReducerProvider, StateProvider } from "./context";
import ContextStateCounters from "./components/ContextStateCounters";
import ContextCustomHookCounters from "./components/ContextCustomHookCounters";
import ContextReducerCounters from "./components/ContextReducerCounters";

export default function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <UnlinkedCounters />
        <PropsStateCounters />
        <PropsCustomHookCounters />
        <PropsReducerCounters />

        <StateProvider>
          <ContextStateCounters />
        </StateProvider>

        <CustomHookProvider>
          <ContextCustomHookCounters />
        </CustomHookProvider>

        <ReducerProvider>
          <ContextReducerCounters />
        </ReducerProvider>
      </Container>
    </>
  );
}
