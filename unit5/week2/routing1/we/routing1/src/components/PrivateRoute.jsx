import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect,Route } from "react-router-dom";

export const PrivateRoute = ({children,path,push}) => {
    const { token } = useContext(AuthContext);
    
    if (!token) {
        return <Redirect to='/login' push={push} />;
    }
    return <Route path ={ path }>{children}</Route>

}