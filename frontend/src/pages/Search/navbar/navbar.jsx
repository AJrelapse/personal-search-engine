import React, { useEffect, useState } from 'react';
import './navbar.css';
import Button from '../buttons/button';
import SearchBar from '../../../components/searchbar/searchbar';

const Navbar = () => {



	return (
		<div>
			<div className="navbar">
                <div className="search-container">
                    <h1>Surf With AJ</h1>
                <SearchBar />
                </div>
                    <div className='button-container'>   
                    <a href="/search" className="active"><Button text={"All"}/></a>
                    <a href="/images" className="active"><Button text={"Images"}/></a>
                    <a href="/videos" className="active"><Button text={"Videos"}/></a>
                    <a href="/news" className="active"><Button text={"News"}/></a>
                    </div>
            </div>
		</div>
	);
};

export default Navbar;
