import logo from "../assets/Yakyak11111.png";

const Header = () => {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg ">
            <div class="container-fluid">
                <a
                    class="navbar-brand mt-1"
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
                    class="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-1">
                        <li class="nav-item">
                            <a class="nav-link" href="/movies   ">
                                Movies
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/series">
                                Series
                            </a>
                        </li>

                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Link
                            </a>
                        </li> */}
                    </ul>
                    <div class="ben d-flex" role="search">
                        <a href="/search">
                            <button class="btn btn-outline-light">
                                Search <i class="bi bi-search text-light"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
