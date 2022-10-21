// react component for login screen with bootstrap design
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate>
                        <h1 className="h3 mb-5 font-weight-normal text-light">
                            Please sign in
                        </h1>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="text-light">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password" className="text-light">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-lg btn-warning btn-block"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
