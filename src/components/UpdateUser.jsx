import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <form action="">
                <input type="text" defaultValue={data.name} name="name" placeholder="name" id="" />
                <br />
                <input type="email" defaultValue={data.email} name="email" placeholder="email" id="" />
                <br />
                <input type="password" defaultValue={data.password} name="password" placeholder="password" id="" />
                <br />
                <input type="submit" value="Update value" />
            </form>
        </div>
    );
};
export default UpdateUser;
