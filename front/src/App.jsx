import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from "./components/Watch";
import Tv from "./components/Tv";
import Episodes from "./components/Episodes";
import Series from "./components/Series";
import Movies from "./components/Movies";
import EpisodeDetails from "./components/EpisodeDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App ">
            <Router>
                <Header></Header>
                <main>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/watch" element={<Watch />}></Route>
                        <Route path="/tv" element={<Tv />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/Series" element={<Series />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route
                            path="/episosedetails"
                            element={<EpisodeDetails />}
                        ></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route
                            path="/episodes"
                            element={<Episodes></Episodes>}
                        ></Route>
                    </Routes>
                </main>

                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
