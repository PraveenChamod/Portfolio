import "./App.css";
import React from "react";
import BackgroundAnimation from "./common/components/BackgroundAnimation";
import NavBar from "./common/components/NavBar";
import Page from "./features/page";

function App() {
  return (
    <React.Fragment>
      <div className="h-full text-[#ffffff]">
        <BackgroundAnimation />
        <div className="relative z-10 flex flex-col h-full">
          <NavBar />
          <Page />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
