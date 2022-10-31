import { iUserResponse } from "../../Pages/Dashboard";
import { Header, HeaderContainer } from "./style";

interface iUserResponseProps {
  userResponse: iUserResponse;
}

const Profile = ({ userResponse }: iUserResponseProps) => {
  return (
    <Header>
      <HeaderContainer>
        <h2>Olá, {userResponse.name} </h2>
        <span>{userResponse.course_module}</span>
      </HeaderContainer>
    </Header>
  );
};

export default Profile;
