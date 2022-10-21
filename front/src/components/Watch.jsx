import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// react component to display the details of the movie or tv show that the user clicked on
const Watch = () => {
    const location = useLocation();
    const [details, setDetails] = useState(location.state.details);
    const [type, setType] = useState(location.state.type);
    useEffect(() => {
        setType(location.state.type);
    }, [type]);

    return (
        <div className="container mt-5 text-light">
            <div className="row">
                <div className="col-12 col-md-4">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            details.poster_path
                        }
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h1 className="text-warning">
                        {details.title || details.name}
                    </h1>
                    <p>{details.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Watch;
