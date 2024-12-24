import { Image, Box } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <Box
      className="sidenav"
      display={{ base: "none", md: "flex" }}
      bg="var(--bg-color)"
    >
      <Link to="/">
        <Image src="/src/assets/logo.png" alt="logo" width="161.5px" />
      </Link>

      <NavMenu />
    </Box>
  );
}

export default SideNav;
