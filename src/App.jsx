import "@mantine/core/styles.css";
import { Flex, Text } from "@mantine/core";
import { useState } from "react";
import { AppShell, Burger } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { NavbarNested } from "./components/NavbarNested";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import LanguageOptions from "./components/LanguageOptions";

function App() {
  const [collapsed, setCollapsed] = useState(false); // Manage collapsed state manually

  return (
    <MantineProvider defaultColorScheme="dark">
      <Router>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 220,
            breakpoint: "sm",
            collapsed: {
              desktop: collapsed,
              mobile: false,
            },
          }}
          padding="md"
        >
          <AppShell.Header className="headerComponent">
            <Flex justify="center" align="center" direction="row">
              <Burger
                opened={!collapsed}
                onClick={() => setCollapsed(!collapsed)} // Toggle collapsed state
                size="sm"
                className="burger-icon" // Add a class name
              />
              <Text ml="xs" size="xl">
                SIEM Solution
              </Text>
            </Flex>
            <div>
              <Header />
            </div>
          </AppShell.Header>

          <AppShell.Navbar>
            <NavbarNested />
          </AppShell.Navbar>
          <AppShell.Main>
            <Routes>
              <Route path="/log" element={<LanguageOptions />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}

export default App;
