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
      borderBottom="1px solid gray"
    >
      <Link to="/">
        <Image src="/src/assets/logo.png" alt="logo" objectFit="none" />
      </Link>
      <DrawerRoot placement="top">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton bg="Background">
            <CgMenu color="text" />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent backgroundColor="background">
          <DrawerHeader>
            <Image src="/src/assets/logo.png" alt="logo" width="161.5px" />
            <DrawerCloseTrigger
              backgroundColor="background"
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
