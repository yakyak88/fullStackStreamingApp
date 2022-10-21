import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import useFetch from "./useFetch";

const Movies = () => {
    const { data: imgsArr } = useFetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=692ad17fefe3f279a5bc0dfa87752845"
    );

    return (
        <div className="container mt-5 ">
            <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2">
                {imgsArr.results &&
                    imgsArr.results.map((img) => {
                        const literallyImg = img.poster_path;
                        console.log(imgsArr);
                        return (
                            <Link
                                to="/watch"
                                state={{
                                    details: img,

                                    type: "movie",
                                }}
                            >
                                <Card
                                    image={
                                        "https://image.tmdb.org/t/p/w500" +
                                        literallyImg
                                    }
                                ></Card>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Movies;
