import React from "react";
import './videos.css';
import Navbar from "../../components/navbar/navbar";

function VideosPage() {
    return (
        <>

            <div className="search-page-cont">
                <Navbar />
            </div>

            <div className='videos-page-cont'>

                <a href="https://www.youtube.com"><div class="card4">
                <div class="card4-image"><img src="/gla.avif"/></div>
                <p class="card4-title">GLA 200</p>
                <p class="footer3"><img className="url-img" src="/gla2.jpg"/>www.mercedes.com</p>
                </div></a>

                <div class="card4">
                <div class="card4-image"><img src="/gla2.jpg"/></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>



                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>






                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>

                <div class="card4">
                <div class="card4-image"><img src="/gla.avif"/></div>
                <p class="card4-title">GLA 200</p>
                <p class="footer3">www.mercedes.com</p>
                </div>

                <div class="card4">
                <div class="card4-image"><img src="/gla2.jpg"/></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>



                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>

                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>


                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>

                <div class="card4">
                <div class="card4-image"></div>
                <p class="card4-title">Card title</p>
                <p class="footer3">Written by <span class="by-name3">John Doe</span> on <span class="date3">25/05/23</span></p>
                </div>

            </div>

        </>
    );
    }

export default VideosPage;