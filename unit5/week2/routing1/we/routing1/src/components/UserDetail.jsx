import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((x) => x.json())
            .then((d) => {
                setUser(d.data);
                // console.log(d.data);
            });
       
    }, [id]);

    return (
        <div>
            <div>
                <img src={user.avatar} alt=""/>
                <h3>{user.first_name}</h3>
                <h4>{user.last_name}</h4>
                <p>{user.email}</p>
            </div>
        </div>
    )
}