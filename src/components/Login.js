import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext';

const Login = () => {

    const [click, setClick] = useState(false);

    const { setUser,user } = useContext(UserContext);

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    useEffect(() => {
        // if (localStorage.getItem('u-token'))
            // navigate('/');
    }, [])

    const handleSubmit = async (e) => {
        // setClick(true);
        e.preventDefault();
        const response = await fetch(`https://homezy-real.glitch.me/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();

        console.log(json);
        if (json) {

            // Save the auth token and redirect
            // console.log(json);
            const mongo_id=json.others._id
            console.log(mongo_id);
            setUser({ name: json.others.username, email: credentials.email, user_mongo_id: mongo_id });
            localStorage.setItem('u-token', json.token);
            
            localStorage.setItem('u-id', mongo_id);
            console.log(user);
        
            navigate("/");
            // console.log(json);
        }
        else {
            alert("Invalid Credentials!!")
        }
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='signup'>
            <div className='signup-form'>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-detail">
                        <label>Email address</label>
                        <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="signup-detail">
                        <label>Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
                    </div>

                    <div id="form-btn">
                        {click
                            ?
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                            :
                            <input className="btn-submit" type="submit" value="Submit" />}

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login