import GlobalStyle from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage";
import { RequisitionsProvider } from "./contexts/RequisitionsContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <RequisitionsProvider>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </RequisitionsProvider>
    </>
  );
}

export default App;
