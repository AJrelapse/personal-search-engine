import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './home.css';
import SearchBar from '../../components/searchbar/searchbar';

function Home() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search?q=${query.trim()}`);
        }
    };

    return (
        <>
            <div className='Home'>
                <div className="item-container">
                    <div className="surf">
                        <h1> Surf With AJ </h1>
                    </div>
                    <SearchBar query={query} setQuery={setQuery} />
                    <div className="submit">
                        <button onClick={handleSearch}>Search</button> 
                    </div>
                    <div className="content">
                        <p>If you are born poor, that's not your mistake.
                            If you die poor, that's your mistake.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
