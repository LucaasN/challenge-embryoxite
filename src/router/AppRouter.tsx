import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutChallenge } from "../pages/AboutChallenge";

export const AppRouter = () => {
  return (
    <>
        <Routes>
             <Route path="/home" element={<HomePage />} /> 
             <Route path="/*" element={<HomePage />} /> 
             <Route path="/about" element={<AboutChallenge />} /> 
        </Routes>
    </>
  )
}