const Card = (props) => {
    return (
        <div className=" card border-0 mb-3">
            <img src={props.image} className="card-img" alt="..." />
            <div className="card-img-overlay"></div>
        </div>
    );
};

export default Card;
