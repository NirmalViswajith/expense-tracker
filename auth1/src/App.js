import { useContext } from "react";
import AuthContext from "./Components/ContextStore/ContextProvider";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import Userprofile from "./Components/Profile/Userprof";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./Components/ContextStore/ContextProvider";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          {!ctx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          {ctx.isLoggedIn && <Route path="/profile" element={<Userprofile />} />}
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
