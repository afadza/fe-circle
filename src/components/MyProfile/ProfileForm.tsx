import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useUpdateProfile } from "./hook/useUpdateProfile";

export default function ProfileForm() {
  const {
    profile,
    mutate,
    isPending,
    handleChange,
  } = useUpdateProfile();
  const shouldDisplaySidebar = useBreakpointValue({ base: false, md: true });

  return (
    <Box w={{ base: "115%", md: "100%" }}>
      <Box>
        <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
          Your Profile
        </Text>
      </Box>

      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault(), mutate();
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={6}>
            <FormControl>
              <FormLabel>Your name</FormLabel>
              <Input
                placeholder="full name"
                value={profile.full_name}
                name="full_name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel display={"flex"} alignItems={"center"}>
                <FormLabel>Username</FormLabel>
                <FormLabel color={"red"} fontSize={"xs"} fontWeight={"thin"}>
                  *<span style={{ color: "white" }}>without space.</span>
                </FormLabel>
              </FormLabel>
              <Input
                placeholder="username"
                value={profile.username}
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                value={profile.email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Input
                placeholder="bio"
                value={profile.bio}
                name="bio"
                onChange={handleChange}
              />
            </FormControl>
            {shouldDisplaySidebar ? (
              <Button colorScheme="green" type="submit" isLoading={isPending}>
                Edit Profile
              </Button>
            ) : (
              <Button colorScheme="green" type="submit" isLoading={isPending}>
                Edit Profile
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
}
