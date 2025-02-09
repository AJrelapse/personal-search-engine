import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './searchPage.css';
import Navbar from "../../components/navbar/navbar";

function SearchPage() {
    const [results, setResults] = useState([]);
    const location = useLocation();
    
    // Extract query parameter from URL
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        if (query) {
            fetch(`http://127.0.0.1:5000/search?q=${query}`)
                .then((response) => response.json())
                .then((data) => setResults(data))
                .catch((error) => console.error("Error fetching search results:", error));
        }
    }, [query]);

    return (
        <>
            <div className="search-page-cont">
                <Navbar />
            </div>
            
            <div className='search-result'>
                <h1>Search Results</h1>
            </div>

            <div className="search-cards">
            {results.length > 0 ? (
                    results.map((result, index) => (
                        <div className="card1" key={index}>
                            <div>
                                <a href={result.url} target="_blank" rel="noopener noreferrer">
                                    <p className="card-title">{result.title}</p>
                                    <p className="url">{result.url}</p>
                                </a>
                                <div className="card-body">
                                    <p>{result.text}</p>
                                </div>
                            </div>
                    <a href=""><div class="card-image"><img src="/gla2.jpg"/></div></a>
                </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>

        </>
    );
    }

export default SearchPage;