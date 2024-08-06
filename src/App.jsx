import "@mantine/core/styles.css";
import { Flex, Text } from "@mantine/core";
import { useState } from "react";
import { AppShell, Burger } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { NavbarNested } from "./components/NavbarNested";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LanguageOptions from "./components/LanguageOptions";
import { IconBrandVscode } from "@tabler/icons-react";
function App() {
  const [collapsed, setCollapsed] = useState(false);

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
            <Flex justify="space-between" align="center" direction="row" mt={5}>
              <Flex align="center">
                <Burger
                  opened={!collapsed}
                  onClick={() => setCollapsed(!collapsed)} // Toggle collapsed state
                  size="sm"
                  className="burger-icon" // Add a class name
                />
                <Text ml="xs" size="xl">
                  DevPad
                </Text>
              </Flex>
              <IconBrandVscode size={50} style={{ marginRight: "10px" }} />
            </Flex>
          </AppShell.Header>

          <AppShell.Navbar>
            <NavbarNested />
          </AppShell.Navbar>
          <AppShell.Main>
            <Routes>
              <Route
                path="/code-editor"
                element={<LanguageOptions collapsed={collapsed} />}
              />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}

export default App;
