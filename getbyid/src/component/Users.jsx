import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);        
    };
    useEffect(() => {
        getUsers();
    },[]);

    console.log(data);
    const getId = (user) =>{
        // navigate(`/${id}`);
        navigate(`/${user.id}`, {
            state: { user: user }
        });
        console.log("Selected id", id);        
    }
    return (
        <>
        <h2> Users list</h2>
        <p>Select an user</p>
        <ul>
            {data.map((user) => {
               return <li key={user.id} onClick={() => getId(user)}>{user.name}</li>
            })}
        </ul>
        </>
    );
}
export default Users;