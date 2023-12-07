import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Card,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRegister } from "./hooks/useRegister";
import { Link } from "react-router-dom";

export default function RegisterCard() {
  const { handleChange, handleRegister } = useRegister();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box
      w={{ base: "100%", md: "40%" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      my={"auto"}
    >
      <Card w={"full"} p={10} bgColor={"#222"} boxShadow="xl" color={"white"}>
        <Box
          w={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={8}
        >
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Register
          </Text>
        </Box>

        <Input
          variant="outline"
          placeholder="Full name"
          mb={4}
          onChange={handleChange}
          name="full_name"
        />
        <Input
          variant="outline"
          placeholder="Username"
          mb={4}
          onChange={handleChange}
          name="username"
        />
        <Input
          variant="outline"
          placeholder="Email"
          mb={4}
          onChange={handleChange}
          name="email"
        />
        <InputGroup size="md" mb={4}>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box display={"flex"} alignItems={"center"} mb={4}>
          <Text>Don't have an account?</Text>
          <Link to="/login">
            <Button color={"green.200"} colorScheme="transparent">
              Login
            </Button>
          </Link>
        </Box>
          <Button colorScheme="green" onClick={handleRegister}>
            Regsister
          </Button>
      </Card>
    </Box>
  );
}
