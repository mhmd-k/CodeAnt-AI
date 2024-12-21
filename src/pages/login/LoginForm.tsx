import { Box, Flex, Heading, Image } from "@chakra-ui/react";

function LoginForm() {
  return (
    <Box
      padding="0 24px"
      backgroundColor="var(--main-bg-color)"
      height="100%"
      flex={1}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Image src="/src/assets/logo.png" />
        <Heading fontSize="32px" fontWeight="semibold">
          Welcome to CodeAnt AI
        </Heading>
      </Flex>
    </Box>
  );
}

export default LoginForm;
