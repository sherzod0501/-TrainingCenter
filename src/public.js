import { Routes, Route } from "react-router-dom";
import { Kurslar } from "./Pages";

import { Login } from "./Pages";
// import { SignUp } from "./Pages";

export const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kurslar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <h1>Public</h1>
    </>
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <>
    //         Home in Public <Link to="/login">to Login</Link>
    //       </>
    //     }
    //   />
    // {
    /* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */
    // }
    // </Routes>
  );
};
