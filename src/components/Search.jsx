import React from "react";
import { TextInput, Code, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "../style/NavbarSearch.module.css";

const Search = () => {
  return (
    <div className={classes.searchContainer}>
      <TextInput
        placeholder="Search"
        size="xs"
        rightSectionWidth={300}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        style={{ display: "flex", alignItems: "center" }}
        rightSectionProps={{
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 8, // Adjust padding as needed
          },
        }}
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
      />
    </div>
  );
};

export default Search;
