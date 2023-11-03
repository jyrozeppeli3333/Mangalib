import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Favourites from "../pages/Favourites";
import StoryBan from "../pages/StoryBan";
import MyComments from "../pages/MyComments";
import MyProfile from "../pages/MyProfile";
import CreateTitle from "../pages/CreateTitle";
import Signup from "../pages/Signup";
import Notifications from "../pages/Notifications";
import Login from "../pages/Login";
import SocilaLib from "../pages/SocilaLib";

const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<Favourites />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/storyban" element={<StoryBan />} />
      <Route path="/mycomment" element={<MyComments />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/createtitle" element={<CreateTitle />} />
      <Route path="/sociallib" element={<SocilaLib />} />
      
      <Route path="/loginuser" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RouteProvider;
