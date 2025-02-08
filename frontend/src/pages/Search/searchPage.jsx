import React from "react";
import './searchPage.css';
import Navbar from "../../components/navbar/navbar";

function SearchPage() {
    return (
        <>
            <div className="search-page-cont">
                <Navbar />
            </div>
            
            <div className='search-result'>
                <h1>Search Results</h1>
            </div>

            <div className="search-cards">
                <div class="card1">
                    <div>
                <a href=""><p class="card-title">Automobili Lamborghini</p>
                <p class="url">www.lamborghini.com</p></a>
                <div class="card-body">
                <p>
                    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
                </p>
                </div>
                </div>
                <a href=""><div class="card-image"><img src="/gla2.jpg"/></div></a>
                </div>
            </div>

        </>
    );
    }

export default SearchPage;