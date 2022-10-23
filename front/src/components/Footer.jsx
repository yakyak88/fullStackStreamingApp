// footer component with copy right design with bootstrap and will allways be at the bottom of the page

import React from "react";

function Footer() {
    return (
        <div className="container-fluid  text-light bg-dark mt-2">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center text-secondary">
                    <h5>© 2022 All Rights Reserved to YakYak </h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;
