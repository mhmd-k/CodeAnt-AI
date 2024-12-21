import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FaArrowUpLong } from "react-icons/fa6";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      height="100dvh"
      backgroundColor="var(--main-light-color)"
    >
      <Box
        display={{ base: "none", lg: "flex" }}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Image
          src="/src/assets/Subtract.png"
          position="absolute"
          left="0"
          bottom="0"
          width={284}
        />

        <Box height={320} width={470} position="relative">
          <Box
            boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
            rounded="24px"
            backgroundColor="var(--main-light-color)"
            width={445}
          >
            <Flex
              alignItems="center"
              gap={3}
              padding={5}
              borderBottom="1px solid #E6E8F0"
            >
              <Image src="/src/assets/logo-small.png" />
              <Text color="#081735" fontWeight="bold">
                AI to Detect & Autofix Bad Code
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              gap="45px"
              padding="30px 20px"
              textAlign="center"
            >
              <Box>
                <Text fontSize="18px" fontWeight="bold">
                  30+
                </Text>
                <Text fontSize="14px">Language Support</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="18px">
                  10k+
                </Text>
                <Text fontSize="14px">Developers</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="18px">
                  100k+
                </Text>
                <Text fontSize="14px">Hours Saved</Text>
              </Box>
            </Flex>
          </Box>

          <Box
            rounded={24}
            width={265}
            height={165}
            backgroundColor="var(--main-light-color)"
            position="absolute"
            right={0}
            boxShadow="0 0 24px 0 rgb(8 ,23 ,53, 16%)"
            padding="26px 32px"
          >
            <Flex justifyContent="space-between" marginBottom="20px">
              <Box
                rounded={"50%"}
                backgroundColor="#E6E3FE"
                width={45}
                height={45}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image src="/src/assets/ant-design_pie-chart-filled.png" />
              </Box>
              <Box>
                <Text
                  color="#0049C6"
                  fontSize={14}
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  gap="7px"
                >
                  <FaArrowUpLong /> 14%
                </Text>
                <Text>This week</Text>
              </Box>
            </Flex>

            <Text fontWeight="bold" fontSize={14}>
              Issues Fixed
            </Text>
            <Text fontWeight="bold" fontSize={32}>
              500k+
            </Text>
          </Box>
        </Box>
      </Box>

      <div>
        <LoginForm />
      </div>
    </Grid>
  );
}

export default Login;
