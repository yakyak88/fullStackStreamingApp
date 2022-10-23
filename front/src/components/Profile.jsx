// update profile screen to show user's info and allow them to update it (name, email, password) and delete their account
//

import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-light">
                            <h3>Profile</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className="text-light">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-light">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-light">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control "
                                        id="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-light">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                    >
                                        Update Profile
                                    </button>
                                </div>{" "}
                                <div className="form-group">
                                    <button className="btn btn-danger ml-3 mt-3">
                                        Delete Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
