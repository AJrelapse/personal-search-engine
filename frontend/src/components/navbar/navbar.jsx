import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Button from '../buttons/button';
import SearchBar from '../searchbar/searchbar';

const Navbar = () => {
    const location = useLocation();

    const buttons = [
        { text: 'All', path: '/search' },
        { text: 'Images', path: '/images' },
        { text: 'Videos', path: '/videos' },
        { text: 'News', path: '/news' },
    ];

    return (
        <div>
            <div className="navbar">
                <div className="search-container">
                    <h1>Surf With AJ</h1>
                    <SearchBar />
                </div>
                <div className='button-container'>
                    {buttons.map((button) => (
                        <Link to={button.path} key={button.text}>
                            <Button text={button.text} isActive={location.pathname === button.path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
