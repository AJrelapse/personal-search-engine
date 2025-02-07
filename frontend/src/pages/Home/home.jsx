import React from "react";
import './home.css';
import SearchBar from '../../components/searchbar/searchbar';

function Home() {
  return (
    <>
      <div className='Home'>
        <div className="item-container">
        <div className="surf">
            <h1> Surf With AJ </h1>
        </div>
        <SearchBar />
        <div className="submit">
            <button>Search</button>
        </div>

        <div className="content">
            <p>If you born poor that's not your mistake,
                if you die poor that's your mistake.
            </p>
        </div>

        </div>
        </div>
    </>
  );
}

export default Home;