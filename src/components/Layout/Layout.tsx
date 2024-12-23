import { VStack, HStack } from "@chakra-ui/react";
import SideNav from "../navbar/SideNav";
import MobileNavbar from "../navbar/MobileNavbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <HStack display="flex" background="background">
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
