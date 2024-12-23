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
        maxWidth="300px"
        margin="auto"
      >
        <Text fontSize="25px" fontWeight="bold">
          Somethng went wrong!
        </Text>
        <Link
          className="sidenav-link active-link"
          to="/"
          style={{ width: "fit-content" }}
        >
          Return to home page
        </Link>
      </VStack>
    </main>
  );
}

export default Error;
