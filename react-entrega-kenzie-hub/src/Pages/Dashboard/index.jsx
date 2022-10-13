import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Profile from "../../components/Profile";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userResponse, setUserResponse] = useState({});
  const user = window.localStorage.getItem("authToken");

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: {
          authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        setUserResponse(res.data);
      });
  }, []);

  return (
    <>
      {user ? (
        <>
          <header>
            <h1>dashboard</h1> <button onClick={logout}>Sair</button>
          </header>
          <main>{<Profile userResponse={userResponse} />}</main>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Dashboard;
