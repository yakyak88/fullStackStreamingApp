import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import useFetch from "./useFetch";

const Series = () => {
    const { data: imgsArr } = useFetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=692ad17fefe3f279a5bc0dfa87752845"
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
                                to="/tv"
                                state={{
                                    id: img.id,
                                    overview: img.overview,
                                    type: "tv",
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

export default Series;
