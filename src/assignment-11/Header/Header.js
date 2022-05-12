import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-4 sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h1>O Bike</h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/manageInventories" className="nav-link">
                                        Manage Items
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/addItem" className="nav-link">
                                        Add Item
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/myItems" className="nav-link">
                                        My items
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn btn-primary rounded-pill text-white px-3"
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/allItems" className="nav-link">
                                        All_products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/productDetails/:ProductDetailsId">
                                        inventory
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addItem">
                                        Add Item
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;