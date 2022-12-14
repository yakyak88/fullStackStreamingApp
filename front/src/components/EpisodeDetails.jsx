import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// component to display card the details of the episode that the user clicked on
const EpisodeDetails = () => {
    const location = useLocation();
    const [details, setDetails] = useState(location.state.details);
    const [type, setType] = useState(location.state.type);
    useEffect(() => {
        setType(location.state.type);
    }, [type]);

    return (
        <div className="container mt-2 text-light">
            <div className="row mt-3">
                <div className="col-12 col-md-4">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            details.still_path
                        }
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h1 className="text-warning">{details.name}</h1>
                    <p>{details.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default EpisodeDetails;
