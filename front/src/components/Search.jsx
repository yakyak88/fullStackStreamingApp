import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Search = () => {
    const [inpVal, setInp] = useState("");
    const [searchArr, setSearchArr] = useState([]);

    async function getData() {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=692ad17fefe3f279a5bc0dfa87752845&language=en-US&page=1&include_adult=true&query=${inpVal}`
        );
        const moviesArr = response.data.results;
        console.log(moviesArr);
        setSearchArr(moviesArr);
    }
    return (
        <div className="mt-5">
            <div className="container">
                <input
                    onChange={(e) => {
                        setInp(e.target.value);
                        getData();
                    }}
                    className="form-control mb-5"
                    type="text"
                    placeholder="Search for movies or series"
                    readonly
                />
                <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2">
                    {searchArr.map((movie) => {
                        if (movie.poster_path) {
                            return (
                                <Link
                                    to={
                                        movie.media_type === "movie"
                                            ? "/watch"
                                            : "/tv"
                                    }
                                    state={{
                                        id: movie.id,
                                        type: movie.media_type,
                                    }}
                                >
                                    <Card
                                        image={
                                            "https://image.tmdb.org/t/p/w500" +
                                            movie.poster_path
                                        }
                                    ></Card>
                                </Link>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;
