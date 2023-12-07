import { Card, Flex, Box, Text, Avatar, Image, HStack } from "@chakra-ui/react";
import { BiChat } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { RepliesCard } from "../../../types/Replies";
import { likes } from "../../../types/Threads";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../../../libs/api";
import { RootState } from "../../../store/type/RootState";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "../../../store/RootReducer";

interface IThreadProps {
  id?: number;
  created_at?: string;
  content?: string;
  image?: string;
  replies?: RepliesCard[];
  full_name?: string;
  username?: string;
  likes?: likes[];
}

export default function ThreadCard(props: IThreadProps) {
  const {
    username,
    full_name,
    created_at,
    content,
    image,
    replies,
    likes,
    id,
  } = props;
  const dispatch = useDispatch();

  const auth = useSelector((state: RootState) => state.auth);
  const [likeId, setLikeId] = useState({
    threadId: id,
    userId: auth.id,
  });

  const queryClient = useQueryClient();

  const { mutate: handleLike } = useMutation({
    mutationFn: () => {
      return API.post(`/like`, likeId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["thread"] });
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data.user));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleClick() {
    setLikeId({ threadId: id, userId: auth.id });
    handleLike();
  }

  return (
    <Box w={{ base: "110%", md: "95%" }}>
      <Box key={id} w={"full"}>
        <Card
          w={"105%"}
          mb={2}
          p={{ base: 4, md: 6 }}
          paddingTop={6}
          paddingBottom={6}
          bgColor={"#222"}
          boxShadow="xl"
          color={"white"}
        >
          <Flex w={"full"}>
            <Avatar name={full_name} size={{ base: "sm", md: "md" }} />
            <Box ml={4}>
              <Text fontSize="xs" mr={2} fontWeight="bold">
                {full_name}
              </Text>
              <Flex>
                <Text fontSize="xs" mr={2} color="gray.400">
                  @{username}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  • {created_at}
                </Text>
              </Flex>
              <Text fontSize="xs" mt={4}>
                {content}
              </Text>
              {image && (
                <Box h={"200px"} w={"250px"} mt={4}>
                  <Image
                    src={image}
                    h={"full"}
                    w={"full"}
                    objectFit={"cover"}
                    style={{ borderRadius: "5px" }}
                  />
                </Box>
              )}
              <Box alignItems="center" mt={4}>
                <Flex mt={6}>
                  <HStack onClick={handleClick} cursor={"pointer"}>
                    {likes?.map((like) => like.userId.id).includes(auth.id) ? (
                      <AiFillHeart color="red" />
                    ) : (
                      <BsHeart />
                    )}
                    <Text fontSize="xs">{likes?.length}</Text>
                  </HStack>
                  <Link to={`/thread/${id}`}>
                    <Flex alignItems="center" ml={6}>
                      <BiChat mt={1} />
                      <Text fontSize="xs" ml={2}>
                        {replies?.length} Replies
                      </Text>
                    </Flex>
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
}
