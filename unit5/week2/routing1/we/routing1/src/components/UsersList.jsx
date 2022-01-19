import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then((x) => x.json())
            .then((d) => {
                setUsers(d.data);
            });

    }, []);
    return (
        <div>
            {users.map((e,i) => (
                <p key={i}><Link to={`/user/${e.id}`}>{e.id}{e.first_name }</Link></p>
            ))}
        </div>
    )
}