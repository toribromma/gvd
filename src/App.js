import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import FocusLock from 'react-focus-lock';
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const menuId = "main-menu";
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
