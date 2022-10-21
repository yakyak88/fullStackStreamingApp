import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";
const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function getEpisodes() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/${location.state.id}/season/${location.state.num}?api_key=3645948f6600ca84813cb3900fecc62a&language=en-US`
            );
            setEpisodes(response.data);
        }
        getEpisodes();
    }, []);

    return (
        <div className="container mt-5  ">
            <div className="container mb-4">
                <div className="row ">
                    <div className="my-auto col-6 text-start">
                        <h1 className="text-warning">
                            Season {episodes.season_number}
                        </h1>
                        <span className="  text-light ">
                            {location.state.overview}
                        </span>
                    </div>
                    <div
                        style={{ marginLeft: "300px" }}
                        className="col-2 ms-5"
                    ></div>
                    <img
                        className="col-3 ms-5 "
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            location.state.img
                        }
                        height="400vh"
                    />
                </div>
            </div>
            <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2">
                {episodes.episodes &&
                    episodes.episodes.map((episode) => {
                        console.log(episode);
                        return (
                            <>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to="/episosedetails"
                                    state={{
                                        details: episode,
                                        id: location.state.id,
                                        type: "tv",
                                    }}
                                >
                                    <Card
                                        image={
                                            "https://image.tmdb.org/t/p/w500" +
                                            episode.still_path
                                        }
                                    ></Card>{" "}
                                    <h5 className="text-decoration-none text-light">
                                        Episode {episode.episode_number}
                                    </h5>
                                    <p className="text-decoration-none text-light">
                                        {episode.name}
                                    </p>
                                </Link>
                            </>
                        );
                    })}
            </div>
        </div>
    );
};

export default Episodes;
