import React from "react";
import "./App.css";
import Header from "./Comps&styles/components/Header/Header";
import SideBar from "./Comps&styles/components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* <AppBody> */}
      <div className="app__body">
        <SideBar />
        {/* <Feed /> */}
        {/* <Widgets /> */}
      </div>
      {/* </AppBody> */}
    </div>
  );
}

export default App;
