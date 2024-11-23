import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    // Handle the search action
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to the search page with the query as a URL parameter
            navigate(`/search?q=${searchQuery}`);
        }
    };


    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={`${process.env.PUBLIC_URL}/coollogo_com-186011156.png`} alt="Pulic Logo" className="logo" />
                <div className="d-flex align-items-center">
                </div>

                {/* Navigation links */}
                <nav className="header-nav d-flex align-items-center">
                    <Link to="/" className="header-link">Trang chủ</Link>

                    {/* Dropdown for categories */}
                    <div className="header-dropdown">
                        <span className="header-link" role="button" aria-expanded="false">Sản phẩm</span>
                        <div className="dropdown-menu">
                            <Link to="/packaging" className="dropdown-item">Bao Bì đóng gói</Link>
                            <Link to="/office" className="dropdown-item">Văn phòng</Link>
                            <Link to="/clothing" className="dropdown-item">Quần áo</Link>
                        </div>
                    </div>
                    <Link to="/cart" className="header-link">Giỏ hàng</Link>
                    <Link to="/print-order" className="header-link ms-3">
                        In theo yêu cầu
                    </Link>
                    <Link to="/login" className="header-link">Đăng nhập</Link>
                </nav>

                {/* Search Bar */}
                <form className="header-search d-flex align-items-center" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        className="form-control me-2" // Adds margin to the right
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    />
                    <button type="submit" className="btn btn-light">Search</button>
                </form>
            </div>
        </header>
    );
};

export default Header;
