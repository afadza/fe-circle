import {
  Card,
  CardBody,
  Image,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import { Link } from "react-router-dom";
import ThreadCard from "../../features/threads/component/ThreadCard";
import { IThreadCard } from "../../types/Threads";
import { useThreads } from "../../features/threads/hooks/useThreads";
import { useEffect } from "react";

export default function MyProfile() {
  const auth = useSelector((state: RootState) => state.auth);
  const { Threads } = useThreads();

  const usernameUser = auth?.username?.replace(/\s/g, "");

  const userThreads = Threads?.filter(
    (thread) => thread.createdById?.id === auth?.id
  );

  useEffect(() => {}, [Threads]);
  return (
    <Box w={{ base: "115%", md: "100%" }}>
      <Card w={"full"} bgColor={"#222"} boxShadow="lg" color={"white"}>
        <CardBody w={"full"}>
          <Box h="100px" w={{ base: "115%", md: "100%" }} left={{ base: -6, md: 0 }} position="relative">
            <Box position="absolute" top="50px" left="20px">
              <Avatar
                name={auth?.full_name}
                border="8px solid #222"
                size="xl"
              />
            </Box>
            <Image
              src="https://i.pinimg.com/564x/51/1b/79/511b792b68e7c7f14e3f14c92e2a4543.jpg"
              objectFit={"cover"}
              borderRadius="lg"
              h="100%"
              w="100%"
            />
          </Box>
          <Box
            w="100%"
            display={"flex"}
            alignItems={"end"}
            justifyContent={"end"}
            mt={2}
            mb={4}
          >
            <Link to="/edit-profile">
              <Button
                colorScheme="teel"
                variant="outline"
                size="xs"
                style={{ borderRadius: "1100px" }}
              >
                Edit Profile
              </Button>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight={"bold"}>
              🙏 {auth?.full_name}
            </Text>
            <Text fontSize="xs" color="gray.400">
              @{usernameUser}
            </Text>
            <Text fontSize="xs">{auth?.bio}</Text>
            <Flex gap={6} mt={4}>
              <Flex gap={1}>
                <Text fontSize="xs" fontWeight={"bold"}>
                  {userThreads?.length}
                </Text>
                <Text fontSize="xs"> Threads</Text>
              </Flex>
              <Flex gap={1}>
                <Text fontSize="xs" fontWeight={"bold"}>
                  {auth?.following?.length}
                </Text>
                <Text fontSize="xs"> Following</Text>
              </Flex>
              <Flex gap={1}>
                <Text fontSize="xs" fontWeight={"bold"}>
                  {auth?.followers?.length}
                </Text>
                <Text fontSize="xs"> Followers</Text>
              </Flex>
            </Flex>
          </Box>
        </CardBody>
      </Card>
      <Box marginTop={10} width={{ base: "87%", md: "100%" }}>
        <Box>
          <Text fontSize="xl" fontWeight={"bold"}>
            Your threads
          </Text>
          <Text fontSize="xs" color="gray.400">
            {userThreads?.length} Threads
          </Text>
        </Box>
        {userThreads?.map((item: IThreadCard) => (
          <ThreadCard
            key={item.id}
            id={item.id}
            full_name={item.createdById?.full_name}
            username={usernameUser}
            created_at={item.created_at}
            content={item.content}
            image={item.image}
            replies={item.replies}
            likes={item.likes}
          />
        ))}
      </Box>
    </Box>
  );
}
