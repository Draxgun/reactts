import React, { useState } from "react";
import { login,logout } from "../store";
import { useDispatch,useSelector} from "react-redux";
import '../App.css';

export const Login = () => {
    const [newUsername, setNewUsername] = useState<string>("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
    
    return (
        <div>
            <h1>{username}</h1>
            <div className="login">
                <input type="text" onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewUsername(e.target.value);
                    }
                }/>

                <button onClick={() => dispatch(login({username : newUsername}))}>Submit Login</button>
                <button onClick={() => dispatch(logout())} >Log Out</button>
            </div>
        </div>

    )
}