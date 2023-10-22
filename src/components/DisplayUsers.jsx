import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUsers = () => {
    const loadedData = useLoaderData();
    const [users, setUsers] = useState(loadedData)

    const handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining);
                alert('user deleted successfully')
            })
    }

    return (
        <div>
            <h1>Display users: {loadedData.length}</h1>
            {
                users?.map(data => <li key={data._id}>Name:{data.name} : Email: {data.email} <Link to={`/update/${data._id}`}><button>Update</button></Link> : <Link><button onClick={() => handleDelete(data._id)}>Delete user</button></Link></li>)
            }
        </div>
    );
};

export default DisplayUsers;