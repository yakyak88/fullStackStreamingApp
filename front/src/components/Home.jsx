import Series from "./Series";
import Movies from "./Movies";

const Home = () => {
    return (
        <div className="container mt-5 ">
            <h2 className="text-light mb-5 mt-5">Trending Tv Shows </h2>

            <Series className="mt-5"></Series>
            <div className="m-5" style={{ color: "black" }}>
                1
            </div>
            <h2 className="text-light mb-5 mt-5">Trending Movies </h2>
            <Movies className="mt-5"></Movies>
        </div>
    );
};

export default Home;
