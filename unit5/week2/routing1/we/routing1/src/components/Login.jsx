import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
    const { handleToken } = useContext(AuthContext);
    const history = useHistory();
    return (
        <div>
            <h2>Login Here</h2>
            <input type="text" placeholder='Enter username' /><br>
            </br>
            <input type="password" placeholder='Enter password' /><br></br>
            <button onClick={() => { handleToken('1234'); history.push('/') }}>Submit</button>
        </div>
    )
}