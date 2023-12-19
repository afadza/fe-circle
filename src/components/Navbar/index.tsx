import { Box, List, ListItem, ListIcon, Text, Button } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { AUTH_LOGOUT } from "../../store/RootReducer";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(AUTH_LOGOUT());
  }

  return (
    <Box
      h={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        <Box mb={4}>
          <Text fontSize="5xl" color="green.400" as="b">
            Circle
          </Text>
        </Box>

        <List alignItems={"center"}>
          <Link to="/">
            <ListItem
              display={"flex"}
              alignItems={"center"}
              p={4}
              _hover={{ boxShadow: "xl" }}
              cursor={"pointer"}
            >
              <ListIcon as={RiHome7Fill} />
              <Text>Home</Text>
            </ListItem>
          </Link>
          <Link to="/search">
            <ListItem
              display={"flex"}
              alignItems={"center"}
              p={4}
              _hover={{ boxShadow: "xl" }}
              cursor={"pointer"}
            >
              <ListIcon as={FaSearch} />
              <Text>Search</Text>
            </ListItem>
          </Link>

          <Link to="/follow">
            <ListItem
              display={"flex"}
              alignItems={"center"}
              p={4}
              _hover={{ boxShadow: "xl" }}
              cursor={"pointer"}
            >
              <ListIcon as={RiUserFollowLine} />
              <Text>Follow</Text>
            </ListItem>
          </Link>
          <Link to="/profile">
            <ListItem
              display={"flex"}
              alignItems={"center"}
              p={4}
              _hover={{ boxShadow: "xl" }}
              cursor={"pointer"}
            >
              <ListIcon as={CgProfile} />
              <Text>Profile</Text>
            </ListItem>
          </Link>
        </List>

        <Button
          colorScheme="green"
          w="80%"
          mt={6}
          style={{ borderRadius: "50px" }}
        >
          Create Post
        </Button>
      </Box>

      <Box>
        <Button
          gap={2}
          colorScheme="red"
          w="80%"
          mt={6}
          style={{ borderRadius: "50px" }}
          onClick={() => {
            handleLogout();
            navigate("/");
          }}
        >
          Logout
          <FiLogOut />
        </Button>
      </Box>
    </Box>
  );
}

export function NavbarMobile() {
  return (
    <List
      display={"flex"}
      flexDirection={"row"}
      gap={4}
      top={0}
      left={0}
      p={6}
      justifyContent={"space-between"}
      width={"100%"}
      height={"10%"}
      backgroundColor={"#222"}
      zIndex={1000000}
      position={"fixed"}
    >
      <Link to="/">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={RiHome7Fill} />
        </ListItem>
      </Link>
      <Link to="/search">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={FaSearch} />
        </ListItem>
      </Link>
      <Link to="/follow">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={RiUserFollowLine} />
        </ListItem>
      </Link>
      <Link to="/profile">
        <ListItem
          display={"flex"}
          alignItems={"center"}
          p={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ boxShadow: "xl" }}
          cursor={"pointer"}
        >
          <ListIcon as={CgProfile} />
        </ListItem>
      </Link>
    </List>
  );
}
