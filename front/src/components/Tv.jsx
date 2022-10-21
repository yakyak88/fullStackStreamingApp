import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
const Tv = () => {
    const location = useLocation();
    const { data: seasons } = useFetch(
        `https://api.themoviedb.org/3/tv/${location.state.id}?api_key=692ad17fefe3f279a5bc0dfa87752845&language=en-US`
    );

    return (
        <div className="tv">
            <div className="container">
                <div className="row ">
                    <div className="my-auto col-6 text-start">
                        <h1 className="text-warning">{seasons.name}</h1>
                        <span className="  text-light ">
                            {seasons.overview}
                        </span>

                        <h4 className="text-danger mt-3">
                            Rating: {seasons.vote_average}/10
                        </h4>
                    </div>
                    <div className="col-2 ms-5"></div>
                    <img
                        className="col-3 ms-5 "
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            seasons.poster_path
                        }
                        height="400vh"
                    />
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-4  ">
                    {seasons.seasons &&
                        seasons.seasons.map((season) => {
                            return (
                                <div>
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        to="/episodes"
                                        state={{
                                            id: location.state.id,
                                            num: season.season_number,
                                            img: season.poster_path,
                                            overview: season.overview,
                                        }}
                                    >
                                        <div
                                            key={season.id}
                                            className="card  mt-3"
                                            style={{ width: "18rem" }}
                                        >
                                            <img
                                                className="card-img-top"
                                                src={
                                                    "https://image.tmdb.org/t/p/w500" +
                                                    (!season.poster_path
                                                        ? seasons.poster_path
                                                        : season.poster_path)
                                                }
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-light">
                                                    {season.name}
                                                </h5>
                                                <p className="card-text text-light">
                                                    {season.episode_count}{" "}
                                                    Episodes
                                                </p>{" "}
                                                <button className="btn btn-warning">
                                                    Watch {season.name}
                                                </button>
                                            </div>
                                        </div>{" "}
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Tv;
