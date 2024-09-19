import React from 'react';
import { useState } from 'react';
import joi, {  schema } from 'joi-browser';

const Login = () => {
    const [form, setForm] = useState(
            { email: "", password: "", errors:{}}
          )
          schema = {
            email: joi.string().required(),
            password: joi.string().required()
          }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const res = joi.validate(form, schema, {abortEarly: false})
        if(res.error === null) {
            setForm({...form, errors: {}});
                      return null;}

        for(const error of res.error.details){
            errors[error.path] = error.message;
        }
        setForm({...form, errors})
        }

    return ( 
    <> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input name='email' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                {form.errors.email &&<div className="alert alert-danger ">{form.errors.email}</div>}                
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                </div>
                {form.errors.password &&<div className="alert alert-danger">{form.errors.password}</div>}                
                <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
    </> 
    );
}
 
export default Login;