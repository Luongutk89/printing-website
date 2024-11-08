import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // You can update this to navigate to a search results page or handle search differently
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="header-logo">AZnet</h1>

                {/* Navigation Links */}
                <nav className="header-nav">
                    <Link to="/" className="header-link">Trang chủ</Link>

                    {/* Dropdown for "Categories" */}
                    <div className="header-dropdown">
                        <span className="header-link">Categories</span>
                        <div className="dropdown-menu">
                            <Link to="/packaging" className="dropdown-item">Packaging</Link>
                            <Link to="/office" className="dropdown-item">Office</Link>
                            <Link to="/clothing" className="dropdown-item">Clothing</Link>
                        </div>
                    </div>

                    <Link to="/cart" className="header-link">Cart</Link>
                    <Link to="/login" className="header-link">Login</Link>
                </nav>

                {/* Search Bar */}
                <form className="header-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        className="form-control"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
                    />
                    <button type="submit" className="btn btn-light">Search</button>
                </form>
            </div>
        </header>
    );
};

export default Header;
