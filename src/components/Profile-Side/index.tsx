import {
  Card,
  CardBody,
  Image,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import SuggestedFollow from "../SuggestedFollow/index";
import Footer from "../Footer/index";
import { Link } from "react-router-dom";
import { useThreads } from "../../features/threads/hooks/useThreads";
import { useEffect } from "react";

export default function ProfileSide() {
  const auth = useSelector((state: RootState) => state.auth);
  const shouldDisplaySidebar = useBreakpointValue({ base: false, md: true });
  const { Threads } = useThreads();

  const userThreads = Threads?.filter(
    (thread) => thread.createdById?.id === auth?.id
  );

  const username = auth?.username?.replace(/\s/g, "");

  useEffect(() => {}, [Threads]);
  return (
    <Box w={{ base: "115%", md: "100%" }} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'90%'}>
      <Card w={"full"} bgColor={"#222"} boxShadow="lg" color={"white"}>
        <CardBody w={"full"}>
          <Box h="100px" w="100%" position="relative">
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
              @{username}
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
      {shouldDisplaySidebar ? (
        <Box height={"50%"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
          <SuggestedFollow />
          <Footer />
        </Box>
      ) : (
        <Box />
      )}
    </Box>
  );
}
