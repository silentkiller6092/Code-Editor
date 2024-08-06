import { ScrollArea } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconGauge } from "@tabler/icons-react";
import { LinksGroup } from "./NavbarLinksGroup";
import classes from "../Style/NavbarNested.module.css";

const mockdata = [
  { label: "Overview", icon: IconGauge, link: "/" },
  { label: "Code Editor", icon: IconGauge, link: "/code-editor" },
];

export function NavbarNested() {
  const links = mockdata.map((item, index) => {
    const linkComponent = <LinksGroup {...item} key={item.label} />;

    return item.link ? (
      <Link to={item.link} key={index} className={classes.linksInner}>
        {linkComponent}
      </Link>
    ) : (
      linkComponent
    );
  });

  return (
    <ScrollArea className={classes.links} scrollbarSize={2}>
      {links}
    </ScrollArea>
  );
}
