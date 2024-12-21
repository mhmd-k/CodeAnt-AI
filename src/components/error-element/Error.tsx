import { VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main>
      <VStack
        gap={8}
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="200px"
        margin="auto"
      >
        <Text fontSize="25px" fontWeight="bold">
          Page not found
        </Text>
        <Link className="sidenav-link active-link" to="/">
          Return to home page
        </Link>
      </VStack>
    </main>
  );
}

export default Error;
