import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Comps&styles/components/Feed/Feed";
import Header from "./Comps&styles/components/Header/Header";
import Login from "./Comps&styles/components/Login/Login";
import SideBar from "./Comps&styles/components/SideBar/SideBar";
import Widgets from "./Comps&styles/components/Widgets/Widgets";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? ( // if user not logged in, render login/register page
        <Login />
      ) : (
        //  else render page
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
      {/*  */}
    </div>
  );
}

export default App;
