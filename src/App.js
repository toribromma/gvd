import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import {
  Burger,
  Information,
  Menu,
  FlexContainer,
  Sidebar,
} from "./components";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Development,
  Joint,
  PropertyManagementAndLeasing,
  Contact,
  Properties,
  Dunia,
} from "./pages";
import FocusLock from "react-focus-lock";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const menuId = "main-menu";
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Information />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <Switch>
          <FlexContainer>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/development">
              <Development />
            </Route>
            <Route path="/acquisition">
              <Joint />
            </Route>
            <Route path="/properties">
              <Properties />
            </Route>
            <Route path="/propertymanagementandleasing">
              <PropertyManagementAndLeasing />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/dunia">
              <Dunia />
            </Route>
            <Sidebar>
              <h1>Dunia Plaza</h1>
              <p>
                Our Dunia Plaza project in Victorville, California, is a
                master-planned mixed retail development emphasizing restaurants,
                hospitality and power retailers. <a href="/dunia">More...</a>
              </p>
              <h1>Ponderay, Idaho</h1>
              <p>
                GVD is developing in Ponderay, Idaho the northeast corner of
                Highway 95 and Kootenai Cutoff Road, and the northwest corner of
                Highway 95 and Schweitzer Cutoff Road, which are directly across
                the street from one another. <a href="/ponderay">More...</a>
              </p>
            </Sidebar>
          </FlexContainer>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
