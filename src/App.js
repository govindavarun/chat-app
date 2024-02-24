import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from "./Components/Chat";
const style = {
  appContainer: `max-w-[700px] mx-auto text-center `,
  sectionContainer: `flex flex-col  bg-gray-100 mt-5 shadow-xl border relative`,
};

function App() {
  const [user]=useAuthState(auth);
  return (
   <div className={style.appContainer}>
    <section className={style.sectionContainer}></section>
    <Navbar/>
    
    <Chat/>
   </div>
  );
}

export default App;
