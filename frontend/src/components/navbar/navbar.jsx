import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './navbar.css';
import Button from '../buttons/button';
import SearchBar from '../searchbar/searchbar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const buttons = [
        { text: 'All', path: '/search' },
        { text: 'Images', path: '/images' },
        { text: 'Videos', path: '/videos' },
        { text: 'News', path: '/news' },
    ];

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="navbar">
                <div className="search-container">
                    <a onClick={handleClick}>Surf With AJ</a>
                    <SearchBar />
                </div>
                <div className="button-container">
                    {buttons.map((button) => (
                        <Link 
                            to={`${button.path}${query ? `?q=${query}` : ""}`} 
                            key={button.text}
                        >
                            <Button text={button.text} isActive={location.pathname === button.path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
