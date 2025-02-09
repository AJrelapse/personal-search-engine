import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchbar.css';

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && query.trim() !== "") {
            navigate(`/search?q=${query.trim()}`);
        }
    };

    const handleClick = () => {
        if (query.trim() !== "") {
            navigate(`/search?q=${query.trim()}`);
        }
    };

    return (
        <div className="search">
            <button className="shortcut" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /> 
                    <line x1="21" y1="21" x2="16.65" y2="16.65" /> 
                </svg>
            </button>

            <input
                type="text"
                className="search_bar"
                placeholder="Start Surfing ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default SearchBar;
