import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  console.log("Authenticated User : ", authUser);
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 max-w-5xl mx-auto my-5 text-white transition-all duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
          ></Route>
          <Route
            path="/explore"
            element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />}
          ></Route>
          <Route
            path="/likes"
            element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
          ></Route>
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
