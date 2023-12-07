import { React, useState, useContext, useEffect } from 'react'
import UserContext from '../context/User/UserContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [click, setClick] = useState(false);
    const {setUser} = useContext(UserContext);
    
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });

    useEffect(() => {
        //   if(localStorage.getItem('u-token'))
        //     navigate('/');
      }, [])

    const handleSubmit = async (e) => { 
        // setClick(true);
        e.preventDefault();
        console.log(credentials);
        const response = await fetch( `https://homezy-real.glitch.me/auth/register` , {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: credentials.name, email: credentials.email, password: credentials.password})
          }); 
        const json = await response.json();

        // console.log(json);
        if(json){
            // Save the auth token and redirect
            setUser({name:credentials.name, email:credentials.email, user_mongo_id: json._id});
            localStorage.setItem('u-token', json.token);
            // localStorage.removeItem('result');
            navigate("/");
        }
        else{
            alert("User already Exist")
        }
    };


    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='signup'>
            <div className='signup-form'>
                <h2>SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-detail">
                        <label>Name</label>
                        <input type="text" id="name" name="name" value={credentials.name} onChange={handleChange} required />
                    </div>
                    <div className="signup-detail">
                        <label>Email address</label>
                        <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="signup-detail">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} minLength={6} required />
                    </div>
                    <div className="signup-detail">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={handleChange} minLength={6} required />
                    </div>
                    {click
              ?
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              :
              <input className="btn-submit" type="submit" value="Submit" />}
                </form>
            </div>
        </div>
    )
}

export default Signup