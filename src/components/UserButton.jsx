import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../style/UserButton.module.css";

export function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500} pl={"xl"}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs" pl={"xl"}>
            hspoonlicker@outlook.com
          </Text>
        </div>

        <IconChevronDown
          style={{ width: rem(16), height: rem(16) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}
