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

function MobileNavbar() {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      justifyContent="space-between"
      width="100%"
      padding="16px"
      borderBottom="1px solid gray"
    >
      <Image src="/src/assets/logo.png" alt="logo" objectFit="none" />
      <DrawerRoot placement="top">
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton>
            <CgMenu />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent backgroundColor="var(--main-bg-color)">
          <DrawerHeader>
            <Image src="/src/assets/logo.png" alt="logo" width="161.5px" />
            <DrawerCloseTrigger
              backgroundColor="unset"
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
