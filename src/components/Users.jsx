import axios from "axios";

const Users = () => {
    const handleUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        const user = {
            name, email, password
        }

        // fetch('http://localhost:5000/users', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        //     if(data.insertedId > 0){
        //         alert('user added successfully!')
        //     }
        // })


        // try {
        //     const res = await fetch('http://localhost:5000/users', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //     const data = await res.json();
        //     console.log(data);
        //     if (data.acknowledged) {
        //         alert('user added successfully!')
        //     }
        // }
        // catch(error){
        //     console.log(error);
        // }

        try {
            const response = await axios.post("http://localhost:5000/users", user, {
                headers: {
                    'content-type': 'application/json'
                }
            });
            console.log(response.data);
            if(response.data.acknowledged){
                alert('user data added successfully!')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>User post</h2>
            <form onSubmit={handleUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Users;