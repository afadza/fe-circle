import { useBreakpointValue } from "@chakra-ui/react";
import ProfileForm from "../../components/MyProfile/ProfileForm";
import Main from "../../layout/Main";
import MyProfile from "../../components/MyProfile/index";
export default function ProfilePage() {
  const shouldDisplaySidebar = useBreakpointValue({ base: false, md: true });

  return (
    <Main>
      <MyProfile />
    </Main>
  );
}
