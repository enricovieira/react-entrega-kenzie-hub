import GlobalStyle from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
