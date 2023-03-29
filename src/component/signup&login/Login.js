import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div className="container">
            <article className="card-body mx-auto me-auto" style={{ maxWidth: "400px" }}>
                <h2 className="card-title mt-3 text-center my-1">Login into website</h2>
                <p className="text-center">Put correct Email and password.</p>
                <form className='my-2'>
                    <div className="form-group input-group my-1 mx-1 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text "> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Enter Email address" type="email" required />
                    </div>
                    <div className="form-group input-group my-1 mx-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Create password" type="password" minLength={5} required />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-block my-2">Login</button>
                    </div>
                    <p className="text-center">If does not have account than make it : <Link to="/signup">Sign Up</Link> </p>
                </form>
            </article>
        </div>
    )
}

export default Login;