import {  Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import Home from "./Home"; 
import ForgotPassword from "./ForgotPassword";

function PasswordLoginWithFirebase(){
    return(
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
    )
}
export default PasswordLoginWithFirebase;