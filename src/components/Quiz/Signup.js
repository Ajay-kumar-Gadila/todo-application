import { useState } from "react";

const Signup = () =>{
    const [regis,setRegis] = useState(
        {name:'',
        email:'',
        password:'',}
    );

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setRegis((subData) =>({
            ...subData,
            [name]: value,
        }))
    };
    const handleSubmit = (e) => {
        if(!regis.name || !regis.email || !regis.password){
            alert("please enter value ");
        }
        fetch('http://localhost:3001/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(regis),
            //   The JSON.stringify() method is used to convert 
            // the formData object into a JSON string.
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('User data sent to the server:', data);
                // Add any success message or redirect here
            })
            .catch((error) => {
                console.error('Error while sending user data:', error);
            });


    }


    return (
        <div>
           <h1>Registration Form</h1>
           <form onSubmit={handleSubmit}>
             <div>
               <label>Name:</label>
               <input type="text" name="name" value={regis.name} onChange={handleChange} />
             </div>
             <div>
               <label>Email:</label>
               <input type="email" name="email" value={regis.email} onChange={handleChange} />
             </div>
             <div>
               <label>Password:</label>
               <input type="Password" name="password" value={regis.password} onChange={handleChange} />
             </div>
             <button type="submit">Register</button>
           </form>
         </div>
    );
}

export default Signup;