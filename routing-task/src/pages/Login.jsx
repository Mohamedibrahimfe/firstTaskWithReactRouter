import React from 'react';
import { useState } from 'react';


const Login = () => {
    const [form, setForm] = useState(
        
            {email: "", password: ""}
        
            
        
    )


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return ( 
    <> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                </div>
                
                <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
    </> 
    );
}
 
export default Login;