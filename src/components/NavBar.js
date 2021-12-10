import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavBar = () => {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="https://dynamic.brandcrowd.com/preview/logodraft/ce75901f-722b-4239-9a37-66e007f90991/image/large.png" alt="" width="40" height="34"/>
                        </a>
                        <Link className="navbar-brand" to="/">NewsBaba</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar