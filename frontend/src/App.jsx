import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import SearchPage from './pages/Search/searchPage';
import ImagesPage from './pages/image-pg/imagePage';
import VideosPage from './pages/videos-pg/videos';
import NewsPage from './pages/news-pg/news';




const App = () => {
	const landingRef = useRef(null);

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
              <Header />
              <Home />
              <Footer />
						</>
					}
				/>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/images" element={<ImagesPage />} />
		<Route path="/videos" element={<VideosPage />} />
        <Route path="/news" element={<NewsPage />} />
			</Routes>
		</Router>
	);
};

export default App;