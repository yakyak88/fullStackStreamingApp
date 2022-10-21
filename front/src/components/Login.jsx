// react component for login screen with bootstrap design
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await res.json();
        if (data.message) {
            setError(data.message);
        } else {
            setError("");
        }

        // if success then redirect to home page
        if (data.name) {
            localStorage.setItem("token", data.email);
            window.location.href = "/";
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={handleSubmit}>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>{" "}
                        {/* error message */}
                        {error && (
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="btn btn-lg btn-warning btn-block"
                        >
                            Sign in
                        </button>
                        {/* not a member? register */}
                        <div className="text-center mt-4">
                            <Link to="/register" className="text-danger">
                                <h6>Not a member? Register</h6>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
