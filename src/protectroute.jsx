import { Navigate } from "react-router-dom";

export const ProtectRoute = ({children}) => {
    
    const user = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if(!user){
        return <Navigate to="/User/SignUp" replace />;
    }
    if(role !== "admin"){
        return <Navigate to="/" replace />;
    }
    return children;
}