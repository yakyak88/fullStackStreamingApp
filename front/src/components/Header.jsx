import logo from "../assets/Yakyak11111.png";

const Header = () => {
    // logout function
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
        localStorage.removeItem("favorites");
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg ">
            <div className="container-fluid">
                <a
                    className="navbar-brand mt-1"
                    href="/"
                    style={{
                        width: "150px",
                        maxHeight: "90px",
                        display: "inline-block",
                    }}
                >
                    <img
                        style={{ width: "100%", display: "block" }}
                        src={logo}
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1">
                        <li className="nav-item">
                            <a className="nav-link" href="/movies   ">
                                Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/series">
                                Series
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={
                                    localStorage.token ? "/Favorites" : "/login"
                                }
                            >
                                Favorites
                                <i className="fas fa-heart ms-2 text-danger"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="ben d-flex" role="search">
                        <a href="/search">
                            <button className="btn btn-outline-light me-3">
                                Search{" "}
                                <i className="bi bi-search text-light"></i>
                            </button>
                        </a>
                        {localStorage.token ? (
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-light dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {localStorage.token}
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/profile"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/"
                                            onClick={logout}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <a href="/login">
                                <button className="btn btn-outline-light">
                                    Sign in{" "}
                                    <i className="bi bi-person text-light"></i>
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
