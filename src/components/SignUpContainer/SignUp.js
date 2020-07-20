import React, { Component } from "react";

import Col from 'react-bootstrap/Col';



export default class SignUp extends Component {
    render() {
        return (
            <Col className="">
          
            <form className='sign-page'>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control firstName"name="first_name" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control lastName" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control emailAddress" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control userName" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control passWord" placeholder="Enter password" />
                </div>

                <button type="submit" className="user-direct ">Submit</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/sign-in">Click Here!</a>
                </p>
            </form>
            </Col> 
        );
    }
}

