import React from "react";
import { useRef } from "react";

const UseRef = () => {

    const username = useRef();
    const password = useRef();

    const submit = (e) => {
        e.preventDefault();        
        console.log(username.current.value, password.current.value);
    }

    return(
        <>
        <form>
            <input type="text" id="username" ref={username}></input>
            <br/>
            <br/>
            <input type="passwrd" id="password" ref={password}></input>
            <br />
            <br/>
            <button onClick={submit}> Submit</button>
        </form>
        </>
    )
}

export default UseRef