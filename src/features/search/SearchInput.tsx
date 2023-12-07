import { Box, Button, Card, Input, Text } from "@chakra-ui/react";
import { SuggestedCard } from "../../components/SuggestedFollow";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import { User } from "../../types/User";
import useFollow from "../follow/hook/useFollow";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchInput() {
  return (
    <Box>
      <SearchList />
    </Box>
  );
}

export function SearchList() {
  const auth = useSelector((state: RootState) => state.auth);
  const [filter, setFilter] = useState("");
  const { User } = useFollow();
  const filteredUsers = User?.filter((user) => user.id !== auth.id);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterButtonClick = () => {
    setIsFilterActive(true);
  };

  return (
    <Box>
      <Card
        w={{ base: "117%", md: "100%" }}
        p={6}
        bgColor={"#222"}
        boxShadow="lg"
        color={"white"}
        mt={24}
      >
        <Box
          position={"fixed"}
          w={{ base: "80%", md: "40%" }}
          top={{ base: 10, md: 0 }}
          left={{ base: 8, md: 80 }}
          bgColor={"#222"}
          zIndex={1000}
          pt={14}
        >
          <Text mb={6} fontWeight={"bold"} fontSize={"xl"}>
            Search
          </Text>
          <Box
            w={{ base: "111%", md: "100%" }}
            ml={{ base: -2, md: 0 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search"
              size="sm"
              border={"none"}
              mt={2}
              borderBottom={"1px solid gray"}
              w={"90%"}
              focusBorderColor="#222"
            />
            <Button
              onClick={handleFilterButtonClick}
              colorScheme="green"
              size={"sm"}
              mt={2}
            >
              <AiOutlineSearch />
            </Button>
          </Box>
        </Box>
        <Box className="follow" w="100%" h="screen" mt={10}>
          {isFilterActive &&
            filteredUsers
              ?.filter(
                (user) =>
                  user &&
                  (user.full_name?.toLowerCase().includes(filter) ||
                    user.username?.toLowerCase().includes(filter))
              )
              .map((item: User) => (
                <SuggestedCard
                  key={item.id}
                  id={item.id}
                  full_name={item.full_name}
                  username={item.username}
                />
              ))}
        </Box>
      </Card>
    </Box>
  );
}
