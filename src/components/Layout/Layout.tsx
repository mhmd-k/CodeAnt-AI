import { VStack, HStack } from "@chakra-ui/react";
import SideNav from "../navbar/sidenav/SideNav";
import MobileNavbar from "../navbar/sidenav/MobileNavbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <HStack display="flex">
      <SideNav />
      <VStack flex={1} gap={0}>
        <MobileNavbar />
        <main>
          <Outlet />
        </main>
      </VStack>
    </HStack>
  );
}

export default Layout;
