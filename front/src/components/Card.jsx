import useAddToFavorites from "./addToFavorites";
import React from "react";

const Card = (props) => {
    const { image, id } = props;
    const { addToFavorites } = useAddToFavorites();
    const testArray = [];

    return (
        <>
            <div className="movieHover card border-0 mb-3">
                <img src={props.image} className="card-img" alt="..." />
                {/* if localstorage.favorites include the id show font awesome icon of red hart with bootstrap if no show font awesome grey icon */}
                {localStorage.favorites &&
                localStorage.favorites.includes(props.id) ? (
                    <i
                        className="fas fa-heart text-danger "
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            fontSize: "2rem",
                        }}
                        onClick={() => {
                            console.log("first");
                        }}
                    ></i>
                ) : (
                    <i
                        className="far fa-heart text-danger "
                        style={{
                            position: "absolute",
                            bottom: "15px",
                            right: "10px",
                            fontSize: "1.7rem",
                        }}
                    ></i>
                )}
            </div>
            <button
                className="text-dark"
                onClick={(e) => {
                    addToFavorites(props.id, testArray, e);
                }}
            >
                Add to favorites
            </button>
        </>
    );
};

export default Card;
