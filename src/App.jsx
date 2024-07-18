import React from "react";
import "./global.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

const App = () => {
  const navBarVal = ["Home", "About", "Services", "Projects", "Content"];
  const socials = [
    "/Facebook.svg",
    "/Instagram.svg",
    "/Linkdin.svg",
    "/Twitter.svg",
    "/WhatsApp.svg",
  ];
  const BtnContent = "Download CV";
  const profilePic = "/Profile.png";
  const Languages = [
    {
      langImageSrc: "/JavaScript.png",
      lang: "java Script",
    },
    {
      langImageSrc: "/React.png",
      lang: "React",
    },
    {
      langImageSrc: "/Angular.png",
      lang: "Angular js",
    },
    {
      langImageSrc: "/Vue.png",
      lang: "Vue js",
    },
  ];

  const [mode, setMode] = useState(false);

  const toggleModeHandler = () => {
    setMode((prev) => !prev);
    console.log(mode);
  };

  // amaze gaviwede cota, ver mivxvdi tavidan bodyze rogor mimeniwebina klasi
  if (mode) {
    document.body.classList.add("bodyLight");
  } else {
    document.body.classList.remove("bodyLight");
  }

  return (
    <>
      <Header
        navBarVal={navBarVal}
        Mode={mode}
        toggleFunc={toggleModeHandler}
      />
      <Main
        socials={socials}
        BtnContent={BtnContent}
        profilePic={profilePic}
        Languages={Languages}
        Mode={mode}
      />
    </>
  );
};

export default App;
