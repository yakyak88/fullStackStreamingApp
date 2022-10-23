import Card from "./Card";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import useAddToFavorites from "./addToFavorites";

const Movies = () => {
    const { data: movieDetails } = useFetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=692ad17fefe3f279a5bc0dfa87752845"
    );

    return (
        <div className="container mt-5 ">
            <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2">
                {movieDetails.results &&
                    movieDetails.results.map((movie) => {
                        const posterId = movie.poster_path;
                        // console.log(movieDetails);
                        return (
                            <Link
                                key={movie.id}
                                to="/watch"
                                state={{
                                    details: movie,

                                    type: "movie",
                                }}
                            >
                                <Card
                                    image={
                                        "https://image.tmdb.org/t/p/w500" +
                                        posterId
                                    }
                                    id={movie.id}
                                ></Card>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Movies;
