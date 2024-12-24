import {
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Box,
  DrawerBody,
  DrawerHeader,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";

import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      justifyContent="space-between"
      width="100%"
      padding="16px"
      borderBottom="1px solid #f5f5f5"
    >
      <Link to="/">
        <Image src="/src/assets/logo.png" alt="logo" />
      </Link>
      <DrawerRoot placement="top">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton bg="var(--bg-color)">
            <CgMenu color="#181d27" />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent background="white" color="#414651">
          <DrawerHeader>
            <Image src="/src/assets/logo.png" alt="logo" width="161.5px" />
            <DrawerCloseTrigger
              backgroundColor="var(--bg-color)"
              color="#181D27"
              className="close-drawer"
            />
          </DrawerHeader>

          <DrawerBody>
            <NavMenu />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}

export default MobileNavbar;
