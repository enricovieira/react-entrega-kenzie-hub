const Profile = ({ userResponse }) => {
  return (
    <div>
      <h2>Olá, {userResponse.name} </h2>
      <span>{userResponse.course_module}</span>
    </div>
  );
};

export default Profile;
