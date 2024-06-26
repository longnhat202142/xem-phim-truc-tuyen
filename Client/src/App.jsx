import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import User from "./pages/account/Account";
import ChangePass from "./pages/PassChange/PassChange";
import SendEmail from "./pages/SendEmail/SendEmail";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {/* Exact chỉ định rằng route chỉ khớp 
        nếu đường dẫn URL trùng khớp chính xác 
        với đường dẫn được chỉ định*/}
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/account" element={<User />}></Route>
            <Route path="/changepass" element={<ChangePass />}></Route>
          </>
        )}
        {!user && <Route path="/send-email" element={<SendEmail />}></Route>}
      </Routes>
    </Router>
  );
};
export default App;
