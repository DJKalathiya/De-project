import React from 'react';
import { Link } from "react-router-dom";

const Signup = (props) => {
    return (
        <div className="container">
            <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                <h2 className="card-title mt-3 text-center my-1">Create Account</h2>
                <p className="text-center">Get started with your free account</p>
                <form className='my-2'>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Enter Your name" type="text" minLength={5} required />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Enter Email address" type="email" required />
                    </div>
                   
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{ maxWidth: "120px" }}>
                            <option selected="">+91</option>
                            <option value="1">+099</option>
                            <option value="2">+020</option>
                            <option value="3">+011</option>
                        </select>
                        <input name="" className="form-control" placeholder="Enter Phone number" type="text" maxLength={10} minLength={10} required />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa-solid fa-address-book"></i> </span>
                        </div>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter your full address" />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Create password" type="password" minLength={5} required />
                    </div>
                    <div className="form-group  input-group my-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Repeat password" type="password" minLength={5} required />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-block my-2"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
                </form>
            </article>
        </div>
    )
}

export default Signup;