import { Image, Box } from "@chakra-ui/react";
import NavMenu from "./NavMenu";

function SideNav() {
  return (
    <Box className="sidenav" display={{ base: "none", md: "flex" }}>
      <Image src="/src/assets/logo.png" alt="logo" width="161.5px" />

      <NavMenu />
    </Box>
  );
}

export default SideNav;
