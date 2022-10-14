import { Header, HeaderContainer } from "./style";

const Profile = ({ userResponse }) => {
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
