import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.module.scss";

import Navbar from "./Components/Main/Navbar";

// Routes Import Start
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import CreatePost from "./Routes/CreatePost";
// Routes Import End

// Dynamic Routes Import Start
import PostSingle from "./Dynamic-Routes/PostSingle";
// Dynamic Routes Import End

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"Login"} element={<Login setIsAuth={setIsAuth} />} />
          <Route path={"CreatePost"} element={<CreatePost isAuth={isAuth} />} />
          <Route path={"*"} element={<Error />} />

          {/* Dynamic Routes */}
          <Route path={"/Post/:id"} element={<PostSingle />} />
          {/* Dynamic Routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
