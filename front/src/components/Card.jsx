import useAddToFavorites from "./addToFavorites";
import React from "react";

const Card = (props) => {
    return (
        <div className=" card border-0 mb-3">
            <img src={props.image} className="card-img" alt="..." />
            {/* font awesome heart icon button to mark favorites movies */}
            <div className="card-img-overlay">
                <button className="btn btn-outline-light">
                    <i className="fas fa-heart text-secondary"></i>
                </button>
            </div>
            <div className="card-img-overlay"></div>
        </div>
    );
};

export default Card;
