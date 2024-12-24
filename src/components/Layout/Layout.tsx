import { VStack, HStack, Box, IconButton } from "@chakra-ui/react";
import SideNav from "../navbar/SideNav";
import MobileNavbar from "../navbar/MobileNavbar";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

function Layout() {
  return (
    <HStack
      display="flex"
      background="var(--bg-color)"
      color="var(--text-color)"
      gap={0}
      alignItems="start"
      minHeight="100dvh"
    >
      <Box
        width="242px"
        height="100dvh"
        display={{ base: "none", md: "block" }}
      >
        <SideNav />
      </Box>
      <VStack flex={1} gap={0}>
        <MobileNavbar />
        <main>
          <Outlet />
        </main>
      </VStack>

      <Link to="/login" className="login-link">
        <AiOutlineLogin /> Login
      </Link>
    </HStack>
  );
}

export default Layout;
