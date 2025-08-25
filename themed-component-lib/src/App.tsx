import { ThemeProvider } from "styled-components";
import "./App.css";
import { useState } from "react";
import { Button, Card, ModalOverlay, NavBar } from "./components";
import { darkTheme, GlobalStyle, lightTheme } from "./theme";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div>
          <NavBar>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
            </ul>
          </NavBar>
        </div>

        <div
          style={{
            marginTop: 10,
            gap: 10,
            display: "flex",
            justifyContent: "flex-start",
            margin: 20,
          }}
        >
          <Button onClick={toggleTheme}>Change Theme</Button>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        </div>
        <div>
          <Card>
            <h1>card created by using styled components</h1>
          </Card>
        </div>
        <div>
          <ModalOverlay
            isClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
          ></ModalOverlay>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
