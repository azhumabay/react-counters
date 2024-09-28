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
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <>
      <AppHeader theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <UnlinkedCounters theme={theme} />
        <PropsStateCounters theme={theme} />
        <PropsCustomHookCounters theme={theme} />
        <PropsReducerCounters theme={theme} />

        <StateProvider>
          <ContextStateCounters theme={theme} />
        </StateProvider>

        <CustomHookProvider>
          <ContextCustomHookCounters theme={theme} />
        </CustomHookProvider>

        <ReducerProvider>
          <ContextReducerCounters theme={theme} />
        </ReducerProvider>
      </Container>
    </>
  );
}
