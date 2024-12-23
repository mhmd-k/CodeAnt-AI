import { Box, Flex, Heading, Image, Tabs } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function LoginForm() {
  return (
    <Box
      backgroundColor="colors.primary"
      rounded={10}
      border="1px solid #e9eaec"
      margin="auto"
      bg="white"
      width="100%"
      maxWidth="670px"
      minHeight="600px"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding="36px 24px"
        paddingBottom={0}
      >
        <Image src="/src/assets/logo.png" width="200px" />
        <Heading fontSize="32px" fontWeight="semibold" marginTop="36px">
          Welcome to CodeAnt AI
        </Heading>
      </Flex>

      <Tabs.Root defaultValue="SASS">
        <Tabs.List
          borderBottom="1px solid #e9eaec"
          padding="36px 24px"
          paddingTop="20px"
        >
          <Tabs.Trigger
            value="SASS"
            className="login-tab-btn"
            _selected={{
              bg: "blue.500",
              color: "white",
            }}
          >
            SASS
          </Tabs.Trigger>
          <Tabs.Trigger
            value="self-hosted"
            className="login-tab-btn"
            _selected={{
              bg: "blue.500",
              color: "white",
            }}
          >
            Self Hosted
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="SASS">
          <Flex
            direction="column"
            alignItems="center"
            padding="24px"
            gap="16px"
          >
            <button className="login-btn">
              <FaGithub /> Sign in with Github
            </button>
            <button className="login-btn">
              <Image src="/src/assets/bitbucket-icon.png" /> Sign in with
              Bitbucket
            </button>
            <button className="login-btn">
              <Image src="/src/assets/azur-Icon.png" /> Sign in with Azure
              Devops
            </button>
            <button className="login-btn">
              <Image src="/src/assets/gitlab.png" /> Sign in with GitLab
            </button>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="self-hosted">
          <Flex
            direction="column"
            alignItems="center"
            padding="24px"
            gap="16px"
          >
            <button className="login-btn">
              <Image src="/src/assets/gitlab.png" /> Self Hosted GitLab
            </button>
            <button className="login-btn">
              <Image src="/src/assets/key-icon.png" /> Sign in with SSO
            </button>
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}

export default LoginForm;
