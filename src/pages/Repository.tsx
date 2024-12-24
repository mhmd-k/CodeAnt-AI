import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { BsArrowRepeat } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { fakeRepos } from "@/data/repos";
import { Tag } from "@/components/ui/tag";
import { FaCircle } from "react-icons/fa6";
import { PiDatabaseLight } from "react-icons/pi";
import { bitToKB, formatUpdateTime } from "@/utils";
import { useState } from "react";
import { Repository as RepoType } from "@/types";

function Repository() {
  const [repos, setRepos] = useState<RepoType[]>(fakeRepos);

  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);

    if (e.target.value === "") {
      setRepos(fakeRepos);
      return;
    }

    const filteredRepos = repos.filter((repo) =>
      repo.name.includes(e.target.value.toLowerCase())
    );

    setRepos(filteredRepos);
  };

  return (
    <Box padding={{ base: "0", md: "24px" }} bg="#f5f5f5" minHeight="100dvh">
      <Box border="1px solid #e9eaeb" rounded={10} bg="white">
        <div className="page-header">
          <Box>
            <h1>Repositories</h1>
            <p>33 total repositories</p>
          </Box>
          <Box display="flex" gap="12px">
            <Button
              border="2px solid #e9eaeb"
              bg="white"
              color="#414651"
              fontSize="14px"
              fontWeight="normal"
              borderRadius="8px"
            >
              <BsArrowRepeat /> Refresh All
            </Button>
            <Button
              bg="var(--primary-color)"
              fontSize="14px"
              fontWeight="normal"
              borderRadius="8px"
              color="white"
            >
              <IoAddOutline /> Add Repository
            </Button>
          </Box>
        </div>
        <InputGroup
          flex="1"
          startElement={<IoIosSearch size={20} />}
          width="365px"
          maxWidth="100%"
          padding="0 24px 20px 24px"
        >
          <Input
            placeholder="Search Repositories"
            size="lg"
            border="2px solid #e9eaeb"
            rounded="8px"
            value={searchInput}
            onChange={handleInputChange}
          />
        </InputGroup>
        <div className="page-content">
          {repos.map((e) => (
            <Box
              key={e.id}
              transition="0.3s ease-in-out"
              padding="24px"
              _hover={{
                bg: "#f5f5f5",
              }}
              borderTop="2px solid #e9eaeb"
            >
              <Flex gap="8px" alignItems="center" marginBottom="12px">
                <Heading
                  width="fit-content"
                  display="inline-block"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight={500}
                >
                  {e.name}
                </Heading>
                <Tag
                  rounded="full"
                  color="#175CD3"
                  variant="subtle"
                  height="fit-content"
                  fontSize="14px"
                  bg="#eff8ff"
                  border="1px solid #b3ddfe"
                >
                  {e.privacy}
                </Tag>
              </Flex>
              <Flex gap="40px" fontSize="16px">
                <Text display="flex" gap="8px" alignItems="center">
                  {e.language}{" "}
                  <FaCircle size="8px" color="var(--primary-color)" />
                </Text>

                <Text display="flex" gap="8px" alignItems="center">
                  <PiDatabaseLight size="16px" /> {bitToKB(e.size)}
                </Text>

                <Text>{formatUpdateTime(e.lastTimeUpdated)}</Text>
              </Flex>
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default Repository;
